import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {tasks as data} from '../modules/tasks';
import TaskForm from './TaskForm';
import '../components/tasklist.css';

const TaskContainer = () => {
  
    //------------------Array de tareas----------------------
    const [tarea, setTarea] = useState([]);
    useEffect(() => {
        setTarea(data);
    }, []);
    if(tarea.length === 0) return <h1>No hay tareas</h1>
    //------------------Fin Array de tareas------------------
    //------------------Agregar tarea------------------------
    const addTask = (taskTitle, description) => {
        setTarea([...tarea, {
            title: taskTitle, 
            id: tarea.length + 1,
            description: description
        }]);
    }
    //------------------Fin Funcion Agregar tarea--------------------
   //-------------------Funcion eliminar tarea------------
   function DeleteById(tareaId){
    const newTarea = tarea.filter((tarea) => tarea.id !== tareaId);
    setTarea(newTarea);
    }
    //------------------Fin funcion eliminar tarea--------------
    function editById(tareaId){
        console.log('probando')
    }
    //------------------Retorno del Componente------------------------
    return (
        <div className='taskContainer'>
            <h1>Lista de Tareas</h1>
            <TaskForm addTask={addTask} deleteTarea={DeleteById}/>
            <TaskList tarea={tarea} addTarea={addTask} deleteTarea={DeleteById} editTarea={editById}/>
        </div>
    );
    //------------------------Fin del Componente----------------------
}

export default TaskContainer;
