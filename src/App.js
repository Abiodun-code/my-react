import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Header/>
    </Router>
  );
}

export default App;
