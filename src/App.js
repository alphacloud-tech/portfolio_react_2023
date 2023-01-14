import NavBar from "./component/Navbar/NavBar";
import './App.css'
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
