import CardCategoryItem from "./CardCategoryItem";
import Wrapper from "./style";

const CardCategory = ({ item = [] }) => {
    return (
        <Wrapper>
            {
                item.map((el , i) => <CardCategoryItem key={i} {...el} />)
            }
        </Wrapper>
    )
}


export default CardCategory;