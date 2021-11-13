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
export const basicNodesInitialValue = 
  [
    {
        type: "h1",
        children: [
            {
                text: "🧱 Elements"
            }
        ]
    },
    {
        type: "h2",
        children: [
            {
                text: "🔥"
            },
            {
                text: " Basic Elements",
                highlight: true
            }
        ]
    },
    {
        type: "blockquote",
        children: [
            {
                text: "Blockquote"
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is bold."
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is italic.",
                italic: true
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is underlined.",
                code: true
            }
        ]
    },
    {
        type: "p",
        children: [
            {
                text: "This text is bold, italic and underlined.",
                italic: true,
                underline: true
            }
        ]
    }

  ]