import { AuthProps } from '../../Types';


export default function Auth({login} : AuthProps) {

    const todo = () => {
        console.log("todo handle other values")
    }
   // https://fr.reactjs.org/docs/forms.html add handlechange to input to remove those log errors
    return (
        <div>
            <form id='form-login' onSubmit={login}>
                <label>Email:
                    <input type="text" value={"foo@bar.baz"} onChange={todo}/>                
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
