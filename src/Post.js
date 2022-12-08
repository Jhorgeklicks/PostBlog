import {useState} from 'react';
import { useParams } from "react-router";
import {useNavigate} from 'react-router-dom';
import useFetch from "./customHook/useFetch";

import Loader from "./includes/Loader";
import NoData from "./includes/NoData";

const Post = () => {
    const [isDeleting, setisDeleting] = useState(false);
    const navigate = useNavigate();

    const {id} = useParams();
    const url = `http://localhost:8000/posts/${id}`;

    const {data:post, isError, isLoader} = useFetch(url);


    const handleDelete = () => {
        setisDeleting(true);

        fetch(`http://localhost:8000/posts/${id}`,{
            method : 'DELETE'
        })
        .then( () => {
            setisDeleting(false);
            navigate('/')
        })
        .catch(error => {
            setisDeleting(false);
        });
    }


    return <>
        {
            (!isLoader)
            ?
                (post)
                ?
                <div className="w-full bg-white shadow-lg py-4 px-5 font-normal lg:px-10 lg:py-7">
                    <h2 className="text-2xl font-bold mb-2"><span className="inline-block w-2 h-2 bg-pink-800 rounded-full mr-2 mt-2"></span>{post.title}</h2>
                    <p className="text-gray-400 italic">Written By :&nbsp;<span className="font-normal font-semibold text-gray-700 text-xl not-italic">{post.author}</span></p>
                    <p className="mt-2 text-sm text-justify">{post.content}</p>

                    <div className="my-8 flex justify-center">
                        {!isDeleting && <button className="border-2 border-pink-800  bg-white text-pink-800 px-3 py-2 rounded md:hover:bg-pink-800 md:hover:text-white md:hover:border-2 md:hover:border-pink-800 transition-all ease-in cursor-pointer" onClick={handleDelete} title="Delete this Post">Delete Post</button>}

                        {isDeleting && <button className="border-2 border-pink-800 bg-white text-pink-800 px-3 py-2 rounded md:hover:bg-pink-800 md:hover:text-white md:hover:border-2 md:hover:border-pink-800 transition-all ease-in cursor-pointer" onClick={handleDelete} disabled>Deleting Post...</button>}
                    </div>
                </div>
                :
                (<NoData err={isError}/>)
            :
            <Loader />
        }
    </>
}
 
export default Post;