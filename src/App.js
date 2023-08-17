import React from "react";
import Guy from './Guy.svg';

const App = () => {
    return <>
        <h1>Hello React</h1>
        <object type="image/svg+xml" data={Guy}>svg-animation</object>
    </>
};

export default App;
