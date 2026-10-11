const bouton = document.getElementById('btn');
bouton.addEventListener('click', function (){
  // alert("Merci de me contacter");
});

const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', function (event){
  event.preventDefault();
  alert('Message envoye !');
});

// alert('bon arriver!')


// EXO

const person = {
  firstname: 'Jonatahn',
  lastname: 'Gnahoau',
  age: 32,
  // note: 'dev',
}

// let a = 3 