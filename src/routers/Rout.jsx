import LayoutUser from "../layout/LayoutUser";
import AdminHomePage from "../pages/admin/AdminHomePage";
import UserCartPage from "../pages/user/UserCartPage";
import UserHomePage from "../pages/user/UserHomePage";
import UserProductPage from "../pages/user/UserProductPage";

const routes = [
    {
        path: '',
        element: <LayoutUser/>,
        children: [
            {
                path: '/',
                element: <UserHomePage/>
            },
            {
                path: '/cart',
                element: <UserCartPage/>
            },
            {
                path: '/product',
                element: <UserProductPage/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminHomePage/>
    }
]
export default routes;