
import Wrapper from "./style";
import DirectionCta from "../../DirectionCta/DireactionCta"

import useNavigator from "../../../Provider/Router/useNavigator"

const NegativeHeader = ({ title , isNested }) => {
    const navigator = useNavigator();
    return (   
        <Wrapper>
            <div>
                {
                    isNested && <DirectionCta onClick={() => navigator("home")} />
                }
            </div>
            <p>{title}</p>
        </Wrapper>
    )
}

export default NegativeHeader;