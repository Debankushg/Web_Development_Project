

const inputText = document.querySelector('#txt');
const myButton =document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
myButton.addEventListener('click' ,(e) =>{
    if(inputText.value != " "){
        e.preventDefault();

        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

       
    }
   
    inputText.value = " ";
});