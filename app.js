const value = document.querySelector('.value');
const generate = document. getElementById('generate');
const body = document.querySelector('body'); 


const rgbNumber = function(min, max){
    return Math.floor(Math.random() *(max-min+1)) + min;
    }

    const rgbColor = function(){
       return [
        rgbNumber(0, 255),
        rgbNumber(0, 255),
        rgbNumber(0, 255),
        ]
    }
generate.addEventListener('click', function(e){
        const rgb = rgbColor();
        const content = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        body.style.setProperty('background-color', content);
        value.textContent = content;
}
)
    