let screen = document.getElementById('screen')
let button = document.querySelectorAll('button')
let screenValue = '';
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='AC'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText=='←'){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            try{
                screen.value = eval(screenValue);
            }
            catch{
                screenValue = 'Error !';
                screen.value = screenValue
            }
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}