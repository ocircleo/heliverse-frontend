import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/home/Home";
import SeachPage from "./src/pages/search/SeachPage";
import Groups from "./src/pages/groups/Groups";
import MakeGroup from "./src/pages/makegroup/MakeGroup";
import Login from "./src/pages/login/Login";
import Register from "./src/pages/register/Register";
import Test from "./src/pages/test/Test";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/search',
                element: <SeachPage></SeachPage>
            }, {
                path: "/make-group",
                element: <MakeGroup></MakeGroup>
            },
            {
                path: '/groups',
                element: <Groups></Groups>
            }
        ]
    }, {
        path: '/login',
        element: <Login></Login>
    }, {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/test',
        element: <Test></Test>
    }
])

export default router