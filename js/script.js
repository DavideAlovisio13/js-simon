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

function sameNumb(array1, array2) {
  const arrayNumbUserTrue = []
  array1.forEach((element) => {
    if (array2.includes(element)) {
      arrayNumbUserTrue.push(element);
      console.log(sameNumb(numb))
    }
  })
}

let arrayNumbUser = []
let buttGen = document.getElementById('btn-gen');
let buttPlay = document.getElementById('btn-start');

buttGen.addEventListener('click', function () {
  let numbers = getRandUniqNumb(100, 5);
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

})

buttPlay.addEventListener('click', function () {
  let userNumber =parseInt(document.getElementById('user-n').value);
  let userNumber1 =parseInt(document.getElementById('user-n1').value);
  let userNumber2 =parseInt(document.getElementById('user-n2').value);
  let userNumber3 =parseInt(document.getElementById('user-n3').value);
  let userNumber4 =parseInt(document.getElementById('user-n4').value);
  arrayNumbUser.push(userNumber);
  arrayNumbUser.push(userNumber1);
  arrayNumbUser.push(userNumber2);
  arrayNumbUser.push(userNumber3);
  arrayNumbUser.push(userNumber4);
  console.log((arrayNumbUser));
})




