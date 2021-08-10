import CardCategory from "../../components/Category/CardCategory/CardCategory";
import useStyle from "../styleProvider";

const categoryClone = item => ({
    box : <CardCategory item={item} />
})


const CategoryProvider = ({ item }) => {
    const { category } = useStyle();
    
    return categoryClone(item)[category]
}


export default CategoryProvider;