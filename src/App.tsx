import { createBlockquotePlugin, createBoldPlugin, createCodeBlockPlugin, createCodePlugin, createHeadingPlugin, createHighlightPlugin, createItalicPlugin, createParagraphPlugin, createReactPlugin, createStrikethroughPlugin, createUnderlinePlugin, Plate, usePlateEditorRef } from '@udecode/plate'
import { createPlateOptions } from '@udecode/plate';
import { createPlateComponents } from '@udecode/plate';
import React, { useMemo, useState , useRef, useEffect} from 'react'
import { createEditor, BaseEditor, Descendant, Operation } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'
import io from 'socket.io-client'
import { HeadingToolbar , BlockToolbarButton ,MarkToolbarButton, getPlatePluginType , ListToolbarButton } from '@udecode/plate';
import { ELEMENT_H1, ELEMENT_PARAGRAPH, MARK_STRIKETHROUGH, MARK_UNDERLINE, MARK_CODE, ELEMENT_H2, MARK_BOLD, MARK_ITALIC, ELEMENT_BLOCKQUOTE } from '@udecode/plate'
const socket = io('http://localhost:4000')
const editableProps = {
  placeholder: 'Type…',
  style: {
    padding: '15px',
  },
};
const createElement = (
  text = '',
  {
    type = ELEMENT_PARAGRAPH,
    mark,
  }: {
    type?: string;
    mark?: string;
  } = {}
  ) => {
    const leaf = { text };
    // if (mark) {
    //     leaf[mark] = true;
    //   }
      
      return {
        type,
        children: [leaf],
      };
    };
    const components = createPlateComponents()
    const options = createPlateOptions()
    const basicNodesPlugins = [
      // editor
      createReactPlugin(),
      createHighlightPlugin(),
      // elements
      createParagraphPlugin(),      // paragraph element
      createBlockquotePlugin(),     // blockquote element
      createCodeBlockPlugin(),      // code block element
      createHeadingPlugin(),        // heading elements
      // marks
      createBoldPlugin(),           // bold mark
      createItalicPlugin(),         // italic mark
      createUnderlinePlugin(),      // underline mark
      createStrikethroughPlugin(),  // strikethrough mark
      createCodePlugin()            // code mark
    ]
    const basicNodesInitialValue = [
      createElement('🧱 Elements', { type: ELEMENT_H1 }),
      createElement('🔥 Basic Elements', { type: ELEMENT_H2 }),
      createElement('Blockquote', { type: ELEMENT_BLOCKQUOTE }),
      createElement('This text is bold.', { mark: MARK_BOLD }),
      createElement('This text is italic.', { mark: MARK_ITALIC }),
      createElement('This text is underlined.', {
        mark: MARK_UNDERLINE,
      }),
      {
        type: ELEMENT_PARAGRAPH,
        children: [
          {
            text: 'This text is bold, italic and underlined.',
           
            [MARK_ITALIC]: true,
            [MARK_UNDERLINE]: true,
          },
        ],
      },
      createElement('This is a strikethrough text.', {
        mark: MARK_STRIKETHROUGH,
      }),
      createElement('This is an inline code.', { mark: MARK_CODE }),
    ]
    const  App =() =>{
      const editor  = usePlateEditorRef()
      return (
        <div
        className="editor container"
        >
       <HeadingToolbar>
       <ListToolbarButton
        icon={<>tool</>}
       />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H1)}
        icon={<>H1</>}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H2)}
        icon={<>H2</>}
      />
       <MarkToolbarButton
          type={getPlatePluginType(editor, MARK_BOLD)}
          icon={<>B</>}
        />
       </HeadingToolbar>
      <Plate
        id="1"
        onChange={value => console.log(value)}
        initialValue={basicNodesInitialValue}
        editableProps={editableProps}
        components={components}
        options={options}
        plugins={basicNodesPlugins}
      />
    </div>
  );
}

export default App;
