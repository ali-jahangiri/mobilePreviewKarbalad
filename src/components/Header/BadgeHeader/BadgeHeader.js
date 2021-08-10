import useNavigator from "../../../Provider/Router/useNavigator";
import useStyle from "../../../Provider/styleProvider";
import { generateColor } from "../../../Utils";
import DirectionCta from "../../DirectionCta/DireactionCta";
import Wrapper from "./style";

const BadgeHeader = ({ title , isNested }) => {
    const navigator = useNavigator();
    const { primary } = useStyle()

    return (
        <Wrapper>
            <div>
                {
                    isNested && <DirectionCta extendStyle={{ backgroundColor : generateColor(primary , 5) , height : "100%"}} onClick={() => navigator("home")} />
                }
            </div>
            <div className="badgeHeader__innerContainer">
                <p>{title}</p>
            </div>
        </Wrapper>
    )
}


export default BadgeHeader;