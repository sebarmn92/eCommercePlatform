
import SignUpForm from "../../components/signup-form/signup-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './authentification.scss'

const Authentification = () =>{
    return (
        <div className='authentification-container'>
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentification;