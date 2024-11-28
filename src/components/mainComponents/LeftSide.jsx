import { useEffect, useState } from "react";
import Products from "./Products/Products";


export default function LeftSide({handleAddToCart}){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('fakeData.json')
    .then(res => res.json())
    .then(products => setProducts(products))
  }, [])

    return(
      <div className="border-2 border-red-500 text-xl font-bold p-3">
        <h2>Lest Side Context</h2>
        <div>
          {
            products.map(product => <Products handleAddToCart={handleAddToCart} key={product.id} product={product}></Products> )
          }
        </div>
      </div>
    )
}