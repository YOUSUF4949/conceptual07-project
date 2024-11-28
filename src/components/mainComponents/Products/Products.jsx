


export default function Products({product, handleAddToCart}){
    const {id, product_name, product_image, description, price} = product
    

    return (
      <div className="border-b mb-3 p-3 shadow-xl space-y-5">
        {/* cart banner image */}
        <div>
          <img className="w-full max-h-96 rounded-xl" src={product_image} />
        </div>
        {/* cart content here */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">{product_name}</h2>
          <p className="text-gl">{description}</p>
          <p>$ {price}</p>
          <div className="">
            <button onClick={()=> handleAddToCart(product, price)} className="border-2 border-slate-300 rounded-lg cursor-pointer w-2/5 mx-auto py-3">Add To Cart</button>
          </div>
        </div>
      </div>
    )
}