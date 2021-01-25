import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route,BrowserRouter as Router, Switch , Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailView from './components/DetailView';
import Nav from './components/Nav';
import './movies.css'


export default function Movies() {
    let [movies , setMovies] = useState([]);
    const [movieid , setId] = useState([]);

    useEffect(()=>{
        
        const url = 'https://wookie.codesubmit.io/movies';
        const token = 'Wookie2019';
            
        axios.get(url,{
            headers:{
                'Authorization':`Bearer ${token}` 
            }
        }).then(res =>{
            console.log(res.data.movies)
            setMovies(res.data.movies)
        }).catch(err =>{
        console.log(err)
        });

    },[]);

    const getGenre =()=>{
        let tags = [];
        const genres = movies.map( movie =>{
            return movie.genres ;
        });
        genres.map(element => {
            element.map(tag =>{
                tags.push(tag)
            })
        })

        const unique = [... new Set(tags)];
        return unique;
    }


    const handleClick =(e)=>{
       
        const id = e.target.parentNode.id;
        localStorage.setItem("mid", id);
        setId(id);
    }

    
    return (

        <Router >
            <div className="container">
                <Nav />
            
                <Switch>
                    <Route exact path="/movies">
                    <div className="links">
                        <Link to="/movies/dashboard">  Dashboard  </Link>
                        <Link to="/movies/detailview">  DetailView  </Link>
                    </div>
                    </Route>
                    <Route path='/movies/dashboard'>
                    <div className="links">
                        <Link to="/movies">  Movies  </Link>
                        <Link to="/movies/detailview">  DetailView  </Link>
                    </div>
                        <Dashboard list={getGenre()} movieList={movies} handleClick={handleClick}/>
                    </Route>
                    <Route path='/movies/detailview'>
                    <div className="links">
                        <Link to="/movies">  Movies  </Link>
                        <Link to="/movies/dashboard">  Dashboard  </Link>
                    </div>
                        <DetailView id={movieid} movieList={movies}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
