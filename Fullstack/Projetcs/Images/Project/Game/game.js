function game() {
    var random = Math.floor(Math.random() * 10 + 1);
    var div = document.getElementById('root');
    switch (random) {
        case 1:
            div.innerHTML = '1';
            break;
        case 2:
            div.innerHTML = '2';
            break;
        case 3:
            div.innerHTML = '3';
            break;
        case 4:
            div.innerHTML = '4';
            break;
        case 5:
            div.innerHTML = '5';
            break;
        case 6:
            div.innerHTML = '6';
            break;
        case 7:
            div.innerHTML = '7';
            break;
        case 8:
            div.innerHTML = '7';
            break;
        case 9:
            div.innerHTML = '9';
            break;
        case 10:
            div.innerHTML = '10';
            break;
    }
}
