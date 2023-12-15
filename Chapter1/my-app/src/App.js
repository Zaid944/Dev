import "./App.css";

function App() {
  let name = "react";
  let className = "App-header";
  return (
    <div className='App'>
      <div className={className}>
        Hello {name}
        <Demo />
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className='App'>
      <div className='App-header'>Demo</div>
    </div>
  );
}

export default App;
