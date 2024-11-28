
const Header = ({addToCart})=>{
    return (
        <div className="bg-slate-300 p-3 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Navber Section</h2>
            {/* Navber Menu */}
            <div>
                <ul className="flex space-x-7 text-xl font-bold">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Cart {addToCart.length}</li>
                    <li>$79.99</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;