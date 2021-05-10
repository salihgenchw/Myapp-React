import Topbar from './components/Topbar';
import VsSide from './components/VsSide';
import CodeScreen from './components/CodeScreen.js';


import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Topbar/>
        
        <div className="row">
          <div className="col-1">
            <VsSide/>
          </div>
          <div className="col-11">
            <CodeScreen/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
