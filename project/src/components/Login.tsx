import Header from "./Header";
import BannerImage from "../assets/banner_image.jpeg";
import { useState } from "react";


const Login = () => {
    const [showSignInForm, setShowSignInForm] = useState(true);
    const toggleSignIn = () => { 
        setShowSignInForm(!showSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute inset-0 z-0">
                <img src={BannerImage} alt="banner image" />
            </div>

            <form className="absolute mx-auto left-0 right-0 mt-20 bg-black/80 p-8 rounded w-3/12 text-white">
                <h1 className="text-white text-2xl mb-4">{showSignInForm ? "Sign In" : "Sign Up"}</h1>
                
                {!showSignInForm ? <input type="text" placeholder="Name" className="bg-gray-500 bg-opacity-70 px-4 py-2 w-full mb-2 text-xs focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none"/> : null}
                <input type="text" placeholder="Email or Phone number" className="bg-gray-500 bg-opacity-70 px-4 py-2 w-full mb-2 text-xs focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none"/>
                <input type="password" placeholder="Password" className="bg-gray-500 bg-opacity-10 px-4 py-2 w-full mb-2 text-xs focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none"></input>
                <button type="submit" className="cursor-pointer bg-red-600 px-4 py-2 rounded w-full text-xs my-3">{showSignInForm ? "Sign In" : "Sign Up"}</button>
                {showSignInForm ? 
                    <p className="text-xs">New to Netflix? <span className="hover:underline cursor-pointer" onClick={toggleSignIn}>Sign Up</span> now</p> : 
                    <p className="text-xs">Already have an account? <span className="hover:underline cursor-pointer" onClick={toggleSignIn}>Sign In</span> now</p>
                }
            </form>

        </div>


    )

    
}

export default Login;