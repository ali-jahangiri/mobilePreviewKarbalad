import useNavigator from '../../../Provider/Router/useNavigator';
import Wrapper from './itemStyle';

const CardCategoryItem = () => {
    const navigate = useNavigator()
    
    const clickHandler = () => navigate('nested')

    return (
        <Wrapper onClick={clickHandler}></Wrapper>
    )
}

export default CardCategoryItem;