import {BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import { TimeAttackPage, HomePage, ForzaPage, DriftPage } from '../pages'
import Menu from '../menu/Menu';


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}