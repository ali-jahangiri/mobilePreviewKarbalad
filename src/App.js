import React from "react";
import CategoryProvider from "./Provider/CategoryProvider/CategoryProvider.";
import DirectoryProvider from "./Provider/DirectoryProvider/DirectoryProvider";
import HeaderProvider from "./Provider/HeaderProvider/HeaderProvider";
import NestedHeaderProvider from "./Provider/NestedHeaderProvider/NestedHeaderProvider";
import Route from "./Provider/Router/Route";
import RouterProvider from "./Provider/Router/RouterProvider";

import DynamicSlider from "./components/Slider"

const App = () => {
    
    return (
        <RouterProvider initialRoute="home">
            <Route name="home">
                <HeaderProvider title="Home" />
                <DirectoryProvider>
                    <CategoryProvider item={new Array(10).fill('')} />
                </DirectoryProvider>
            </Route>
            <Route name="nested">
                <NestedHeaderProvider title="Nested Header" />
                <DirectoryProvider>
                    <DynamicSlider />
                    {/* <p>Dolor non autem autem sint voluptates quod ut necessitatibus voluptas.Id nulla velit ea ea.Voluptas commodi repellat.</p> */}
                </DirectoryProvider>
            </Route>
        </RouterProvider>
    )
}

export default App;