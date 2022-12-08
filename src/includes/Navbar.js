import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return ( <>
        <nav className="mb-6 bg-white shadow px-4 py-3 flex justify-between">
            <h1 className="text-sm text-gray-600">3DZIBAN<span className="font-bold text-pink-800 text-xl underline">JOINT</span></h1>
            <div className="">
                <Link className="hover:text-pink-800  hover:border-b-2 hover:border-pink-800 transition-all ease-in-out" to="/">Home</Link>

                <Link className="ml-3 hover:text-pink-800  hover:border-b-2 hover:border-pink-800 transition-all ease-in-out" to="/create">Create Blog</Link>
            </div>
        </nav> 
        <Outlet />
    </> );
}
export default Navbar;