//type, class (sirve para crear instancias, existe en js), interface

interface Persona {
    nombreCompleto:string;
    edad:number;
    direccion: Direccion
}
//cuando tengo objeto anidado defino otra interface
interface Direccion{
    pais:string;
    casaNo:number;
}

export const ObjetosLiterales=()=>{
    const persona: Persona ={
       nombreCompleto:'Fernando',
       edad: 35,
       direccion: {
           pais: 'Canada',
           casaNo:615
        }
    }
    //TS entiende que este objeto siempre va a tener estas
    //propiedades
    // No se puede hacer esto persona.nombreCompleto= "LALALA"
    
    
    return(
        <>
           <h3>Objetos Literales</h3>
           <code>
               <pre>
                   {JSON.stringify(persona, null, 2)}
               </pre>
           </code>
        </>
    )
}