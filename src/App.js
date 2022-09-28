import "./App.scss";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="container">
        <Sidebar />
        <div className="wrapper">pages pages</div>
      </div>
    </div>
  );
}

export default App;
