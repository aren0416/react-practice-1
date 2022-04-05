import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./components/detail/Detail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Search } from "./components/search/Search";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />}></Route>
        <Route path={routes.search} element={<Search />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
