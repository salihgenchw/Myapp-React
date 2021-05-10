import Topbar from './components/Topbar';
import VsSide from './components/VsSide';
import CodeScreen from './components/CodeScreen.js';


import './css/App.css';
import TopSekme from './components/TopSekme';

function App() {
  return (
    <div className="App"> 
        <Topbar/>
        <div className="row">
          <div className="col-1">
            <VsSide/>
          </div>
          <div className="col-11">    
              <TopSekme/>
              <CodeScreen/>
          </div>
          
        </div>
    </div>
  );
}

export default App;
