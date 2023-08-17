
import React,{useState} from "react";
import MovieDisplay from "./Component/MovieDisplay";
import MovieList from "./Component/MovieList";




const App=()=>{

  let[selectedMovie,setSelectedMovie]=useState("")

  


  return (

    <div>

              <MovieDisplay selectedMovieDisplay={selectedMovie}/>
             <MovieList addMovie={setSelectedMovie}/>
       </div>
  )
}
export default App;