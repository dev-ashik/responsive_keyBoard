

var text = '';
var isCapsLock = false;
var isNumLock = false;

changeValue = (t) =>{
    document.getElementById('text_area').innerText = t;
}

clickedNumber = (n) =>{
    if (isCapsLock == true){
        if (n == '1'){
            text += '!';
        }
        else if (n == '2'){
            text += '@';
        }
        else if (n == '3'){
            text += '#';
        }
        else if (n == '4'){
            text += '$';
        }
        else if (n == '5'){
            text += '%';
        }
        else if (n == '6'){
            text += '^';
        }
        else if (n == '7'){
            text += '&';
        }
        else if (n == '8'){
            text += '*';
        }
        else if (n == '9'){
            text += '(';
        }
        else if (n == '0'){
            text += ')';
        }
        changeValue(text);
    }else {
        text += n;
        changeValue(text);
    }
};

clicked = (c) =>{
    if (isCapsLock == true){ 
        text += c.toUpperCase();
        // console.log(uperC);
        changeValue(text);
    }else {
        text += c;
        changeValue(text);
    }
};

clickdBack = () => {
    text = text.slice(0, -1);
    changeValue(text);
};

clickedIcon = (i) =>{
    if(i == 'minus'){
        text += '-';
        changeValue(text);
    }
    else if(i == 'equal'){
        text += '=';
        changeValue(text);
    }
    else if(i == 'carat'){
        text += '`';
        changeValue(text);
    }
    else if(i == '['){
        text += '[';
        changeValue(text);
    }
    else if(i == ']'){
        text += ']';
        changeValue(text);
    }
    else if(i == '\\'){
        text += '\\';
        changeValue(text);
    }
    else if(i == 'coma'){
        text += ',';
        changeValue(text);
    }
    else if(i == 'dot'){
        text += '.';
        changeValue(text);
    }
    else if(i == 'clash'){
        text += '/';
        changeValue(text);
    }
    else if(i == 'colon'){
        text += ';';
        changeValue(text);
    }
    else if(i == 'cort'){
        text += '\'';
        changeValue(text);
    }
}

clickedCaps = () =>{
    if (isCapsLock == false){
        isCapsLock = true;
        document.getElementById('capsI').innerText = 'C';
    }else {
        isCapsLock = false;
        document.getElementById('capsI').innerText = '';
    }

}

clickedNumberLock = () =>{
    if(isNumLock == false){
        isNumLock = true;
        document.getElementById('NLock').innerText = 'N';
    }else {
        isNumLock = false;
        document.getElementById('NLock').innerText = '';
    }
}

number = (n) =>{
    if (isNumLock == false){
        text += n;
        changeValue(text);
    }else {

    }
}
