import { createContext, useState } from "react";

export const StyleContext = createContext({
    setStyle : () => {},
    style : {}
})


const StyleProvider = ({ children }) => {
    const [style, setStyle] = useState({});

    return (
        <StyleContext.Provider value={{ style , setStyle }}>
            {children}
        </StyleContext.Provider>
    )
}


export default StyleProvider;