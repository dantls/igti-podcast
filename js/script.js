const frequencyText = document.querySelector('#frequencyText');
const frequencyRange = document.querySelector('#frequency');

window.addEventListener('load', function(){
  frequencyRange.addEventListener('input', onChangeRange);
  
});



const onChangeRange = (event) => {
  const frequencyValue = event.target.value

  frequencyText.value = frequencyValue;

  showRadio(frequencyValue);
}

const showRadio = (frequency) => {
  
  const divRadio = document.querySelector('#radio');
  divRadio.innerHTML = '';

  const radio = realPodcasts.find(frequencyRadio => frequencyRadio.id === frequency) 
  
  if(radio){
    const title = document.createElement("h1");
    title.textContent = `${radio.title}`;
    
    const image = document.createElement("img");
    image.setAttribute("src", `../img/${radio.img}`);

    const description = document.createElement("p");
    description.textContent = `${radio.description}`;

    divRadio.appendChild(title);
    divRadio.appendChild(image);
    divRadio.appendChild(description);
  }
  const notFound = document.createElement("p");
}

