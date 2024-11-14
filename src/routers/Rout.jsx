import LayoutUser from "../layout/LayoutUser";
import AdminHomePage from "../pages/admin/AdminHomePage";
import UserCartPage from "../pages/user/UserCartPage";
import UserHomePage from "../pages/user/UserHomePage";

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
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminHomePage/>
    }
]
export default routes;