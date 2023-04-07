import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken1 from "../hooks/useRefreshToken1";
import useAuth from "../hooks/useAuth";

const PersistLogin1 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken1();
    const {auth} = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch(err){
                console.log(err);
            }
            finally{
                setIsLoading(false);
            }
        }

        !auth?.accessToken ? verifyRefreshToken() :  setIsLoading(false);
    },[]);

    return (
        <>
            {isLoading
            ? <p>Loading....</p>
            : <Outlet />
            }
        </>
    )
}

export default PersistLogin1;