import React from 'react';
import '../modules/example.css'

const Example3 = (props) => {
    return (
        <div className='example3'>
            <h1>*** Ejemplo de children props ***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {props.children}
        </div>
    );
}

/**
props.children pintara por defecto
aquello que se encuentre entre las etiquedas
de apuiertura y cierre del componente superior
 */
export default Example3;
