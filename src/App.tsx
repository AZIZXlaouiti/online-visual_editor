import { createPlateOptions} from '@udecode/plate';
import { createPlateComponents } from '@udecode/plate';
import io from 'socket.io-client'
import { basicNodesPlugins } from './config/config';
import { Toolbar } from './config/Toolbar';
import { HeadingToolbar  , Plate} from '@udecode/plate';
import { basicNodesInitialValue } from './config/config';
import { useRef , useEffect } from 'react';
import { usePlateEditorRef } from '@udecode/plate'
import { Operation } from 'slate';
const socket = io('http://localhost:4000')
const editableProps = {
  placeholder: 'Type…',
  style: {
    padding: '15px',
  },
};

    const components = createPlateComponents()
    const options = createPlateOptions()
 
  
    const  App: React.FC =() =>{
  const editor = usePlateEditorRef()

      // const editor = useMemo(() => withReact(createEditor()), []);
      // const [value, setValue] = useState<Descendant[]>([
      //     { type: 'paragraph',
      //      children: [{ text: '' }] 
      //   }])
    
      const id =  useRef(`${Date.now()}`)
      const remote = useRef(false)
      const socketchange = useRef(false);
      useEffect(() => {
   
        // socket.emit("send-value")
        socket.on(
          'new-remote-operations',
          ({editorId , ops }:{editorId:string , ops: Operation[]}) => {
          if (id.current !== editorId ) {
            remote.current = true;
            ops.forEach((op:any) => {
              editor.apply(op);
            });
            remote.current = false;
            socketchange.current = true; //variable to track socket changes in editor via operations
          }
          return () =>{
              socket.off('new-remote-operations')
          }
        });}, [editor])
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
