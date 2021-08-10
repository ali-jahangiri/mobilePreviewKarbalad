import { useContext } from "react";

import { RouteContext } from "./RouterProvider"

const useNavigateState = () => {
    const { navigate }  = useContext(RouteContext)
    return navigate
}


export default useNavigateState;