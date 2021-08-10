import useNavigator from "../../../Provider/Router/useNavigator";
import Wrapper from "./itemStyle";

const RowCategoryItem = ({ index }) => {
    const navigator = useNavigator();
    console.log(index);
    
    return (
        <Wrapper _delay={index} onClick={() => navigator('nested')}>

        </Wrapper>
    )
}

export default RowCategoryItem;