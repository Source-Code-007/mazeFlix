import { Outlet } from "react-router-dom";
import MyNav from "../Components/MyNav/MyNav";
import Footer from "../Components/Footer/Footer";

const LayoutOne = () => {
    return (
        <div>
            <MyNav></MyNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayoutOne;