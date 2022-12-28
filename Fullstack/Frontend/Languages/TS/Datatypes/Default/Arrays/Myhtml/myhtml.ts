var Flipkartitems=[{
img:'../../../../../../../Projetcs/Images/6.jpg',
    title:'TEDDY BEARS',
    discount:'SAVE UPTO 70%',
    description:'High quality teddy bears',
    price:'$6000'}
]
var img=document.createElement('img')
img.src=Flipkartitems[0].img
document.getElementById('root')?.appendChild(img)

var h1=document.createElement('h1')
h1.innerHTML=Flipkartitems[0].title
h1.style.color='yellow'
h1.style.backgroundColor='black'
document.getElementById('root')?.appendChild(h1)

var h3=document.createElement('h3')
h3.innerHTML=Flipkartitems[0].discount
h3.style.color='red'
document.getElementById('root')?.appendChild(h3)

var h3=document.createElement('h3')
h3.innerHTML=Flipkartitems[0].description
h3.style.color='black'
document.getElementById('root')?.appendChild(h3)

var h3=document.createElement('h3')
h3.innerHTML=Flipkartitems[0].price
h3.style.color='black'
h3.style.fontSize='50px'
document.getElementById('root')?.appendChild(h3)