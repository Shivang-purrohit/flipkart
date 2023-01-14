import './App.css';
import Card from './Card';
import FilterPage from './FilterPage';
import { Navbar } from './Navbar';
import Records from './records.json'
function App(props) {
  return (
    <div className="App">
    <Navbar/>
    <div className='filterbg'>
    <FilterPage/>
    </div>
  
   {/*  <div style={{display: "flex", flexWrap: "wrap"}}>
      {
       Records.map( record => {
          return(
            <Card 
            name={record.name}
            brand={record.brand}
            image={record.image}
            price={record.price}
            mainPrice={record.mainPrice}
            discountPercent={record.discountPercent}
            quantity={record.quantity}
            sizes={record.sizes}
            />
          )
        }
         
        )
      }
    </div> */}

    </div>
  );
}

export default App;
