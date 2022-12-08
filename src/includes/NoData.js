const NoData = ({err}) => {
    return ( <>
    <div className="w-full px-6 py-4 shadow bg-white text-center">
        <p className="text-pink-800  text-2xl md:text-4xl lg:px-8 lg:py-5">{err || 'An Error Ocurred'}<span>😢🎅</span></p>
    </div>
    </> );
}

export default NoData;