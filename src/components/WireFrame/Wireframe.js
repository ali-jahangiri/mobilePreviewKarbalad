import StatusBar from "./StatusBar";
import Wrapper from "./style";


const WireFrame = ({ children }) => {
    return (
        <Wrapper>
            <StatusBar />
            {children}
        </Wrapper>
    )
}


export default WireFrame;