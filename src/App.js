import React from "react";
import Wrapper from "./components/pageWrapper/Wrapper";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <Wrapper activeTab="Home">
      {" "}
      {/* Pass the active tab here */}
      {/* Main content goes here */}
      {/* You can add more components here as needed */}
    </Wrapper>
  );
};

export default App;
