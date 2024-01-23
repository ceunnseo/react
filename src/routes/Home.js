import { useState, useEffect} from 'react';
import Movie from "../components/Movie.js"

//로딩하거나 영화 리스트 전체를 보여주는 스크린 전체
function Home() {
    const [loading, setLoading] = useState(true); //로딩상태를 나타내는 변수
    const [movies, setMovies] = useState([]); //영화를 담는 movies array
    //async-await (fetch then 대신 더 많이 사용하는거)
    const getMovies = async() => {
        const json = await(
        await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
        ).json()
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies()
    }, [])
    console.log(movies);
    return (
        <div>
        {loading ? (
            <h1>loading...</h1>
        ) : (
            <div>
            {movies.map((x)=> 
                <Movie 
                key={x.id}
                id={x.id}
                mediumCoverImage={x.medium_cover_image} 
                title={x.title} 
                summary={x.summary} 
                genres={x.genres}/>
            )}
            </div>
        )}
        </div>
    );
}
export default Home;