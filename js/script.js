class DivBox {
    constructor(backgroundColor, leftPosition, rightPosition) {
        this.color = backgroundColor;
        this.left = leftPosition;
        this.top = rightPosition;
    }

    offsetLeft() {
        this.left += getRandomInteger(-50, 50);

        if (this.left + 100 > document.documentElement.clientWidth) {
            this.left = document.documentElement.clientWidth - 100;
        }
        else if (this.left - 100 < 0) {
            this.left = 100;
        }
    }
    offsetTop() {
        this.top += getRandomInteger(-50, 50);

        if (this.top + 100 > document.documentElement.clientHeight) {
            this.top = document.documentElement.clientHeight - 100;
        }
        else if (this.top - 100 < 0) {
            this.top = 100;
        }
    }
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

let countBox = prompt("Введите количество объектов: ");
let container = document.querySelector(".container");
let arrBox = [];
let points = 0;

for (countBox; countBox > 0; countBox--) {
    arrBox.push(new DivBox(`rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`,
     getRandomInteger(0, document.documentElement.clientWidth), 
     getRandomInteger(0, document.documentElement.clientHeight)));

    container.innerHTML += '<div class="box" style="background-color: ' + 
    `${arrBox[arrBox.length - 1].color};` + 
    `left: ${arrBox[arrBox.length - 1].left}px;` + 
    `right: ${arrBox[arrBox.length - 1].top}px;` + '"></div>';
}

for (let elem of container.children) {
    elem.addEventListener('mouseover', function(event) {
        elem.style.left = event.x + getRandomInteger(-20, 20) + 'px';
        elem.style.top = event.y + getRandomInteger(-20, 20) + 'px';
    });
    elem.addEventListener('click', function() {
        elem.remove();
        points++;
    });
}

setInterval ( () => {
    
    let index = 0;

    for (let elem of container.children) {
        arrBox[index].offsetLeft();
        arrBox[index].offsetTop();

        elem.removeAttribute('style');
        elem.setAttribute('style', `background-color: ${arrBox[index].color}; left: ${arrBox[index].left}px; top: ${arrBox[index].top}px;`);

        index++;
    }}, 300
);