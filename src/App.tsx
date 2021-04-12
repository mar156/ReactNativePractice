import { fileURLToPath } from 'node:url'
import React from 'react'
import { ContadorConHook } from './Components/ContadorConHook'
import { Login } from './Components/Login'
import {Usuarios} from './Components/Usuarios'
//import { Contador } from './Components/Contador'
//import { Funciones } from './typescript/Funciones'
//import { ObjetosLiterales } from './typescript/ObjetosLiterales'
//import { TiposBasicos } from './typescript/TiposBasicos'

//BLA

const App = ()=>{

  return(
    <div className="mt-2">
      <h1>Introducción a TypeScript</h1>
      <hr/>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
       {/* <Contador/> */}
       {/* <ContadorConHook/> */}
       {/* <Login/> */}
       <Usuarios/>
    </div>
  )
}
export default App;