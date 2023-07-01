console.log(`

Travel part 3:
1.Слайдер изображений в секции destinations +50
на десктоп варианте при клике на УРЕЗАННУЮ КАРТИНКУ СЛЕВА ИЛИ СПРАВА изображение меняется по принципу карусели
Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20 ......done \n
Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, 
который становится активным при нахождении соответствующего ему слайда в центре. 
На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации 
(можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20 ......done \n
Анимации плавного перемещения для слайдера +10 ......done \n
2.Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50......done \n
логин попап соответствует верстке его закрытие происходит при клике вне попапа +25......done \n
логин попап имеет 2 инпута (логин и пароль) 
при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25......done \n
3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету 
(То есть нажатие не закрывает модал а просто меняет его наполнение). +25 ......done \n
Total score .... 100(125);
`);


const burger = document.querySelector('.burger')
element = document.querySelector('.nav-list')
links = document.querySelector('.nav > ul')
overlay = document.querySelector('.overlay')
logIn = document.querySelector('.logIn')
popLogin = document.querySelector( '.pop_up')
previewBox = document.querySelector('.preview-box')
account = document.querySelector('.account')
popRegister = document.querySelector('.register')
popCreate = document.querySelector('.create')
popLine = document.querySelector('.line')
popOne = document.querySelectorAll('.pop_up_one')
popTwo = document.querySelectorAll('.pop_up_two')
submit = document.querySelector('.submit');

//burger-menu open
burger.addEventListener('click', () => {
    element.classList.toggle('open');
    burger.classList.toggle('active');
    overlay.classList.toggle('state-active')
    document.body.style.overflow = 'hidden';
});
// overlay open

overlay.addEventListener ('click', ()=> {
    element.classList.remove('open')
    burger.classList.remove('active');
    overlay.classList.toggle('state-active')
    document.body.style.overflow = 'auto';
    popLogin.classList.toggle('state-active')
    burger.style.display= 'block';
    previewBox.style.display = 'block';
    popLogin.toggle.style.display= 'block';
    popOne.forEach((el)=> el.style.display = 'block')
    popTwo.forEach((el)=> el.style.display = 'none')
    popLine.style.display = 'flex';
});
console.log(links)
links.addEventListener('click', (event)=> {
    if (event.target.className === 'links account') {
        overlay.classList.add('state-active');
    } else {
        overlay.classList.remove('state-active');
    }
    element.classList.remove('open');
    burger.classList.remove('active');
    document.body.style.overflow = 'auto';
});

account.addEventListener('click', ()=> {
    popLogin.classList.toggle('state-active');
    overlay.classList.add('state-active');
    document.body.style.overflow = 'auto';
    burger.classList.remove('active');
    popOne.forEach((el)=> el.style.display = 'block')
    popTwo.forEach((el)=> el.style.display = 'none')
    popLine.style.display = 'flex';
});


// pop-up open
logIn.addEventListener('click', () => {
    popLogin.classList.toggle('state-active')
    overlay.classList.add('state-active')
    document.body.style.overflow = 'auto';
    previewBox.style.display = 'none';

});

popRegister.addEventListener('click',() =>{
    popOne.forEach((el)=> {
    let display = window.getComputedStyle(el).display;
    display === 'block' ? el.style.display = 'none' : el.style.display = 'block'
    })
    popLine.style.display = 'none';
    popTwo.forEach((el)=> el.style.display = 'block')
});

popCreate.addEventListener('click',() => {
    popOne.forEach((el)=> {
        let display = window.getComputedStyle(el).display;
        display === 'block' ? el.style.display = 'none' : el.style.display = 'block'})
    popTwo.forEach((el)=> el.style.display = 'none')
    popLine.style.display = 'flex';

});

// alert window

submit.addEventListener('click',()=>{
    let email = document.querySelector('#e-mail').value;
    let password = document.querySelector('#password').value;
    alert('E-mail:' + (email) + '\n' + 'Password:' + (password))

});


//slider


const slider = document.getElementsByClassName('destinations-slider');
let box = document.querySelector('.destinations-wrap')
let boxWrap = document.querySelector('#destinations-box');
box.addEventListener('click', (event) => {
    addImage(event)
})
let ellipse = document.querySelectorAll('.ellipse');


const clicker = () => {
    for (let ind = 0; ind < slider.length; ind++) {
        if (slider[ind].classList.contains('next') || slider[ind].classList.contains('prev')) {
            slider[ind].classList.remove('next');
            slider[ind].classList.remove('prev');
            slider[ind].style.cursor = 'default'
        }
        if (ind === 2) {
            slider[ind].classList.add('next')
            slider[ind].style.cursor = 'pointer'
        }
        if (ind === 0) {
            slider[ind].classList.add('prev')
            slider[ind].style.cursor = 'pointer'
        }

    }
}

const screenWidth = window.screen.width

const addImage = (event) => {
    let elemClass = slider[1].className.split(' ')
    ellipse.forEach((el) => {
        el.classList.remove('ellipse-active')
        elemClass.forEach((elem) => {
            if (el.classList.contains(elem)) {
                el.classList.add('ellipse-active')
            }
        })
    })
    if (screenWidth > 568) {
        if (event.target.classList.contains('next')) {
            boxWrap.append(slider[0])
            clicker()
        } else if (event.target.classList.contains('prev')) {
            boxWrap.prepend(slider[2])
            clicker()
        }
    } else if (screenWidth < 568){
        if (event.target.classList.contains('arrow-right')) {
            boxWrap.append(slider[0])
            clicker()
        } else if (event.target.classList.contains('arrow-left')) {
            boxWrap.prepend(slider[2])
            clicker()
        }
    }
}

clicker()


























