/*
Ciao ragazzi,
Esercizio di oggi: Simon Says
nome repo: js-simon
Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Buon pomeriggio e buon lavoro !!!! :muscolo:
*/

// funzione per i numeri randomici univoci
function getRandUniqNumb(maximum, lenghtNum) {
  const uniNumb = new Set();
  let arrayNumb = [];
  while (uniNumb.size < lenghtNum) {
    const casualNumb = Math.floor(Math.random() * maximum) + 1;
    uniNumb.add(casualNumb);
  }
  uniNumb.forEach(item => arrayNumb.push(item));
  return arrayNumb;
}

// funzione delle dinamiche di gioco e di controllo risultati
function PlayGame (numbers) {
  buttPlay.classList.remove('d-none');
  buttPlay.addEventListener('click', function () {
    let userCol = document.getElementById('userCol');
    let userCol1 = document.getElementById('userCol1');
    let userCol2 = document.getElementById('userCol2');
    let userCol3 = document.getElementById('userCol3');
    let userCol4 = document.getElementById('userCol4');
    userCol.classList.remove('d-none');
    userCol1.classList.remove('d-none');
    userCol2.classList.remove('d-none');
    userCol3.classList.remove('d-none');
    userCol4.classList.remove('d-none');
    buttSub.classList.remove('d-none');
    buttSub.addEventListener('click', function() {
      let userNumber =parseInt(document.getElementById('user-n').value);
      let userNumber1 =parseInt(document.getElementById('user-n1').value);
      let userNumber2 =parseInt(document.getElementById('user-n2').value);
      let userNumber3 =parseInt(document.getElementById('user-n3').value);
      let userNumber4 =parseInt(document.getElementById('user-n4').value);
      let arrayNumbUser = []
      arrayNumbUser.push(userNumber);
      arrayNumbUser.push(userNumber1);
      arrayNumbUser.push(userNumber2);
      arrayNumbUser.push(userNumber3);
      arrayNumbUser.push(userNumber4);
      console.log(arrayNumbUser);
      let array = [];
      for (let i = 0; i <= arrayNumbUser.length; i++) {
        if (numbers.includes(arrayNumbUser[i])) {
          array.push(arrayNumbUser[i]);
          console.log(array);
          let result = document.getElementById('result');
          result.innerHTML = 'hai indovinato ' + array;
        }
      } 
    })  
  })
}

// variabili globali + evento sul primo bottone
let buttGen = document.getElementById('btn-gen');
let buttPlay = document.getElementById('btn-start');
let buttSub = document.getElementById('btn-submit');

buttGen.addEventListener('click', function () {
  let numbers = getRandUniqNumb(100, 5);
  console.log(numbers);
  let col1 = document.getElementById('col|');
  let col2 = document.getElementById('col||');
  let col3 = document.getElementById('col|||');
  let col4 = document.getElementById('col|V');
  let col5 = document.getElementById('colV');

  for (let i = 0; i < numbers.length; i++) {
    col1.innerHTML = numbers[0];
    col2.innerHTML = numbers[1];
    col3.innerHTML = numbers[2];
    col4.innerHTML = numbers[3];
    col5.innerHTML = numbers[4];
  }

  setTimeout(() => {
    col1.classList.add('d-none');
    col2.classList.add('d-none');
    col3.classList.add('d-none');
    col4.classList.add('d-none');
    col5.classList.add('d-none');
  }, 30000);

  setTimeout(PlayGame(numbers), 30500);

})
