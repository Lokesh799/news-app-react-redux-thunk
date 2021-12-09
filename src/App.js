import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './container/Header';
import NewsData from './component/NewsData';


function App() {
  return (
    <div className="App">
        <Header/>
        <NewsData/>
    </div>
  );
}
export default App;