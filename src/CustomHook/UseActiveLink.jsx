import { NavLink } from "react-router-dom";

const UseActiveLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive})=> `mx-3 hover:bg-black ${isActive? 'bg-red-500 hover:bg-red-700' : ''}`}>{children}</NavLink>
    );
};

export default UseActiveLink;