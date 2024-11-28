import Cart from "./Cart_About/Cart"
import About from "./Cart_About/About"

export default function RightSide({handleToggleButton, isActive, addToCart, handleDeleteButton}){



    return(
      <div className="border-2 border-slate-700 text-xl font-bold p-3">
        <h2>Right-side</h2>
        {/* here toggle buttons */}
        <div>
            <button onClick={()=> handleToggleButton('cart')} className={`${isActive.cart ? " py-2 px-7 border-2 border-slate-300 bg-green-300" : "py-2 px-7 border-2 border-slate-300"}`}>Cart</button>
            <button onClick={()=> handleToggleButton('About')} className={`${isActive.cart ? " py-2 px-7 border-2 border-slate-300 " : "py-2 px-7 border-2 border-slate-300 bg-green-300"}`}>About</button>
        </div>
        {/* show about and cart components */}
        <div>
          {isActive.cart? <Cart handleDeleteButton={handleDeleteButton} addToCart={addToCart}></Cart> : <About></About>}
        </div>
      </div>
    )
}
