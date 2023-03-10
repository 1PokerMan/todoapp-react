import React,{useRef, useState, useEffect} from 'react';
import '../modules/example.css'

const Example1 = () => {
    //-------------------------------------
    //variables de inicio
    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Pablo',
        apellido: 'Avesha'
    }
    //variables de estado
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    //funciones
    const modificarValor = () => {
        setContador(contador + 1);
    }
    const resetValor = () => {
        setContador(valorInicial);
    }
    const modificarPersona = () => {
        if(persona.nombre === 'Pablo'){
        setPersona({
            ...persona,
            nombre: 'Tania',
            apellido: 'Albarracin'
        })
        }else{
            setPersona({
                ...persona,
                nombre: 'Pablo',
                apellido: 'Avesha'
            })
        }
    }

    //useEffect ejecuta todo lo que tiene dentro cuando se vuelve a renderizar el componente generalmente por un cambio en el estado
    const miRef = useRef();
    useEffect(() => {
        //console.log("useEffects se ejecuta cuando se genere un cambio en el componente a traves de useState");
        console.log(miRef);
    }, [persona]);//muestra el resultado cuando se modifica la persona
    //-------------------------------------
    return (
        <div className='example1'>
            
            <h1>Contador: {contador}</h1>
            <button onClick={modificarValor}>Aumentar contador</button>
            <button onClick={resetValor}>Resetear contador</button>
            <h1>Nombre: {persona.nombre}</h1>
            <h1>Apellido: {persona.apellido}</h1>
            <button onClick={modificarPersona}>Modificar persona</button>
            <h4 ref={miRef}></h4>
        </div>
    );
}

export default Example1;
