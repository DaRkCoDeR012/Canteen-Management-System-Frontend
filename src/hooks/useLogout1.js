import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout1 = () => {
    const {setAuth} = useAuth();
    
    const Logout = async() => {
        setAuth({});
        try{
            const response = await axios.get("/logout1", {
                withCredentials: true
            });
        }
        catch(err){
            console.log(err);
        }
    }
    return Logout;
}

export default useLogout1;