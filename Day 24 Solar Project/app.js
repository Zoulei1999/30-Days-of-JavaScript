const space = {
    mercury:{
        gravity:0.378,
        image:"mercury.png"
    },
    venus:{
        gravity:0.907,
        image:"venus.png"
    },
    earth:{
        gravity:1,
        image:"earth.png"
    },
    mars:{
        gravity:0.166,
        image:"mars.png"
    },
    jupiter:{
        gravity:2.36,
        image:"jupiter.png"
    },
    saturn:{
        gravity:0.916,
        image:"saturn.png"
    },
    uranus:{
        gravity:0.899,
        image:"uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"neptune.png"
    },
    pluto:{
        gravity: 0.071,
        image:"pluto.png"
    }
}

const input = document.querySelector("#number");
const select = document.querySelector("select");
const button = document.querySelector('button');
const container = document.querySelector(".container");

let weight;

const containerUi = (img, text) => {
    let image = document.createElement("img");
    image.src = `images/${img}`;
    let p = document.createElement('p');
    p.textContent = `The weight of the object on ${select.value} is \n ${text}N`;
    p.className = 'big';
    container;
    container.appendChild(image);
    container.appendChild(p);

}

button.addEventListener('click',() => {
    let imgSrc;
    container.innerHTML = "";
    imgSrc = space[select.value].image;
    weight = Math.round(Number(input.value) * space[select.value].gravity);
    containerUi(imgSrc, weight);
    console.log(weight);
})