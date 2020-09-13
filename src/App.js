import React, { useState } from "react";
import "./App.scss";
import SearchPage from "./pages/SearchPage/SearchPage";
import Spinner from "./components/Spinner/Spinner";
import "./components/Spinner/Spinner.scss";
import IsLoadingContext from "./Context/IsLoadingContext";

function App() {
const [loading, setLoading] = useState (false)


  return (
    <IsLoadingContext.Provider value = {{loading, setLoading}}>
      <SearchPage></SearchPage>
      <Spinner></Spinner>
    </IsLoadingContext.Provider>
  );
}

export default App;
