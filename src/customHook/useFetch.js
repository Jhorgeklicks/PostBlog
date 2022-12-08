import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect( () => {
        const AbortCont = new AbortController();
            fetch(url, {signal : AbortCont.signal})
            .then( (res) => {
                if(res.ok === false ){
                    setIsLoader(false);
                    setIsError('Oppx! fetching Resource Failed, Please Try Again Later');
                    
                }
                return res.json()
            })
            .then( data => {
                setData(data);
                setIsLoader(false);
                setIsError(null)
            })
            .catch(error => {
                if(error.name === 'AbortError'){
                    console.log('fetch Abort ... 12');
                }else{
                    setIsLoader(false);
                    setIsError(error)
                }
            })

        return () => AbortCont.abort()
    },[url])

    return {data, isError, isLoader};
}
export default useFetch;