import { useContext } from "react";

import { StyleContext } from "./StyleProvider"

const useStyle = () => {
    const { style } = useContext(StyleContext);

    return style
}


export default useStyle;