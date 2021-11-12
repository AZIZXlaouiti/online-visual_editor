import { createPlateOptions} from '@udecode/plate';
import { createPlateComponents } from '@udecode/plate';
import io from 'socket.io-client'
import { basicNodesPlugins } from './config/config';
import { Toolbar } from './config/Toolbar';
import { HeadingToolbar  , Plate} from '@udecode/plate';
import { ELEMENT_H1, ELEMENT_PARAGRAPH, MARK_STRIKETHROUGH, MARK_UNDERLINE, MARK_CODE, ELEMENT_H2, MARK_BOLD, MARK_ITALIC, ELEMENT_BLOCKQUOTE } from '@udecode/plate'
import { createElement } from './config/config';
const socket = io('http://localhost:4000')
const editableProps = {
  placeholder: 'Type…',
  style: {
    padding: '15px',
  },
};

    const components = createPlateComponents()
    const options = createPlateOptions()
 
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
      return (
        <div
        className="editor container"
        >
       <HeadingToolbar>
        <Toolbar/>
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
