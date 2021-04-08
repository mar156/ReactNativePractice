
export const TiposBasicos = ()=>{
   let nombre= 'Fernando'; //El nombre siempre va a ser un string
   //si quiero evitar que infiera 
   let nombre2:string | number ="Hola"
   nombre2= 123;
   const edad= 35; //siempre va a ser 35
   const estaActivo:boolean= true;
   const poderes: string[]= ["Velocidad", "volar", "Respirar bajo el agua"]
   //arreglo de strings string[]

    return (
        <>
           <h3> Tipos básicos</h3>
           {nombre}, {edad}, {(estaActivo)? "activo": "falso"}
           <hr/>
           {poderes.join(', ')}
        </>
    )
}