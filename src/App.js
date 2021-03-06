import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './container/Header';
import NewsData from './component/NewsData';
import Description from './component/Descriptions';
import BookMarK from './component/BookMark';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={NewsData} />
        <Route path="/desc/:id/:pusblishedAt" component={Description} />
        <Route path="/bookmark" component={BookMarK} />
      </Router>
    </div>
  );
}
export default App;