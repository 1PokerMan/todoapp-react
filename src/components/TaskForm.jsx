//funcion para agregar tareas
import React,{useState} from 'react';
import './taskform.css';

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === '' || description === '') return;
        else{
            addTask(title, description); 
            setDescription('');
            setTitle(''); 
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input value={title} type="text" className='text' placeholder='Ingrese nombre de la tarea'
            onChange={(e) => {setTitle  (e.target.value)}}/>
            <input value={description} type="text" className='text' placeholder='Ingrese descripcion'
            onChange={(e) => {setDescription  (e.target.value)}}/>
            <button className='boton'>Enviar</button>
        </form>
    );
}

export default TaskForm;
