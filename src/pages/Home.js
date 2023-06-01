import React, { useEffect } from 'react';
//import axios from 'axios';

import { useState, } from 'react';
import MovieList from '../components/MovieList';
import MovieHeading from '../components/MovieHeading';
import SearchBox from '../components/SearchBox';
import AddFavourite from '../components/AddFavourites';
import RemoveFavourites from '../components/RemoveFavourites';

function Home() {
  // fetch(API_URL)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error))
  const [favourites,setFavourites]=useState([]);
  const [movies,setMovies]=useState([]);
  const [searchValue,setSearchValue]=useState('');

    const getMovieRequest= async(searchValue)=>{
      const API_URL=  `http://www.omdbapi.com/?s=${searchValue}&apikey=131e6f45`
      const response=await fetch(API_URL);
      const responseJson= await response.json();
      console.log(responseJson);
      if(responseJson.Search){
        setMovies(responseJson.Search);
      }
    }

    useEffect(()=>{
      getMovieRequest(searchValue);
    },[searchValue]);

    useEffect(()=>{
      const movieFavourites=JSON.parse(localStorage.getItem('react-movie'));
      setFavourites(movieFavourites);
    },[]);
    
    const saveToStorage=(items)=>{
      localStorage.setItem('react-movie',JSON.stringify(items))
    }
    const addFavouritesMovie=(movie)=>{
      const newFavouriteList= [...favourites,movie]  
      setFavourites(newFavouriteList);
      saveToStorage(newFavouriteList);
    };

    const removeFavouritesMovie=(movie)=>{
      const newFavouriteList= favourites.filter((favourites)=> favourites.imdbID!==movie.imdbID)  
      setFavourites(newFavouriteList);
      saveToStorage(newFavouriteList);
    }

    
 return( 
  <div className='container-fluid'> 
    <div className='flex flex-row justify-between px-6'>
      <MovieHeading heading='Movies'/> 
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/> 
    </div>
    <div className='flex flex-row'>
      <MovieList movies={movies} handleFavouritesClick={addFavouritesMovie} favouriteComponent={AddFavourite}/>
    </div>

    <div className='flex flex-row justify-between px-6'>
      <MovieHeading heading='Favourites'/> 
    </div>
    <div className='h-60 flex flex-row'>
    <MovieList movies={favourites} handleFavouritesClick={removeFavouritesMovie} favouriteComponent={RemoveFavourites}/>
    </div>
  </div>  
 );
 
}

export default Home;