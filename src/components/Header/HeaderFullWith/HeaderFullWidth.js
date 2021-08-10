import useNavigator from "../../../Provider/Router/useNavigator";
import DirectionCta from "../../DirectionCta/DireactionCta";
import Wrapper from "./style";

const HeaderFullWith = ({ title , isNested }) => {
    const navigator = useNavigator();

    return (
        <Wrapper>
            <div>
                {
                    isNested && <DirectionCta onClick={() => navigator('home')} />
                }
            </div>
            <p>{title}</p>
        </Wrapper>
    )
}


export default HeaderFullWith;