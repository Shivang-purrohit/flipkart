import React from 'react'
import './FilterPage.css'
import Records from './records.json'
import Card from './Card';
import { Use_r_state } from './Store';

const FilterPage = () => {
  const {filter:{sort, size}, dis_fill} = Use_r_state()
  

const getUniqueData = (Records, property) => {
  let newVal = Records.map((curElem)=> {
    return  curElem[property]
    
  });
   return  (newVal = ["All", ...new Set(newVal)]);
/*   console.log(newVal) */
  
}
const genderData = getUniqueData(Records, "sizes");

const Filltred_product = () => {
  let newproduct = Records;
  if(sort){
    newproduct = newproduct.sort((a,b)=>{
    return  sort==="low" ? a.price - b.price : b.price - a.price
    })
  }
   if(size) {
    newproduct = newproduct.filter((curElem) => {
      return curElem.sizes === size;
  }); 
   return newproduct;
   }
}



  return (
    <div className='container'>
        <div className='section__1'>
            <div>
            <p>Filters</p>
           <button>Clear filters</button>
            </div>
            <div>
            <div class="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" key={1} value="low" id="exampleRadios1" onChange={(e)=>{
    dis_fill({
      type:"Sort_change",
      payload:e.target.value
    })
  }} />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Low to High
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" key={2} name="exampleRadios" value="high" id="exampleRadios2" onChange={(e)=>{
    dis_fill({
      type:"Sort_change",
      payload:e.target.value
    })
  }} />
  <label className="form-check-label" htmlFor="exampleRadios1">
    High to Low
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="large"  onChange={(e)=>{
    dis_fill({
      type:"Size_change",
      payload:e.target.value
    })
  }}/>
  <label class="form-check-label" htmlFor="exampleRadios1">
    L
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="xlarge" onChange={(e)=>{
    dis_fill({
      type:"Size_change",
      payload:e.target.value
    })
  }}/>
  <label class="form-check-label" htmlFor="exampleRadios2">
  XL
  </label>
</div>





            </div>
     
        </div>

        <div className='section__2'>

        {  <div style={{display: "flex", flexWrap: "wrap"}}>
      {
       Filltred_product().map( record => {
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
            gender={record.gender}
            />
          )
        }
         
        )
      }
    </div> }



</div>

 
    </div>
  )
}

export default FilterPage