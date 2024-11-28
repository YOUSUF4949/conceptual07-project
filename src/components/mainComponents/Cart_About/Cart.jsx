


export default function Cart({addToCart, handleDeleteButton}){
    console.log(addToCart)
    return (
        <div>
            <div>
                {
                    addToCart.map(storedCart => <StoraCart key={storedCart.id} handleDeleteButton={handleDeleteButton} storedCart={storedCart}></StoraCart>)
                }
            </div>
        </div>
    )
}

const StoraCart = ({storedCart, handleDeleteButton})=> {
    const {id, product_image, product_name} = storedCart
    return (
        <div className="flex items-center justify-around border-2 border-slate-700 py-2 mt-3 rounded-xl">
            <div className="">
                <img className="w-16 h-16" src={product_image}/>
            </div>
            <h2>{product_name}</h2>
            <button onClick={()=> handleDeleteButton(id)} className="border-2 border-slate-300 py-1 px-3 rounded-lg">Delete</button>
        </div>
    )
}