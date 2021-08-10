import React from "react";
import CategoryProvider from "./Provider/CategoryProvider/CategoryProvider.";
import DirectoryProvider from "./Provider/DirectoryProvider/DirectoryProvider";
import HeaderProvider from "./Provider/HeaderProvider/HeaderProvider";
import NestedHeaderProvider from "./Provider/NestedHeaderProvider/NestedHeaderProvider";
import Route from "./Provider/Router/Route";
import RouterProvider from "./Provider/Router/RouterProvider";

import DynamicSlider from "./components/Slider"
import NestedGarbageContent from "./components/NestedGarbageContent";

const App = () => {
    
    return (
        <RouterProvider initialRoute="home">
            <Route name="home">
                <HeaderProvider title="Home" />
                <DirectoryProvider>
                    <CategoryProvider item={new Array(7).fill('')} />
                    <DynamicSlider />
                </DirectoryProvider>
            </Route>
            <Route name="nested">
                <NestedHeaderProvider title="Nested Header" />
                <DirectoryProvider>
                    <NestedGarbageContent />
                </DirectoryProvider>
            </Route>
        </RouterProvider>
    )
}

export default App;