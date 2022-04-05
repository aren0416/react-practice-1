import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./components/detail/Detail";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Search } from "./components/search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
