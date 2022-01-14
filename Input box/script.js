

const inputText = document.querySelector('#txt');
const myButton =document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
myButton.addEventListener('click' ,(e) =>{
    if(inputText.value != " "){
        e.preventDefault();

        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'delete';
        myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for(let i=0 ; i<close.length ; i++){
        close[i].addEventListener('click', () =>{
            close[i].parentElement.style.opacity = 0;

            setTimeout(() => {
                
                close[i].parentElement.style.display ='none';
            },500);
        })
    
    }
   
    inputText.value = " ";
});