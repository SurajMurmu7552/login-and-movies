import React  from 'react'
import './detailview.css'

export default function DetailView({movieList}) {

    const id = localStorage.getItem("mid");

    // const handleBookmark =() =>{
    //     localStorage.setItem("bookmark", [id])
    // }

    return (
        <>
            {movieList.map((movie)=>{
                if(movie.id === id)
                    return (
                        <div className="view-container">
                            <div className="poster">
                                <img src={movie.poster} alt=""/>
                            </div>
                            <div className="about">
                                <div className="title"> 
                                    <h3>{movie.title} ({movie.imdb_rating})</h3> 
                                </div>
                                <div className="detail">
                                    <p>{movie.released_on} | {movie.length} | {movie.director}</p>
                                    <p className="cast">cast : {movie.cast.map((e)=>(
                                        <li>{e},</li>
                                    ))}</p>
                                </div>
                                <div className="desc">
                                    <p><strong>Movie Description</strong> : {movie.overview}</p>
                                </div>
                                {/* <div className="bookmark">
                                    <span><a href="" onClick={handleBookmark}>bookmark</a></span>
                                </div> */}

                            </div>
                        </div>

                    )
                    return null;
            })}
        </>           



        // <div className="view-container">
        //     <div className="poster">
        //         <img src="" alt=""/>
        //     </div>
        //     <div className="about">
        //         <div className="title">
        //             <h3>Title (rating)</h3>
        //         </div>
        //         <div className="detail">
        //             <p>year | length | director</p>
        //             <p>cast : </p>
        //         </div>
        //         <div className="desc">
        //             <p>Movie Description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ratione provident debitis, facere maxime nam corporis modi architecto aliquam nisi?</p>
        //         </div>

        //     </div>
        // </div>
    )
}
