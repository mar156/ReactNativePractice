

export const Funciones= ()=>{
    const sumar = (a:number,b:number):number=> {
    return a+b
        //Nos dice que devuelve la funcion
    }
    return(
        <>
           <h3>Funciones</h3>
           <span>El resultado es {sumar(3,5)}</span>
        </>
    )
}