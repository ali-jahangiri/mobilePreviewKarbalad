import React, { createContext, useState } from "react";

export const RouteContext = createContext({
    navigate : () => {},
    navigatorState : {}
});

const RouterProvider = ({ children , routes = [] , initialRoute = '' }) => {
    const [currentRoute, setCurrentRoute] = useState(initialRoute);

    const navigateHandler = targetPath => {
        setCurrentRoute(targetPath)
    }

    
    const renderChecker = () => {
        return React.Children.map(children , child => {
            if(child.props.name === currentRoute) return child
            else return null
        })
    }

    return (
        <RouteContext.Provider value={{ navigate : navigateHandler , navigatorState : currentRoute}}>
            {renderChecker()}
        </RouteContext.Provider>
    )
}


export default RouterProvider;