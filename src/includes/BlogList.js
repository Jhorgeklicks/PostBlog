import {Link} from 'react-router-dom';

const BlogList = ({blogs,title}) => {
    function checkPubishedStatus(status){
        if(status){
            return <span className="card__pub font-normal bg-green-500 text-white text-sm block py-1.5 px-3 rounded-full hover:px-4 hover:bg-green-600 hover:cursor-progress transition-all">Published</span>
        }else{
            return <span className="card__pub font-normal bg-pink-500 text-white text-sm block py-1.5 px-3 rounded-full hover:px-4 hover:bg-pink-600 hover:cursor-progress transition-all">Not Published</span>
        }
}

    return ( <>
    <div className="md:text-center text-2xl mb-2 font-light font-serif">{title}</div>
        {
            blogs.map( (blog) => (
                <Link to={`post/${blog.id}`}>
                <div className="card relative mb-4 bg-white  px-4 py-3 text-sm hover:skew-x-6 hover:cursor-pointer transition-all shadow-md rounded bg-slate-50" key={blog.id}>
                <span className="flex justify-between mb-1.5 hover:skew-x-0">
                    <div className="font-semibold card__title">Title: &nbsp;<span className="font-normal card__title-text">{blog.title}</span></div>
                        {checkPubishedStatus(blog.published)}
                </span>
                <p><span className="italic font-thin card__title-text">Written By :</span> &nbsp;<span className="font-normal hover:text-pink-800 card__title-text">{blog.author}</span></p>
    
                {/* <div className="card__delete absolute top-2 right-4 text-3xl transition-all ease-in-out" title="delete post" onClick={ (e) => (handleDelete(blog.id)) }>🗑</div> */}
            </div>
            </Link>
            ) )
        }

    </>);
}

export default BlogList;