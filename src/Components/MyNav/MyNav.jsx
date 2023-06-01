import UseActiveLink from "../../CustomHook/UseActiveLink";

const MyNav = () => {
  const myMenu = <>
    <li><UseActiveLink to={'/'}>Home</UseActiveLink></li>
    <li><UseActiveLink to={'/movies'}>Movies</UseActiveLink></li>
    <li><UseActiveLink to={'/tv-shows'}>Tv Shows</UseActiveLink></li>
    <li><UseActiveLink to={'/upcoming'}>Upcoming</UseActiveLink></li>
  </>
  return (
    <div className="navbar bg-slate-700 fixed text-white z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {myMenu}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Maze Flix</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {myMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-red-500 border-none text-white hover:bg-black">Signin</a>
      </div>
    </div>
  );
};

export default MyNav;

