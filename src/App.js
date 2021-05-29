import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/pokemon" component={Pokemon}></Route>
    </Router>
  )
}

export default App;
