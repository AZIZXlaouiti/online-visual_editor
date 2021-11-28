"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicNodesInitialValue = exports.createElement = exports.basicNodesPlugins = void 0;
const plate_1 = require("@udecode/plate");
exports.basicNodesPlugins = [
    (0, plate_1.createReactPlugin)(),
    (0, plate_1.createHighlightPlugin)(),
    (0, plate_1.createParagraphPlugin)(),
    (0, plate_1.createBlockquotePlugin)(),
    (0, plate_1.createCodeBlockPlugin)(),
    (0, plate_1.createHeadingPlugin)(),
    (0, plate_1.createBoldPlugin)(),
    (0, plate_1.createItalicPlugin)(),
    (0, plate_1.createUnderlinePlugin)(),
    (0, plate_1.createStrikethroughPlugin)(),
    (0, plate_1.createCodePlugin)()
];
const createElement = (text = '', { type = plate_1.ELEMENT_PARAGRAPH, } = {}) => {
    const leaf = { text };
    return {
        type,
        children: [leaf],
    };
};
exports.createElement = createElement;
exports.basicNodesInitialValue = [
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
];
//# sourceMappingURL=config.js.map