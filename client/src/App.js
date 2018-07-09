import React from "react";
import Articles from "./pages/Articles";
import Nav from "./components/Nav";
import Panel from "./components/Panel";

const App = () => (
    <div>
      
      <Panel/>
        <Nav />
        <Articles />
      <Panel/>

    </div>
);

export default App;
