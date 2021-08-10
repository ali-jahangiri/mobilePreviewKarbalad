import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import WireFrame from "../../components/WireFrame/Wireframe";
import { useStyleDispatcher } from "../styleProvider";


const InitialLoading = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const styleDispatcher = useStyleDispatcher();


    useEffect(() => {
        const serverStyleObject = { primary : "#346751" , baseBorderRadius : 5 , headerTitleColor : 'white'  , ctaTextColor : "white" , indexHeader : "badge", nestedHeader : "" , category : "box"};
        styleDispatcher(serverStyleObject)
        setLoading(false)
    } , [])



    return (
        <WireFrame>
            {
                loading ? <Loading /> : children
            }
        </WireFrame>
    )
}

export default InitialLoading;