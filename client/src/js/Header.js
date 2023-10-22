let headerBar=document.querySelector('.header-bar');
let menu=document.querySelector('.menu')
let showsubitems=document.querySelectorAll('.showsubitems')
let submenylist=document.querySelector('.submenylist')

headerBar.addEventListener('click',()=>{
    menu.classList.add('activemenu')
})


let indexNumber;
showsubitems.forEach((v, i) => {
    // string = 'Yay';
    v.dataset.content = '\u{FF1E}';
    v.addEventListener("click", () => {
        showsubitems.forEach((value, iindex) => {
           console.log(value.children[2])
            if (iindex != i) {

                value.children[2].classList.remove('mobileMenu')

                value.setAttribute('data-content', '\u{2304}');
                
            }

        })

        v.children[2].classList.toggle('mobileMenu')
        if (indexNumber != i) {
            v.setAttribute('data-content', '\u{FF1E}');
            indexNumber = i;
        }
        else {
            v.setAttribute('data-content', '\u{2304}');
            indexNumber = 35;
        }
    })

})



let listitmes=document.querySelectorAll('.list-item h3')
     
let indexNumber1;
 listitmes.forEach((v, i) => {
// string = 'Yay';
v.dataset.content = '\u{FF1E}';
v.addEventListener("click", () => {

listitmes.forEach((value, iindex) => {
            if (iindex != i) {
        value.nextElementSibling.classList.remove('mobileMenu1')
        value.setAttribute('data-content', '\u{2304}');
        
    }

})

v.nextElementSibling.classList.toggle('mobileMenu1')
if (indexNumber1 != i) {
    v.setAttribute('data-content', '\u{FF1E}');
    indexNumber1 = i;
}
else {
    v.setAttribute('data-content', '\u{2304}');
    indexNumber1 = 35;
}
})
 })