import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken1 = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get("/refresh1", {
            withCredentials: true
        })
        setAuth(prev => {
            return {...prev, accessToken: response.data.accessToken, foundAdmin: response.data.admin, role: response.data.role, canteen: response.data.canteen}
        });
        return response.data.accessToken;
    }
    return refresh;
    
}

export default useRefreshToken1;