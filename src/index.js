console.log('%c HI', 'color: firebrick')
let dogImages = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch (imgUrl)
.then(res=>res.json())  
.then( (data)=>{
   data.message.forEach(element => {
    let img = document.createElement("img");
    img.src = element
    dogImages.append(img)
   });
  })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  let dogBreeds = document.querySelector("#dog-breeds")
  fetch (breedUrl)
  .then(res=>res.json())
  .then( (data)=>{
    let breedArray = Object.entries(data.message)
    for( const [key, value] of breedArray) {
        let li = document.createElement("li")
        li.innerText = `${key}; ${value} `
        dogBreeds.append(li)
    }})

    const liClick = document.querySelector("ul")
    console.log(liClick)
    liClick.addEventListener('click', e=> {
            e.target.style.color = "red"})