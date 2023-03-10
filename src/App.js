import React from 'react';
import './modules/example.css'
import TaskContainer from './components/TaskContainer';

function App() {

  return (
    <div className='component'>
      <TaskContainer />     
    </div>
  );
}

export default App;




/**
 * import Example1 from './hooks/example1';
import ComponentWhitContext from './hooks/example2';
import Example3 from './hooks/example3';
 * 
 * <Example1 />
      <hr/>
      {<ComponentWhitContext />}
      <hr/>
      <Example3 nombre="1PokerMan" >
        <h1>hola</h1>
      </Example3 >
 */