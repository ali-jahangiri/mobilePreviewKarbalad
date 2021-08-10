import { useContext } from "react";

import { StyleContext }  from "./StyleProvider"

const useStyleDispatcher = () => {
    const { setStyle } = useContext(StyleContext)
    return style => setStyle(style)
}


export default useStyleDispatcher;