let product = [
    { name: 'Headphone1', price: '100$', image: 'images/c1_p1.jpg', category: 'Headphones' },
    { name: 'Headphone2', price: '150$', image: 'images/c1_p2.png', category: 'Headphones' },
    { name: 'Headphone3', price: '190$', image: 'images/c1_p3.jpg', category: 'Headphones' },
    { name: 'Headphone4', price: '200$', image: 'images/c1_p4.jpg', category: 'Headphones' },
    { name: 'Headphone5', price: '800$', image: 'images/c1_p5.jpg', category: 'Headphones' },
    { name: 'Headphone6', price: '380$', image: 'images/c1_p6.jpg', category: 'Headphones' },
    { name: 'Headphone7', price: '780$', image: 'images/c1_p7.jpg', category: 'Headphones' },
    { name: 'Headphone8', price: '390$', image: 'images/c1_p8.jpg', category: 'Headphones' },
    { name: 'Headphone9', price: '500$', image: 'images/c1_p9.jpeg', category: 'Headphones' },
    { name: 'Speaker1', price: '100$', image: 'images/c2_p1.jpg', category: 'Speakers' },
    { name: 'Speaker2', price: '150$', image: 'images/c2_p2.jpg', category: 'Speakers' },
    { name: 'Speaker3', price: '190$', image: 'images/c2_p3.jpg', category: 'Speakers' },
    { name: 'Speaker4', price: '200$', image: 'images/c2_p4.jpeg', category: 'Speakers' },
    { name: 'Speaker5', price: '800$', image: 'images/c2_p5.jpg', category: 'Speakers' },
    { name: 'Speaker6', price: '380$', image: 'images/c2_p6.jpg', category: 'Speakers' },
    { name: 'Speaker7', price: '780$', image: 'images/c2_p7.jpg', category: 'Speakers' },
    { name: 'Speaker8', price: '390$', image: 'images/c2_p8.jpg', category: 'Speakers' },
    { name: 'Speaker9', price: '500$', image: 'images/c2_p9.jpg', category: 'Speakers' },
    { name: 'Watch1', price: '100$', image: 'images/c3_p1.jpeg', category: 'Watch' },
    { name: 'Watch2', price: '150$', image: 'images/c3_p2.png', category: 'Watch' },
    { name: 'Watch3', price: '190$', image: 'images/c3_p3.png', category: 'Watch' },
    { name: 'Watch4', price: '200$', image: 'images/c3_p4.jpg', category: 'Watch' },
    { name: 'Watch5', price: '800$', image: 'images/c3_p5.jpeg', category: 'Watch' },
    { name: 'Watch6', price: '380$', image: 'images/c3_p6.jpeg', category: 'Watch' },
    { name: 'Watch7', price: '780$', image: 'images/c3_p7.png', category: 'Watch' },
    { name: 'Watch8', price: '390$', image: 'images/c3_p8.jpeg', category: 'Watch' },
    { name: 'Watch9', price: '500$', image: 'images/c3_p9.png', category: 'Watch' },
]

let category;

displayProducts('Headphones');

function selectCategory(e){
   displayProducts(e.target.value);
}

function displayProducts(category){
    product.forEach((item, index) => {
        if(item.category === category){
            let i = index % 9 + 1;
            document.querySelector('.slide'+i).innerHTML = `<img src='${item.image}' alt='${item.name}'/>
                <h4>${item.name}</h4><h5>${item.price}</h5><h6>${item.category}</h6>`;
        }
    });
}


var slideIndex = 1;
showSlides(slideIndex, '');

function plusSlides(n, type) {
  showSlides(slideIndex += n, type);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, type) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if(type === 'next'){
            slides[i].classList.remove('slide-out');
            slides[i].classList.add('slide-in');
        }else{
            slides[i].classList.remove('slide-in');
            slides[i].classList.add('slide-out');
        }
    }
    slides[slideIndex-1].style.display = "block";
}