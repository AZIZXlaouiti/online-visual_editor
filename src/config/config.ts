import { createBlockquotePlugin, createBoldPlugin, createCodeBlockPlugin, createCodePlugin, createHeadingPlugin, createHighlightPlugin, createItalicPlugin, createParagraphPlugin, createReactPlugin, createStrikethroughPlugin, createUnderlinePlugin, ELEMENT_PARAGRAPH } from '@udecode/plate'
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