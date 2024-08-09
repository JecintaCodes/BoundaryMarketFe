import {createBrowserRouter} from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import Registration from "../pages/auth/Registration"
import SignIn from "../pages/auth/SignIn"
import AddProduct from "../pages/screen/AddProduct"
import AddComp from "../pages/screen/AddComp"
import CheckoutScreen from "../pages/screen/CheckoutScreen"
// import ProductScreen from "../pages/screen/ProductScreen"
import UserRegistration from "../pages/auth/UserRegistration"
import AdminRegistration from "../pages/auth/AdminRegistration"
// import AuthPage from "../pages/auth/AuthPage"
import AdminSignIN from "../pages/auth/AdminSignIN"
import UserSignIn from "../pages/auth/UserSignIn"
import DetailProductScree from "../pages/screen/DetailProductScree"
import AdminLayout from "../pages/admin/AdminLayout"
import AdminDataBase from "../pages/admin/DataBase"
import AdminProfile from "../pages/admin/AdminProfile"
import Layout from "../components/common/Layout"
import Order from "../pages/admin/Order"
import HistroyPage from "../pages/admin/HistroyPage"
import UserDashboard from "../pages/user/UserDashboard"
import AdminDashboard from "../pages/admin/AdminDashboard"
import UserLayout from "../pages/user/UserLayout"
import UserProfile from "../pages/user/UserProfile"
import UserCalender from "../pages/user/UserCalender"
import UserHistory from "../pages/user/UserHistory"
import UserNotificationPage from "../pages/user/UserNotificationPage"
import UserOrders from "../pages/user/UserOrders"
import AdminNotification from "../pages/admin/AdminNotification"
import ChartingPage from "../pages/admin/ChartingPage"
import Shops from "../pages/admin/Shops"
import Store from "../pages/screen/Store"
import Product from "../pages/user/Product"
import UserCharting from "../pages/user/UserCharting"
import CalenderPage from "../pages/admin/CalenderPage"
import BuyerLayout from "../pages/buyer/BuyerLayout"
import BuyerHistory from "../pages/buyer/BuyerHistroy"
import BuyerCalender from "../pages/buyer/BuyerCalender"
import BuyerChating from "../pages/buyer/BuyerChating"
import BuyerDashBoard from "../pages/buyer/BuyerDashBoard"
import BuyerProfile from "../pages/buyer/BuyerProfile"
import DesktopViewChat from "../pages/chats/DesktopViewChat"
import Chat from "../pages/chats/Chat"
import InnerChat from "../pages/chats/InnerChat"
import DataBase from "../pages/admin/DataBase"
import UserDataBase from "../pages/admin/UserDataBase"
import BuyerDataBase from "../pages/admin/BuyerDataBase"
import MobileLayoutChat from "../pages/chats/MobileLayoutChat"

export const mainRoute = createBrowserRouter([

    {
        path:"/",
        element:<LandingPage/>,
    },
    // {
    //     path:"/auth",
    //     element:<AuthPage/>,
    // },
    {
        path:"/sign-up",
        element:<Registration/>,
    },
    {
        path:"/sign-in",
        element:<SignIn/>,
    },
    {
        path:"/:adminID/user-sign-up",
        element:<UserRegistration/>,
    },
    {
        path:"/user-sign-in",
        element:<UserSignIn/>,
    },
    {
        path:"/admin-sign-up",
        element:<AdminRegistration/>,
    },
    {
        path:"/admin-sign-in",
        element:<AdminSignIN/>,
    },
    {
        path:"/add-pro",
        element:<AddProduct/>,
    },
    {
        path:"/add-comp",
        element:<AddComp/>,
    },
    {
        path:"/check-out",
        element:<CheckoutScreen/>,
    },
    {
        path:"/detail-pro",
        element:<DetailProductScree/>,
    },
    {
        path:"/store",
        element:<Layout/>,
        children:[
            {
            index:true,
            element:<Store/>,
        },
    ],
    },
    {
        path:"/product",
        element:<Product/>,
    },
    {
        path:"/dashboard",
        element:<AdminDashboard/>,
    },
    {
        path:"/admin",
        element:<AdminLayout/>,
        children:[
            {
                index:true,
                element:<AdminDashboard/>
            },
            {
                path:"/admin/database",
                element:<DataBase/>,
            },
            {
                path:"/admin/database/ad",
                element:<AdminDataBase/>,
            },
            {
                path:"/admin/database/us",
                element:<UserDataBase/>,
            },
            {
                path:"/admin/database",
                element:<BuyerDataBase/>,
            },
            {
                path:"/admin/calender",
                element:<CalenderPage/>,
            },
            {
                path:"/admin/profile",
                element:<AdminProfile/>,
            },
            {
                path:"/admin/shop",
                element:<Shops/>,
            },
            {
                path:"/admin/orders",
                element:<Order/>,
            },
           
            {
                path:"/admin/histroys",
                element:<HistroyPage/>,
            },
            {
                path:"/admin/notification",
                element:<AdminNotification/>,
            },
            
        
        ]
    },
    {
        path:"/admin/charting",
        element:<ChartingPage/>,
    },
   
    {
        path:"/user",
        element:<UserLayout/>,
        children:[
            {
                element:<UserDashboard/>
            },
            {
                path:"/user/profile",
                element:<UserProfile/>
            },
            {
                path:"/user/calender",
                element:<UserCalender/>
            },
            {
                path:"/user/histroy",
                element:<UserHistory/>
            },
         
            {
                path:"/user/notifcation",
                element:<UserNotificationPage/>
            },
            {
                path:"/user/order",
                element:<UserOrders/>
            },
        ]
    },
    {
        path:"/notification",
        element:<AdminNotification/>
    },
    {
        path:"/histroy",
        element:<UserHistory/>
    },
    {
        path:"/user/chart",
        element:<UserCharting/>
    },
    {
        path:"/calender",
        element:<CalenderPage/>
    },
    {
        path:"/buyer",
        element:<BuyerLayout/>,
        children:[
            {
                index:true,
               element: <BuyerDashBoard/>,
            },
            {
                path:"/buyer/calender",
               element: <BuyerCalender/>,
            },
            {
                path:"/buyer/message",
               element: <BuyerChating/>,
            },
            {
                path:"/buyer/histroy",
               element: <BuyerHistory/>,
            },
            {
                path:"/buyer/profile",
               element: <BuyerProfile/>,
            },
           
        ]
    },
    {
        path:"/message",
        element:<DesktopViewChat/>

    },
    {
        path:"/chats",
        element:<Chat/>

    },
    {
        path:"/inner",
        element:<InnerChat/>

    },
    {
        path:"/messages",
       element: <BuyerChating/>,
    },
    {
        path:"/mobile",
       element: <MobileLayoutChat/>,
    },

   
])