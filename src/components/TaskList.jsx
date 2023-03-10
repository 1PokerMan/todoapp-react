//funcion para enlistar tareas
import './tasklist.css';

const TaskList = ({tarea, deleteTarea, editTarea}) => {
//------------------Funcion guardar en localStorage------------------
const setLocalStorage = (tarea) => {
    localStorage.setItem('tarea', JSON.stringify(tarea));
};setLocalStorage(tarea)
//------------------Fin Funcion guardar en localStorage------------------

    return (
        <div className='container'>
            {<div className='task'>
                    {tarea.map((task) => (
                        <div className='card' key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <img  onClick={ () => {editTarea(task.id)} } src="https://unpkg.com/@tabler/icons@2.9.0/icons/pencil-plus.svg" alt='edit'/>
                            <img  onClick={ () => {deleteTarea(task.id)} } src="https://unpkg.com/@tabler/icons@2.9.0/icons/trash.svg" alt='trash'/>
                        </div>
                    ))}
            </div>}
        </div>
    );
}

export default TaskList;

/**
 * 
 * 
 */