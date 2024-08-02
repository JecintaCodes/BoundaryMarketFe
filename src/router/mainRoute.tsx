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
import AdminDataBase from "../pages/admin/AdminDataBase"
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
import UserMessage from "../pages/user/UserMessage"
import UserNotificationPage from "../pages/user/UserNotificationPage"
import UserOrders from "../pages/user/UserOrders"
import AdminNotification from "../pages/admin/AdminNotification"
import ChartingPage from "../pages/admin/ChartingPage"
import AdminMessage from "../pages/admin/AdminMessage"
import Shops from "../pages/admin/Shops"
import Store from "../pages/screen/Store"
import Product from "../pages/user/Product"


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
                element:<AdminDataBase/>,
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
            {
                path:"/admin/charting",
                element:<ChartingPage/>,
            },
            {
                path:"/admin/message",
                element:<AdminMessage/>,
            },
        ]
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
                path:"/user/message",
                element:<UserMessage/>
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
    // {
    //     path:"/order",
    //     element:<UserOrders/>
    // },
    {
        path:"/histroy",
        element:<UserHistory/>
    },
   
])