import CardCategory from "../../components/Category/CardCategory/CardCategory";
import useStyle from "../styleProvider";

const categoryClone = (...rest) => ({
    box : <CardCategory {...rest} />
})


const CategoryProvider = ({ item }) => {
    const { category } = useStyle()
    return categoryClone(item)[category]
}


export default CategoryProvider;