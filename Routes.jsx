import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/home/Home";
import SeachPage from "./src/pages/search/SeachPage";
import Groups from "./src/pages/groups/Groups";
import MakeGroup from "./src/pages/makegroup/MakeGroup";

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
    }
])

export default router