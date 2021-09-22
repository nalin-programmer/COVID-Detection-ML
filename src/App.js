import "./App.css";
import Footer from "./Footer";
import Main from "./Main";
function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ width: "100%", height: "74%" }}>
        <Main />
      </div>
      <div
        style={{ width: "100%", z: "10", position: "fixed" }}
        className="footer"
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
