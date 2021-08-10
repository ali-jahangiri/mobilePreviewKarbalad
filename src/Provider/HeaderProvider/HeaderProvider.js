import React from "react";
import useStyle from "../styleProvider";

import BoxHeader from "../../components/Header/BoxHeader"
import FadeHeader from "../../components/Header/FadeHeader"
import HeaderFullWith from "../../components/Header/HeaderFullWith"
import NegativeHeader from "../../components/Header/NegetiveHeader/NegativeHeader";
import BadgeHeader from "../../components/Header/BadgeHeader/BadgeHeader";



const headerClone = rest => ({
    box : <BoxHeader {...rest} />,
    fade : <FadeHeader {...rest} />,
    fullWith : <HeaderFullWith {...rest} />,
    negative : <NegativeHeader {...rest} /> ,
    badge : <BadgeHeader {...rest} />
})
const HeaderProvider = ({ title , ...reset }) => {
    const { indexHeader } = useStyle();

    return headerClone({ title , ...reset})[indexHeader]
}

export default HeaderProvider;