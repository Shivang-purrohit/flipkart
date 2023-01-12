import './App.css';
import { Navbar } from './Navbar';
import  flipdatas  from './Data.json'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div>
      {
       flipdatas.map( item => {
          return(
            <div>
              {flipdatas.name}
            </div>
          )
        }
         
        )
      }
    </div>

    </div>
  );
}

export default App;
