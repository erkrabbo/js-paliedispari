const msg = document.createElement('h1');
document.body.prepend(msg);


let userWord = prompt('Quale parola vuoi verificare?');

isPalindrom(userWord) ? msg.innerHTML = 'direi di si' : msg.innerHTML = 'No, ritenta sarai più fortunato';

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

    for (let i = --aWord.length; i>=0; i--){
        reversed += aWord[i];
    }

    return reversed
}