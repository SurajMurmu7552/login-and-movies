import React from 'react'

import "./dashboard.css"


export default function Dashboard({list , movieList ,handleClick}) {

    return (
        
        <div className="dashboard-container">
            <div className="genre">
                {

                    list.map( ele =>
                        (
                            <div key= {ele} >
                                <h3 className="genre-heading">{ele}</h3>     
                                <div className="movies">
                                    {
                                        movieList.map(movie =>(
                                            movie.genres.map(arr =>{
                    
                                                if (arr === ele){
                                                            
                                                    return <a href="./movies/detailview" className="movie-item" id={movie.id} key={movie.id} onClick={handleClick} ><img src={movie.backdrop} alt=""/></a>
                                                        
                                                    
                                                }
                                                return null;
                                            })
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    )
                }
            </div>              
        </div>
            
    )
}
