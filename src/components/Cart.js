
import { Link } from 'react-router-dom'
import Global from '../Global'
import { useContext } from 'react'
import "./product.css"
let  Cart=()=> {

  let global =useContext(Global)

  return (
    <>
   {
  global.cartProducts.map((item)=>{
    return(
      <>
      <div className="products">
       <div> {item.id} </div>
    
                        <img src={item.image}/>
                        <div> {item.title} </div>
                        <div> {item.price} </div>
                        <div> QTy:{item.Qty}</div>
                        <button  className='btn cart'  onClick={()=>{global.addqty(item.id)}}>+</button>
                        <button  className='btn cart' onClick={()=>{global.delqty(item.id)}}  >-</button>
      </div>
      </>
    )
  })
}
<div className='total'>Total:{global. total}</div>
   </>
  )
}

export default Cart