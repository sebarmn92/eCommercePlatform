
import SignUpForm from "../../components/signup-form/signup-form";

import { 
    auth,
    signInWithGooglePopup, 
} from "../../utils/firebase/firebase.utils";

const SignIn = () =>{

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        
        

    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Signin with google prompt</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;