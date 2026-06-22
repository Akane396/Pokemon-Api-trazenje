const inputPolje = document.getElementById('unesi');
const dugme = document.getElementById('dugme');
const drugi = document.querySelector('.drugi');
const reset = document.getElementById('reset')

async function dajPodatke() {
  let ime = inputPolje.value.toLowerCase().trim();
  if (ime === "") {
    
    return;
  }

  try {
    let odgovor = await fetch(`https://pokeapi.co/api/v2/pokemon/${ime}`);
    
    let data = await odgovor.json();
     
    drugi.style.display = "block"; 
    document.querySelector('h2').textContent = data.name;
    document.querySelector('p').textContent = data.types[0].type.name;
    document.getElementById('slika').src = data.sprites.front_default;

  } catch (greska) {
   drugi.style.display = "none";
    alert("Pokemon nije pronađen! Provjeri ime.");
  }
}

dugme.addEventListener('click', dajPodatke);

reset.addEventListener('click', () => {

  drugi.style.display = "none";
  
  document.querySelector('h2').textContent = "";
  document.querySelector('p').textContent = "";
  
  document.getElementById('slika').src = "";
  
  inputPolje.value = "";
});