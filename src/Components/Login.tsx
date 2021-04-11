import {useReducer, useEffect} from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    username:string ;
    nombre: string;
}
//como quiero que luzca el estado initial
const initialState: AuthState={
    validando:true,
    token: null,
    username: '',
    nombre:''
}
type LoginPayload={
    username:string;
    nombre:string;
}
type AuthAction =
 { type: 'logout'}
| { type: 'login', payload: LoginPayload};

const authReducer = (state:AuthState, action:AuthAction):AuthState=>{
switch(action.type){
    case 'logout':
        return{
            validando:false,
            token:null,
            nombre:"",
            username:""
        }
        case 'login':
            return {
                ...state,
                token: "ABCD",
                nombre:action.payload.nombre,   
                username: action.payload.username        
            }
    default:
        return state;
}
}

export const Login = ()=> {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)
    
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'logout'})
        }, 1500)
    }, [])
const login = ()=>{
    dispatch({
        type:'login', 
        payload: {
            username: "Strider", 
            nombre: "Mar" 
        }
    })
}
const logout= ()=>{
    dispatch({
        type:'logout'
    })
}

if (validando){
    return(
        <>
        <div className="alert alert-info"> 
               Validando...
            </div>
        </>
    )
}

    return (
        <>
            <h3>Login</h3>
            {/* el useReducer es parecido al
            UseState pero es un estado más
            elaborado y puede cambiar de distintas maneras */}
            
            {
                (token) ? 
                <div className="alert alert-success"> 
                Autenticado como: {nombre}
                </div> : 
             <div className="alert alert-danger"> 
               No autenticado
            </div>

            }
           {
               (token) ? <button className ="btn btn-danger" onClick={logout}> 
               Logout
           </button> :   
           <button className ="btn btn-primary" onClick={login}> 
                Login
            </button>
           }
           
          
            

        </>
    )
}