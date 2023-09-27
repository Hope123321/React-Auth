import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Navbar = () => {
    const user=useContext(UserContext);
    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
            {user.Name && <Link to="/user">User</Link>}
        </div>
    );

}