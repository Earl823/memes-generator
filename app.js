var memesUrl = 'https://api.imgflip.com/get_memes'
var img = document.querySelector('.img')

async function btn(){
  const res = await fetch(memesUrl)
  const data = await res.json()
  
  const random = Math.floor(Math.random() * 100)

  const dataPic = await(data.data.memes[random].url)
  
  img.src = dataPic
}
