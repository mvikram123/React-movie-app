import React,{useState} from "react";


let moviesData=[ 
  {id:1 ,title:"Bahubali2" , year:2016,runtime:24, genres:["action","romantic"]},
  {id:2 ,title:"Bahubali1" , year:2016,runtime:24, genres:["action","romantic"]},
  {id:3 ,title:"Adipurush" , year:2023,runtime:24, genres:["action","history"]},
  {id:4 ,title:"gadar2" , year:2023,runtime:24, genres:["action","romantic"]},
  {id:5 ,title:"gadar" , year:2004,runtime:24, genres:["action","romantic"]},
  {id:6 ,title:"singham" , year:2016,runtime:24, genres:["action","romantic"]}
]



const App=()=>{

    let[selectedMovie,setSeletedMovie]=useState("");
  
    
  
  
    return (
  
      <div>
          <h1>Movie list</h1>
          <div className="movie-list">
          {
          
            moviesData.map((movie)=>{
  
  
              return (
                 <h2 onClick={()=>setSeletedMovie(movie)}>{movie.title}</h2>
              )
  
            })
         
        }
        </div>
        {selectedMovie &&(
           <div className="movie-display">
  
           <h1>{selectedMovie.title}</h1>
           <h1>{selectedMovie.year}</h1>
           <h1>{selectedMovie.runtime}</h1>
           <h1>{selectedMovie.genres.join(" ")}</h1>
         </div>
        )}
         
  
      </div>
    )
  }
  export default App;