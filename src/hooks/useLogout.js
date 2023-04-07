import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const {setAuth} = useAuth();
    
    const Logout = async() => {
        setAuth({});
        try{
            const response = await axios.get("/logout", {
                withCredentials: true
            });
        }
        catch(err){
            console.log(err);
        }
    }
    return Logout;
}

export default useLogout;