import Home from "./pages/Home/home"
import UserList from "./pages/userList/userList"
import NewUser from "./pages/newUser/newUser"
import Product from "./pages/products/product"
import ProductItem from "./pages/producte/productItem"
import NewProduct from "./pages/newProduct/newProduct"

let routes = [
    {path:'/', element:<Home/>},
    {path:'/userList', element:<UserList/>},
    {path:'/newUser', element:<NewUser/>},
    {path:'/products', element:<Product/>},
    {path:'/product/:productId', element:<ProductItem/>},
    {path:'/newproduct', element:<NewProduct/>},
]

export default routes;
