import React,{useState} from "react";
import moviesData from "../datas/moviesData"



const MovieDisplay=({selectedMovieDisplay})=>{
    //let[selectedMovie,setSeletedMovie]=useState("")

    if(!selectedMovieDisplay)return null


 return(
        <div>
        
         <div className="movie-display">
         <h1>Movie Info :</h1>


         <h1>{selectedMovieDisplay.title}</h1>
         <h1>{selectedMovieDisplay.year}</h1>
         <h1>{selectedMovieDisplay.runtime}</h1>
         <h1>{selectedMovieDisplay.genres.join(",")}</h1>
        </div>
      
 </div>
  )
}
export default MovieDisplay