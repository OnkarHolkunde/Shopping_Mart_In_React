import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Global from "./Global"
import Cart from "./components/Cart"
import "./App.css" 


let App =()=>{
  let [allProducts,setProduct]=useState([])
  let[cartProducts,setCartProducts]=useState([])
  let [total,setTotal]=useState(0)

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
    setProduct(res.data)
    })
  },[ ])
let addtoCart=(item)=>{
let cartObj=cartProducts.filter((item2)=>item2.id==item.id)
if (cartObj.length==0){
  setCartProducts([...cartProducts,{...item,Qty:1,"total":item.price}])
  console.log(cartProducts)
  setTotal((prev)=>prev+item.price)
}
else{
  alert("Already Added")
}
}

let addqty=(id)=>{
  let x=cartProducts.map((item)=>{
    if (item.id==id){
      item.Qty=item.Qty+1
      setTotal((prev)=>prev+item.price)
    }
    return(item)
  })
  setCartProducts(x)

}


let delqty=(id)=>{
  let x=cartProducts.map((item)=>{
    if (item.id==id && item.Qty>1){
      item.Qty=item.Qty-1
      setTotal((prev)=>prev-item.price)
    }
    return(item)
  })
  setCartProducts(x)

}


let global={'cartProducts':cartProducts,"addtoCart":addtoCart ,  'addqty':addqty,"delqty":delqty , "total":total   }

  return(
  
  <>
  <BrowserRouter>
  <Global.Provider value={global}>
  <Nav/>
  <div className="allinone">All in One Mart</div>
  <Routes>
    <Route path="/" element={<Home  allProducts={allProducts} />} ></Route>
    <Route path="/cart" element={<Cart/>}></Route>


  </Routes>
  </Global.Provider>
  </BrowserRouter>
  </>
  )
}
export default App