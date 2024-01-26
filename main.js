document.querySelector('#predict').addEventListener('click',getName)

function getName(){
  const nameGet = document.querySelector('#name').value.toLowerCase()
  const url = `https://api.genderize.io?name=${nameGet}`
  fetch(url)
  .then(res => res.json())
  .then( data => {
    console.log(data)
    document.querySelector('h3').innerText = data.name
    document.querySelector('h4').innerText =  data.gender
    document.querySelector('h5').innerText = 'probability : ' + data.probability
    if( data.gender === 'male'){
      document.querySelector('img').src = '/images/maleicon.png'
    }else if(data.gender === 'female'){
      document.querySelector('img').src = '/images/women.png'
    }else{
      document.querySelector('span').innerText = 'Ooops!'
    }
   document.querySelector('img').style.display = 'block'
  })
  .catch(err => {
    console.log(`Errr ${err}`)
  })
}