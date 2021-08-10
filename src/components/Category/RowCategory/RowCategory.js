import RowCategoryItem from "./RowCategoryItem";
import Wrapper from "./style";

const RowCategory = ({ item = [] }) => {
    return (
        <Wrapper>
            {
                item.map((el , i) => <RowCategoryItem index={i} key={i} {...el} />)
            }
        </Wrapper>
    )
}

export default RowCategory;