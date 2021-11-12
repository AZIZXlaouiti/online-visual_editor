import { BlockToolbarButton, getPlatePluginType, MarkToolbarButton } from '@udecode/plate'
import { usePlateEditorRef } from '@udecode/plate'
import { ELEMENT_H1, MARK_HIGHLIGHT, MARK_STRIKETHROUGH, MARK_UNDERLINE, MARK_CODE, ELEMENT_H2, MARK_BOLD, MARK_ITALIC, ELEMENT_BLOCKQUOTE } from '@udecode/plate'
import { FormatBold } from '@styled-icons/material';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt'
import { FormatItalic } from '@styled-icons/material/FormatItalic'
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined'
import { FormatStrikethrough } from '@styled-icons/material';
import { Highlight } from '@styled-icons/material';
import { FormatQuote } from '@styled-icons/material';

export const Toolbar: React.FC = () => {
  const editor = usePlateEditorRef()

  return (
    <>
    


      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H1)}
        icon={<>h1</>}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_H2)}
        icon={<>h2</>}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
      />
      <MarkToolbarButton 
        type={getPlatePluginType(editor, MARK_CODE)}
        icon={<CodeAlt />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
      />
      <MarkToolbarButton
        type={getPlatePluginType(editor, MARK_HIGHLIGHT)}
        icon={<Highlight />}
      />
      <BlockToolbarButton
        type={getPlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
      />
    </>
  )

}
