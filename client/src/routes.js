import { ADMIN_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, BASKET_ROUTE } from "./utils/consts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop"
import Admin from "./pages/Admin";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    
]
export const publicRoutes = [
    {
        path:SHOP_ROUTE,
        Component: Shop
    },
    {
        path:LOGIN_ROUTE,
        Component: Login
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path:DEVICE_ROUTE,
        Component: DevicePage
    },
    {
        path:BASKET_ROUTE,
        Component: Basket
    },
]