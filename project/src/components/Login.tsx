import { useState, useRef} from "react";

import Header from "./Header";
import BannerImage from "../assets/banner_image.jpeg";
import { CheckValidation } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../utils/common-service";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [showSignInForm, setShowSignInForm] = useState(true);
    const [validationMessage, setValidationMessage] = useState("");
    const navigate = useNavigate();
    const userName = useRef(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const toggleSignIn = () => {
        setShowSignInForm(!showSignInForm);
    }

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email.current?.value ?? "", password.current?.value ?? "")
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate("/browse", { replace: true });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setValidationMessage(errorCode + " - " + errorMessage);
                // ..
            }
        );
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email.current?.value ?? "", password.current?.value ?? "")
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse", { replace: true });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setValidationMessage(errorCode + " - " + errorMessage);
        });
    }

    const handleSubmit = () => {
        if(email && password) {
            const formValidation = CheckValidation(email, password, showSignInForm ? undefined : userName);
            if(!formValidation.valid) {
                setValidationMessage(formValidation.message);
                return;
            } else {
                setValidationMessage("");
                showSignInForm ? signIn() : signUp();
            }
        }
    } 
    
    return (
        <div>
            <Header />
            <div className="absolute inset-0 z-0">
                <img src={BannerImage} alt="banner image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="absolute mx-auto left-0 right-0 mt-20 bg-black/80 p-8 rounded w-3/12 text-white">
                <h1 className="text-white text-2xl mb-4">{showSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!showSignInForm ? <input ref={userName} type="text" placeholder="Name" className="bg-gray-500 bg-opacity-70 px-4 py-2 w-full mb-2 text-xs focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none" /> : null}
                <input ref={email} type="text" placeholder="Email or Phone number" className="bg-gray-500 bg-opacity-70 px-4 py-2 w-full mb-2 text-xs focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none" />
                <input ref={password} type="password" placeholder="Password" className="bg-gray-500 bg-opacity-10 px-4 py-2 w-full mb-2 text-xs focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none"></input>
                <p className="text-red-500 text-xs">{validationMessage}</p>
                <button type="submit" className="cursor-pointer bg-red-600 px-4 py-2 rounded w-full text-xs my-3" onClick={handleSubmit}>{showSignInForm ? "Sign In" : "Sign Up"}</button>
                {showSignInForm ?
                    <p className="text-xs">New to Netflix? <span className="hover:underline cursor-pointer" onClick={toggleSignIn}>Sign Up</span> now</p> :
                    <p className="text-xs">Already have an account? <span className="hover:underline cursor-pointer" onClick={toggleSignIn}>Sign In</span> now</p>
                }
            </form>

        </div>


    )


}

export default Login;