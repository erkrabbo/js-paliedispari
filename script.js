const msg = document.createElement('h1');
document.body.prepend(msg);


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




// || 91 <= aWord.charCodeAt(i) <= 96 || aWord.charCodeAt(i) > 165)