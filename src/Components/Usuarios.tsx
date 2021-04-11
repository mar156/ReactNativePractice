import React, {useEffect, useRef, useState} from 'react';
import {useUsuarios} from '../Hooks/useUsuarios'
import { ReqResListado, Usuario } from '../Interfaces/reqRes';

 
export const Usuarios= ()=>{
     //cuando solo uso la referencia puedo
     //hacer .catch(console.log);
  
    const {usuarios, paginaSiguiente, paginaAnterior}= useUsuarios()   
 
    const renderItem=(usuario:Usuario)=>{
     return(
        <tr key={usuario.id}>
           <th><img src={usuario.avatar} alt={usuario.first_name}  
           style={{width:"40px"}}             /></th>
           <th>{usuario.first_name} {usuario.last_name}</th>
           <th>{usuario.email}</th>
       </tr>
     ) 
    }
    return(
        <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
           <tr>
               <th>Avatar</th>
               <th>Nombre</th>
               <th>email</th>
           </tr>
           </thead>
           <tbody>
               {usuarios.map(renderItem)}
           </tbody>
        </table>
        <button className="btn btn-primary" onClick={paginaAnterior}>Anterios</button>
        <button className="btn btn-primary" onClick={paginaSiguiente}>Siguiente</button>
        </>
    )
}