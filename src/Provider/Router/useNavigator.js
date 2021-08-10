import { useContext } from "react";
import { RouteContext } from "./RouterProvider";

const useNavigator = () => {
    const { navigate } = useContext(RouteContext)
    return targetPath => navigate(targetPath)
}


export default useNavigator;