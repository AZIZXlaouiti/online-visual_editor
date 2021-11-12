import { createBlockquotePlugin, createBoldPlugin, createCodeBlockPlugin, createCodePlugin, createHeadingPlugin, createHighlightPlugin, createItalicPlugin, createParagraphPlugin, createReactPlugin, createStrikethroughPlugin, createUnderlinePlugin, ELEMENT_PARAGRAPH } from '@udecode/plate'
import { ELEMENT_H1, MARK_STRIKETHROUGH, MARK_UNDERLINE, MARK_CODE, ELEMENT_H2, MARK_BOLD, MARK_ITALIC, ELEMENT_BLOCKQUOTE } from '@udecode/plate'

export const basicNodesPlugins = [
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
export const createElement = (
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
    // leaf[mark] = true;
    //   }

    return {
        type,
        children: [leaf],
    };
};  
export const basicNodesInitialValue = [
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