

import { Provider } from "react-redux";
import store from "./store/store";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route  path="/" exact element={<Home />}/>
        <Route path="/history" element={<History/>} />
      </Routes>
    </Provider>
    
  );
}

export default App;
