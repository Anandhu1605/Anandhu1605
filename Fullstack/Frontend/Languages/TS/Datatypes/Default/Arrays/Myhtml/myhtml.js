var _a, _b, _c, _d, _e;
var Flipkartitems = [{
        img: '../../../../../../../Projetcs/Images/6.jpg',
        title: 'TEDDY BEARS',
        discount: 'SAVE UPTO 70%',
        description: 'High quality teddy bears',
        price: '$6000'
    }
];
var img = document.createElement('img');
img.src = Flipkartitems[0].img;
(_a = document.getElementById('root')) === null || _a === void 0 ? void 0 : _a.appendChild(img);
var h1 = document.createElement('h1');
h1.innerHTML = Flipkartitems[0].title;
h1.style.color = 'yellow';
h1.style.backgroundColor = 'black';
(_b = document.getElementById('root')) === null || _b === void 0 ? void 0 : _b.appendChild(h1);
var h3 = document.createElement('h3');
h3.innerHTML = Flipkartitems[0].discount;
h3.style.color = 'red';
(_c = document.getElementById('root')) === null || _c === void 0 ? void 0 : _c.appendChild(h3);
var h3 = document.createElement('h3');
h3.innerHTML = Flipkartitems[0].description;
h3.style.color = 'black';
(_d = document.getElementById('root')) === null || _d === void 0 ? void 0 : _d.appendChild(h3);
var h3 = document.createElement('h3');
h3.innerHTML = Flipkartitems[0].price;
h3.style.color = 'black';
h3.style.fontSize = '50px';
(_e = document.getElementById('root')) === null || _e === void 0 ? void 0 : _e.appendChild(h3);
