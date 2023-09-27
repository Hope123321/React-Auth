import { signInWithPopup,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth, provider} from '../config/firebase';

export const Login = () => {
    const navigate = useNavigate();

    const login = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    const logout = () => {
        signOut(auth);
        navigate("/");
    };


    return (
        <div>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );

}