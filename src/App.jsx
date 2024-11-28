import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import LeftSide from './components/mainComponents/LeftSide'
import RightSide from './components/mainComponents/RightSide'

function App() {
  const [isActive, setIsActive] = useState({
    cart : true, 
    status : 'cart'
  });
  const [addToCart, setAddToCart] = useState([])

  // here worked toggle button;
  const handleAddToCart = (cart)=>{
    const isExist = addToCart.find(p => p.id == cart.id)
    if(isExist){
      alert('You Already Exist it')
    }else{
      const newAddCart = [...addToCart, cart];
      setAddToCart(newAddCart)
    }
  }

  // here worked cart delete fermet
  const handleDeleteButton = (id)=> {
    const deleteAddToCartItem = addToCart.filter(p => p.id != id)
    setAddToCart(deleteAddToCartItem)
  }

  // buttons event handling;
  const handleToggleButton = (status) =>{
    if(status == 'cart'){
      setIsActive({
        cart : true,
        status : 'cart'
      })
    }
    else{
      setIsActive({
        cart : false,
        status : 'about'
      })
    }
  }

  return (
    // main container
    <div className=" w-10/12 mx-auto">
     {/* header section here */}
     <div>
      <Header addToCart={addToCart}></Header>
     </div>
     {/* main section starts here */}
     <div className="grid grid-cols-2">
      {/* left side components starts */}
      <div className="col-span-1">
        <LeftSide handleAddToCart={handleAddToCart}></LeftSide>
      </div>
      {/* left side components end */}
      {/* right side components starts */}
      <div className="col-span-1">
        <RightSide addToCart={addToCart} handleDeleteButton={handleDeleteButton} isActive={isActive} handleToggleButton={handleToggleButton}></RightSide>
      </div>
      {/* right side components ends */}
     </div>
    </div>
  )
}

export default App