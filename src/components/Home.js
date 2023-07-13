import Global from '../Global'
import { useContext } from 'react'
import './product.css'
let Home=(props)=>{
    let allProducts=props.allProducts
    let global1=useContext( Global)
    
    return(
        <>
         

        <div className='main'>
        {
            allProducts.map((item,index)=>{
                return(
                    <div className="products" key={index} >
                        <div> {item.id} </div>
                        <img src={item.image}/>
                        <div> {item.title} </div>
                        <div> {item.price} </div>
                        <div> {item.category} </div>
                        <button className='btn' onClick={()=>{global1.addtoCart(item)}} >Add to Cart</button>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Home