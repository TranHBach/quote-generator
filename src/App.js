import "./App.css";
import "./webfonts/all.css";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <a href="https://github.com/TranHBach/quote-generator.git" style={{marginLeft: '45%'}}>Link to my code</a>
      <div className="App border border-success">
        <Quote />
      </div>
    </>
  );
}

export default App;
