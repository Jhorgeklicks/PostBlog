// custom hook
import useFetch from "./customHook/useFetch";

// templates
import BlogList from "./includes/BlogList";
import Loader from "./includes/Loader";
import NoData from "./includes/NoData";


const Home = () => {  

const {data, isError, isLoader} = useFetch('http://localhost:8000/posts')

    return (<>
        <div className="text-xl">
            {
                (!isLoader) 
                ? 
                    (data.length > 0)
                    ?
                    <BlogList blogs={data} title ="All Posts"/>
                    :
                    (<NoData err={isError}/>)
                :  
                <Loader/>
            }
        </div>
    </>);
}

export default Home;