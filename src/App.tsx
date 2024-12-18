import { MouseEvent, useState } from 'react';

import { Mask } from './containers/Mask';
import { HeaderInfo } from './containers/HeaderInfo';

import './App.scss';



const App = () => {

  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  const onAppMouseMove = (e: MouseEvent) => {
    
    setMousePos({x: e.clientX, y: e.clientY})
  }

  return (
    <div className="resume-content" onMouseMove={onAppMouseMove}>

      <Mask mousePos={mousePos}/>
      
      <div className='app-initial-children'>
        <HeaderInfo />
      </div>
    </div>
  );
};

export default App;