import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Jumbo from "./components/Jumbotron";
import LatestRelease from "./components/LatestRelease";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MyNav title="Book Store" />
      <Jumbo message="Welcome to Book Store!" />
      <LatestRelease subtitle="Latest Release" />
      <Footer website="BookStore.com" />
    </div>
  );
}

export default App;
