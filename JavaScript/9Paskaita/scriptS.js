
document.querySelector("button").addEventListener("click", myFunction);

function myFunction(e) {
  e.preventDefault();
  const inputValue = document.querySelector('input').value;
  //  arba const inputValue = myForm.elements["number"].value;
  document.querySelector('p').innerText = reverse(inputValue);
}

function reverse(e) {
  const spliting = e.split(''); //sukarpo po viena simboli ('')
  const reverseSplit = spliting.reverse(); //simbolius suraso atvirksciai
  return reverseSplit.join('');

}