import React ,{useState} from "react";
import moviesData from "../datas/moviesData";
import MovieDisplay from "./MovieDisplay";




const MovieList=({addMovie})=>{




    return(
        <div>
          <h1>Movie list</h1>
          <div className="movie-list">
        {
        
          moviesData.map((movie)=>{

         return (
               <h2 onClick={()=>addMovie(movie)}>{movie.title}</h2>
            )

          })
        
      }
      {/* <MovieDisplay selectedMovieDisplay={addMovie}/> */}
       

    </div>
</div>



    )
}


export default MovieList;