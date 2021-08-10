import { FiArrowLeft } from "react-icons/fi";
import Wrapper from "./style"

const DirectionCta = ({ onClick , extendStyle }) => {
    
    return (
        <Wrapper onClick={onClick}>
            <FiArrowLeft color="white" />
        </Wrapper>
    )
}


export default DirectionCta;