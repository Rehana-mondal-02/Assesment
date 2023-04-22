import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Nav from "./component/Nav";

function App() {
  return <div className="container">
  <Nav/>
  <Header/>
  <Home/>
  <Footer/>

  </div>
}

export default App;
