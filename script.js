const msg = document.createElement('h1');
msg.innerHTML = 'SCEGLI QUALE ESERCIZIO CORREGGERE'
document.body.prepend(msg);

let palEx = document.querySelector('#palibtn');
let parDisEx = document.querySelector('#evenOdd');

palEx.addEventListener('click', paliExercise);
parDisEx.addEventListener('click', evenOddExercise);

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
    const choice = parseInt(prompt('Digita 0 per pari 1 per dispari:'));

    while (choice != 0 && choice != 1){
        choice = parseInt(prompt('input errato. Digita 0 per pari 1 per dispari:'));
    }

    const userNumber = parseInt(prompt('Scegli un numero da 1 a 5: '));

    while (userNumber < 1 || userNumber > 5){
        userNumber = parseInt(prompt('Non hai inserito un numero valido. Scegli un numero da 1 a 5: '));
    }

    let pcNumber = Math.floor(Math.random() * 5 ) + 1;

    let sum = userNumber + pcNumber;

    if ((sum % 2 && choice) || ( !(sum % 2 && !choice))){
        console.log(pcNumber);
        msg.innerHTML = 'grande hai vinto!';
    } else{
        console.log(pcNumber);
        msg.innerHTML = 'ritenta sarai più fortunato...'
    }
}