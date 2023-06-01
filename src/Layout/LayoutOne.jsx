import { Outlet } from "react-router-dom";
import MyNav from "../Components/MyNav/MyNav";

const LayoutOne = () => {
    return (
        <div>
            <MyNav></MyNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutOne;