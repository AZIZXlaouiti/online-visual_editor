import { createPlateOptions} from '@udecode/plate';
import { createPlateComponents } from '@udecode/plate';
import io from 'socket.io-client'
import { basicNodesPlugins } from './config/config';
import { Toolbar } from './config/Toolbar';
import { HeadingToolbar  , Plate} from '@udecode/plate';
import { basicNodesInitialValue } from './config/config';
import { useRef , useEffect, useState } from 'react';
import { usePlateEditorRef } from '@udecode/plate'
import { useMemo } from 'react';
import { withReact } from 'slate-react';
import { createEditor } from 'slate';
import { Descendant, Operation } from 'slate';
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
      const [value , setValue ] = useState<Descendant[]>(basicNodesInitialValue)
      const id =  useRef(`${Date.now()}`)
      const remote = useRef(false)
      const socketchange = useRef(false);
      useEffect(() => {
   
        // socket.emit("send-value")
        socket.on(
          'new-remote-operations',
          ({editorId , ops }:{editorId:string , ops: Operation[]}) => {
           
              if (editor && id.current !== editorId) {

                console.log("editor",editor)
                remote.current = true;
                ops.forEach((op:any) => {
                  editor.apply(op);
                });
                remote.current = false;
                socketchange.current = true
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
        id={`${id}`}
        onChange={value => {
          setValue(value);
          const ops = editor.operations
          .filter(o => {
            if (o) {
              return (
                o.type !== "set_selection" 
           
              );
            }

            return false;
          })
          
          .map((o: any) => ({ ...o, data: { source: "one" } }));
          if (ops.length && !remote.current && !socketchange.current) {
            socket.emit("new-operations", {
              editorId: id.current,
              ops,
            });
          }
          socketchange.current = false;
        }}
        initialValue={value}
        editableProps={editableProps}
        components={components}
        options={options}
        plugins={basicNodesPlugins}
      />
    </div>
  );
}

export default App;
