import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages Import
import Home from "./Home";
import Post from "./Post";
import CreateBlog from "./CreateBlog";
import NoPage from "./NoPage";


// include templates
import Navbar from "./includes/Navbar";
import './App.css'

const App = () => {
    return <>
    <Router>
        <div className="w-full h-screen bg-slate-200">
            <div className="w-5/5 px-7 py-4 sm:w-4/5 sm:mx-auto sm:my-0 sm:px-0 sm:py-5 md:w-3/5 lg:px-5">
                <Navbar />
                {/* main content */}
                <div className="main-content">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/post/:id" element={<Post />} />
                        <Route path="/create" element={<CreateBlog />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
    </>
}

export default App;
