import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setisLoading(true);
        const post = {title, author, content}

        fetch('http://localhost:8000/posts',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(post)
        })
        .then( () => {
            console.log('data added')
            setisLoading(false);
            navigate('/');
        })
        .catch(err => setisLoading(false));
    }


    return <>
        <div className="w-full bg-white shadow-lg rounded p-5">
        <form className="p-2" onSubmit ={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-semibold">Post Title</label>
                <input type="text" className="w-full border-1 px-3 py-1 text-sm shadow border-gray-300 md:hover:border-gray-500" placeholder="Enter Title" value={title} onChange={ (e) => setTitle(e.target.value)} required/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-gray-700 font-semibold">Select Author</label>
                <select  className="w-full border-1 px-3 py-1 text-sm shadow border-gray-300 md:hover:border-gray-500" value={author} onChange={ (e) => setAuthor(e.target.value)}  required>
                    <option value="">Choose Author</option>
                    <option value="Jhorge Klicks">Jhorge Klicks</option>
                    <option value="Karts Mullen">Karts Mullen</option>
                    <option value="Martin kemper">Martin kemper</option>
                </select>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-gray-700 font-semibold">Add Content</label>
                <textarea  className="w-full border-1 px-3 py-1 text-sm shadow border-gray-300 md:hover:border-gray-500 resize-none" value={content} onChange={ (e) => setContent(e.target.value)}  required></textarea>
            </div>
            <div className="mb-5 flex justify-center">
                { !isLoading && <button className="border-2 border-transparent bg-pink-800 text-white px-3 py-2 rounded md:hover:bg-white md:hover:text-pink-800 md:hover:border-2 md:hover:border-pink-800 transition-all ease-in cursor-pointer">Submit Post</button>}
                {isLoading && <button className="border-2 border-transparent bg-pink-800 text-white px-3 py-2 rounded md:hover:bg-white md:hover:text-pink-800 md:hover:border-2 md:hover:border-pink-800 transition-all ease-in cursor-pointer" disabled>Sending Data ...</button>}

            </div>
        </form>
        </div>
    </>;
}
 
export default CreateBlog;