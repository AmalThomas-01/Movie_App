import React from "react";

const MovieList=(props)=>{
    const FavouriteComponent=props.favouriteComponent;
    return(
        <>
            {props.movies.map((movie,index)=>
            <><div className="flex flex-col px-2 h-60">
            <div>
                <img src={movie.Poster} alt="f" className="h-50"></img>
            </div>
            <div onClick={()=>props.handleFavouritesClick(movie)} className="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FavouriteComponent/>
            </div>
        </div>
        
          
          </>)}
        </>
    );
}
export default MovieList;