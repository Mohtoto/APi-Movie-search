//Your public key
//const key = ac98ae91650072125869cc117fea1847


//Your private key
//8065761022217c190295482a4d0cbcca258d306f

//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ac98ae91650072125869cc117fea1847&hash=8065761022217c190295482a4d0cbcca258d306f


//http://www.omdbapi.com/?apikey=59e995b1&s=fast



const movieEl = document.querySelector('.movie__list')

const searchBar = document.querySelector('.input__search')



function lightmode(){

 

    document.querySelector('body').classList.toggle('dark-theme')
}

 





async function onSearchChange(event){


  const id = event.target.value
  
  const data = await fetch(`http://www.omdbapi.com/?apikey=59e995b1&s=${id}`)

     result = await data.json();
     
  
      console.log(result)
      movieEl.innerHTML = result.Search.map(
     
     (user) => `
     <div class="movie-desc__container">
     <img src="${user.Poster}" alt="" class="img__movie">
     
     <div class="movie__desc movie__back">
         <p><b>title :</b> ${user.Title}</p>
         <p><b>year :</b>  ${user.Year}</p>
         <p><b>Type:</b>   ${user.Type}</p>
         <p><b>imdbID:</b> ${user.imdbID}</p></div>
 
         </div>`).join('')



}




async function main(){


   //const randommovieArray = ['scary ']
   
     
   
  
   //const randomIndex = Math.floor(Math.random() * randommovieArray.length); 
   
   //const randomElement = randommovieArray[randomIndex];
   

    
  
    

     const data = await fetch(`http://www.omdbapi.com/?apikey=59e995b1&s=marvel`)

     const result = await data.json();
     
  
      console.log(result)
      movieEl.innerHTML = result.Search.map(
     
     (user) => `
     <div class="movie-desc__container">
     <img src="${user.Poster}" alt="" class="img__movie">
     
     <div class="movie__desc movie__back">
         <p><b>title :</b> ${user.Title}</p>
         <p><b>year :</b>  ${user.Year}</p>
         <p><b>Type:</b>   ${user.Type}</p>
         <p><b>imdbID:</b> ${user.imdbID}</p></div>
 
         </div>`).join('')

         

        
}




main();


