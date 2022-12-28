const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')
const item5 = document.querySelector('.item5')
const item6 = document.querySelector('.item6')
const item7 = document.querySelector('.item7')
let number = 1;
function random (){
    if(number >9){
        number = 0;
    }
    if(number== 0){
        item1.style.display= 'block'
        item2.style.display= 'none'
        item3.style.display= 'block'
        item4.style.display= 'block'
        item5.style.display= 'block'
        item6.style.display= 'block'
        item7.style.display= 'block'
    }
    else if(number == 1){
    item5.style.display= 'block'
    item6.style.display= 'block'
    item1.style.display= 'none'
    item2.style.display= 'none'
    item3.style.display= 'none'
    item4.style.display= 'none'
    item7.style.display= 'none'
    }
    else if(number == 2){
    item4.style.display= 'none'
    item6.style.display= 'none'
    item1.style.display= 'block'
    item2.style.display= 'block'
    item3.style.display= 'block'
    item5.style.display= 'block'
    item7.style.display= 'block'
    }
    else if(number == 3){
    item5.style.display= 'none'
    item6.style.display= 'none'
    item1.style.display= 'block'
    item2.style.display= 'block'
    item3.style.display= 'block'
    item4.style.display= 'block'
    item7.style.display= 'block'
    }
    else if(number == 4){
    item1.style.display= 'none'
    item3.style.display= 'none'
    item5.style.display= 'none'
    item2.style.display= 'block'
    item4.style.display= 'block'
    item6.style.display= 'block'
    item7.style.display= 'block'
    }
    else if(number == 5){
    item5.style.display= 'none'
    item7.style.display= 'none'
    item1.style.display= 'block'
    item2.style.display= 'block'
    item3.style.display= 'block'
    item4.style.display= 'block'
    item6.style.display= 'block'
    }
    else if(number == 6){
    item7.style.display= 'none'
    item1.style.display= 'block'
    item2.style.display= 'block'
    item3.style.display= 'block'
    item4.style.display= 'block'
    item5.style.display= 'block'
    item6.style.display= 'block'
    }
    else if(number == 7){
    item1.style.display= 'block'
    item4.style.display= 'block'
    item7.style.display= 'block'
    item2.style.display= 'none'
    item3.style.display= 'none'
    item5.style.display= 'none'
    item6.style.display= 'none'
    }
    else if(number == 8){
    item1.style.display= 'block'
    item2.style.display= 'block'
    item3.style.display= 'block'
    item4.style.display= 'block'
    item5.style.display= 'block'
    item6.style.display= 'block'
    item7.style.display= 'block'
    }
    else if(number == 9){
    item1.style.display= 'block'
    item2.style.display= 'block'
    item3.style.display= 'block'
    item4.style.display= 'block'
    item5.style.display= 'none'
    item6.style.display= 'block'
    item7.style.display= 'block'
    }
    number++;
}
setInterval(random, 1000)



