const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle ={
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor =  value;
    },
    color(value) {
        this.element.style.color = value ;
    },    
    height(value) {
        this.element.style.height =  value + 'px';
    },
    width(value) {
        this.element.style.width =  value + 'px';
    },
    borderRadius(value) {
        this.element.style.borderRadius =  value + 'px';
    },    
    border(value) {
        this.element.style.border = value ;
    }, 
    texto(value) {
        this.element.innerText = value ; 
    },
    fontFamily(value) {
        this.element.style.fontFamily = value ;
    }, 
    fontSize(value) {
        this.element.style.fontSize = value + 'rem' ;
    }, 
}

function handleChange(e){
    const name  = e.target.name;
    const value = e.target.value;

    handleStyle[name](value); 
    saveValues(name, value);
    showCss();  
}

function saveValues(name, value){
    localStorage[name] = value;
}

function setValue(){
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];
    }) 
    showCss();
}

setValue();

function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ') .join(';</span><span>')
}
