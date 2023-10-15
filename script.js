const colorInput = document.querySelectorAll('input');
const Gbackground = document.querySelector('.color_display');
const selectInput = document.querySelector('select');
const TextBox = document.querySelector('#Text');
const text = document.querySelector('.tx');
const refresh = document.querySelector('#refresh');
const copy = document.querySelector('#copy');

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 0xf2f2f2).toString(16);
    return `#${randomColor}`
}

const generateGradient = (isRandom) => {
    if(isRandom){
        colorInput[0].value = getRandomColor();
        colorInput[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectInput.value}, ${colorInput[0].value}, ${colorInput[1].value})`;
    Gbackground.style.background = gradient;
    text.innerText = `background: ${gradient};`;

}

const copyCode = () => {
    navigator.clipboard.writeText(text.innerText);
    copy.innerText = "Copied!";
    setTimeout(() => copy.innerText = "Copy Code", 1630);
}

colorInput.forEach(input => {
    input.addEventListener("input", () => generateGradient(false))
})

selectInput.addEventListener("change", () => generateGradient(false))
refresh.addEventListener("click", () => generateGradient(true));
copy.addEventListener("click", copyCode);
TextBox.addEventListener("click", copyCode);