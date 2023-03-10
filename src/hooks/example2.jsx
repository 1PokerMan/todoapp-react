import React, {useState, useContext} from 'react';
import '../modules/example.css'
/**
 * 
 * @returns Componente 1 dispone de un contexto y va a tener un valor que recibe del padre
 */
const miContext = React.createContext(null);
const Component1 = () => {
    // El contexto es un objeto que se crea con React.createContext., el valor inicial es null y va a rellenarse con los datos del padre
    const state = useContext(miContext);
    return (
        <div className='example2'>
            <h1>
                el token es: {state.token}
            </h1>
            //mostramos el componente2
            <Component2 />
        </div>
    );
}

const Component2 = () => {
    const state = useContext(miContext);
    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}

const ComponentWhitContext = () => {
    const estadoInicial = {
        token: '123456789',
        sesion: 'iniciada'
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    function refreshSession(){
        const random = Math.floor(Math.random() * 41);
        setSessionData({
            //token: '987654321',
            token: random,
            //sesion: sessionData.sesion + ' ' + random
            sesion: 'iniciada ' + random
        })
    }

    return (
        <div>
            <miContext.Provider value={sessionData}>
                <h3>*** Ejemplo de useState y useContext ***  </h3>
                <Component1 />
                <button onClick={refreshSession}>Actualizar sesion</button>
            </miContext.Provider>
        </div>
    );
}

export default ComponentWhitContext;