import BadgeHeader from "../../components/Header/BadgeHeader/BadgeHeader";

import BoxHeader from "../../components/Header/BoxHeader";
import FadeHeader from "../../components/Header/FadeHeader";
import HeaderFullWith from "../../components/Header/HeaderFullWith";
import NegativeHeader from "../../components/Header/NegetiveHeader/NegativeHeader";
import useStyle from "../styleProvider";

const nestedHeaderClone = ({...rest}) => ({
    box : <BoxHeader {...rest} />,
    fade : <FadeHeader {...rest} />,
    fullWith : <HeaderFullWith {...rest} />,
    negative : <NegativeHeader {...rest} /> ,
    badge : <BadgeHeader {...rest} />
})

const NestedHeaderProvider = ({ title , rest }) => {
    const { nestedHeader } = useStyle();
    return nestedHeaderClone({ title , ...rest })[nestedHeader]
}


export default NestedHeaderProvider;