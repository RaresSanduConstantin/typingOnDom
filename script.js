const test = document.getElementById('test')
let i = 0;
let text = 'The brown fox jumped over the lazy dog' ;
let speed = 50;
test.innerHTML = "";
function typeOnDOM() {
    if ( i < text.length){
        test.innerHTML= test.innerHTML + text.charAt(i) ;
        
        i++;
        setTimeout(typeOnDOM, speed)
    } else {
        setTimeout(() => { i = 0;
            test.innerHTML = ''
            // test.innerHTML += text.charAt(i);
            
            setTimeout(typeOnDOM, speed)}, 1500)
       
    }
}
typeOnDOM()