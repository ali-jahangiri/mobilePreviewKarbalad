import useNavigator from "../../../Provider/Router/useNavigator";
import useStyle from "../../../Provider/styleProvider";
import { generateColor } from "../../../Utils";
import DirectionCta from "../../DirectionCta/DireactionCta";
import Wrapper from "./style";

const FadeHeader = ({ title , isNested }) => {
    const navigator = useNavigator();
    const { primary }  = useStyle();
    return (
        <Wrapper>
            <div>
                {
                    isNested && <DirectionCta 
                                    extendStyle={{ backgroundColor : generateColor(primary , 5) }} 
                                    onClick={() => navigator("home")} />
                }
            </div>
            <p>{title}</p>
        </Wrapper>
    )
}


export default FadeHeader;