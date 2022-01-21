import { AuthProps } from '../../Types';


export default function Auth({login} : AuthProps) {

    const todo = () => {
        console.log("todo handle other values")
    }
   // https://fr.reactjs.org/docs/forms.html add handlechange to input to remove those log errors
    return (
        <div id='global-container-login'>
            <form id='form-login' onSubmit={login}>
                <label className='label-login'>Email :
                    <input className='input-email' type="text" value={"foo@bar.baz"} onChange={todo}/>                
                </label>
                <input className='btn-login' type="submit" value="Login" />
            </form>
        </div>
    )
}
