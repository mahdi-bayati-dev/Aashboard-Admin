import Home from "./pages/Home/home"
import UserList from "./pages/userList/userList"
import NewUser from "./pages/newUser/newUser"
import Product from "./pages/product/product"

let routes =[
     {path:'/', element:<Home/>},
     {path:'/userList', element:<UserList/>},
     {path:'/newUser', element:<NewUser/>},
     {path:'/product', element:<Product/>},
    ]


export default routes