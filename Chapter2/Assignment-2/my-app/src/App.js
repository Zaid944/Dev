import "./App.css";
import ChildrenComponent from "./components/Children_Component";
import Parent from "./components/Parent";
function App() {
  return (
    <Parent>
      <ChildrenComponent />
    </Parent>
  );
}

export default App;
