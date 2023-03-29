


// const body=document.querySelector("body")
// const div=document.querySelector("div")
// body.innerHTML=`<div class="container">
// <div class="search">
//     <input type="text" placeholder="Search Movie...">
//     <button>Search</button>
// </div>



// </div>
// `

// fetch("https://api.tvmaze.com/shows").then(data=>data.json())
// .then(arr=>{
//     for(let i=0;i<arr.length;i++){
// div.innerHTML+=`
//    <div class="d-flex flex-row gap-4" >

//   <img src="${arr[i].image.medium}" >
//   <div >
//     <h5 class="card-title"><strong>Name:</strong>${arr[i].name}</h5>
//     <h5 class="card-title"><strong>imbd:</strong>${arr[i].externals.imdb}</h5>
    
//   </div>
//   </div>


// `}})

const cartFilm=document.querySelector('.cart-film')
const mainFilm=document.querySelector('.main-film')
const mainFilmName=document.querySelector('.main-film-name')
fetch("https://api.tvmaze.com/shows").then(data=>data.json())
.then(arr=>{
for (let i = 0; i < arr.length; i++) {
    mainFilm.innerHTML+=
    `
    <div class="cart-film mt-1">
    <img class="w-100 h-75" src="${arr[i].image.medium}" alt="">
    <p class="pt-4"> <a class="text-bg-danger p-3 " href=""><strong>Name: </strong><b>${arr[i].name}</b></a></p>
    <p class="pt-4"><a class="text-bg-dark p-3 " href=""><strong>Imdb: </strong><b>${arr[i].externals.imdb}</b></a></p>
</div>
    `
    
}
})
