const msg = document.createElement('h1');
let areThereElements = false;

reset();
document.body.prepend(msg);


let palEx = document.querySelector('#palibtn');
let parDisEx = document.querySelector('#evenOdd');
let res = document.querySelector('#reset');


palEx.addEventListener('click', paliExercise);
parDisEx.addEventListener('click', evenOddExercise);
res.addEventListener('click', reset);

function paliExercise(){
    let userWord = prompt('Quale parola vuoi verificare?').trim();
    
    while(!isWord(userWord)){
        userWord = prompt('Inserisci una parola valida');
    }
    
    isPalindrom(userWord) ? msg.innerHTML = 'direi di si' : msg.innerHTML = 'No, ritenta sarai più fortunato';
    
    function isWord(aWord){
        let response = true;
        let i = 0;
        
        while (response && i < aWord.length) {
            let char = aWord.charCodeAt(i);
    
            if (char < 65 || (91 <= char && char <= 96) || char > 165){
    
                console.log(aWord.charCodeAt(i));
                response = false;
            }
            i++;
        }
        return response;
    }
    
    function isPalindrom(aWord){
        let mirror = wordReverse(aWord);
    
        if (mirror == aWord){
            return true   
        } else{
            return false
        } 
    }
    
    function wordReverse(aWord){
        reversed = '';
    
        for (let i = --aWord.length; i >= 0; i--){
    
            // console.log(aWord.charCodeAt(i));
            reversed += aWord[i];
        }
    
        return reversed
    }
}

function evenOddExercise(){
    const parDisChoice = document.createElement('select');
    const parDisOption = document.createElement('option');
    const arrChoice = ['pari', 'dispari'];

    for (i = 0; i < 2; i++){
        const parDisOption = document.createElement('option');
        parDisOption.innerHTML = arrChoice[i];
        parDisOption.value = 1;
        if(parDisOption.innerHTML == 'pari'){

            parDisOption.value = 0;
        }
        parDisChoice.append(parDisOption);
    }

    msg.innerHTML = 'Scegli pari o dispari, inserisci nell\'apposito campo il tuo numero(compreso tra 1 e 5) e poi clicca su gioca.';
    document.body.append(parDisChoice);
    
    let inputNumber = document.createElement('input');
    inputNumber.setAttribute('type', 'number');
    inputNumber.setAttribute('placeholder', 'inserisci qui il tuo numero');
    document.body.append(inputNumber);
    
    let gioca = document.createElement('button');
    gioca.innerHTML = 'GIOCA';
    gioca.setAttribute('id', 'gioca');
    document.body.append(gioca);
    gioca.addEventListener('click',play)

    areThereElements = true;

    function play(){
        let userNumber = parseInt(inputNumber.value);
        let pcNumber = 0;
        let sum = 0;
    
        if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)){
            alert('Inserisci un numero corretto')
            document.body.removeChild(gioca);
            document.body.removeChild(inputNumber);
            document.body.removeChild(parDisChoice);
            evenOddExercise();
        } else {
            pcNumber = Math.floor(Math.random() * 5 ) + 1;
    
            sum = userNumber + pcNumber;
    
            const selIndex = parDisChoice.selectedIndex;
            const choice = parDisChoice.options[selIndex].value;
    
            if ((sum % 2 && choice) || (!sum % 2 && !choice)){
                console.log(pcNumber);
                msg.innerHTML = `il computer ha scelto ${pcNumber}. La somma è ${sum}. Grande hai vinto!` ;
            } else{
                console.log(pcNumber);
                msg.innerHTML = `il computer ha scelto ${pcNumber}. La somma è ${sum}. Ritenta sarai più fortunato...`
            }
        }
    }
}

function reset(){
    msg.innerHTML = 'SCEGLI QUALE ESERCIZIO CORREGGERE';

    if (areThereElements){
        const gioca = document.body.querySelector('#gioca');
        const inputNumber = document.body.querySelector('input');
        const parDisChoice = document.body.querySelector('select');

        document.body.removeChild(gioca);
        document.body.removeChild(inputNumber);
        document.body.removeChild(parDisChoice);

        areThereElements = false;
    }
}













