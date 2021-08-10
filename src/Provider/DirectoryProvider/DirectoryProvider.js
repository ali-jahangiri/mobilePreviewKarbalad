import NegativeDirectory from "../../components/Directorys/NegativeDirectory";
import SimpleDirectory from "../../components/Directorys/SimpleDirectory";
import useStyle from "../styleProvider";
import Wrapper from "./style"


const DirectoryProvider = ({ children }) => {
    const { indexHeader } = useStyle();
    
    const renderChecker = () => {
        if(indexHeader === "negative") {
            return <NegativeDirectory children={children} />
        }else {
            return <SimpleDirectory children={children} />
        }
    }

    return (
        <Wrapper>
            {/* <div className="directoryContainer__overlay"></div>    */}
            {renderChecker()}
        </Wrapper>
    )
}

export default DirectoryProvider;