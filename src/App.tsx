import { createPlateOptions} from '@udecode/plate';
import { createPlateComponents } from '@udecode/plate';
import io from 'socket.io-client'
import { basicNodesPlugins } from './config/config';
import { Toolbar } from './config/Toolbar';
import { HeadingToolbar  , Plate} from '@udecode/plate';
import { basicNodesInitialValue } from './config/config';
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
