import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const User = () => {
    const user=useContext(UserContext);
    return (
        <>
            <div>User Page</div>
            <span>{user.Name}</span>
            <br />
            <img src={user.Avater} />
        </>
    );

}