let heart = document.getElementsByClassName('like')
let moins = document.getElementsByClassName('minus-btn')
let plus = document.getElementsByClassName('plus-btn')
let quantity = document.getElementsByClassName('Quant')
let item = document.querySelectorAll('.delete')
let prix = document.getElementsByClassName('price')


calcul()

for (let i = 0; i < heart.length; i++) {

    heart[i].addEventListener("click", function () {
        let color = document.getElementsByClassName('like')[i].style.color
        if (color == "red") {
            document.getElementsByClassName('like')[i].style.color = "black"
        } else { document.getElementsByClassName('like')[i].style.color = "red" }
    })
}

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        quantity[i].value++
        calcul()
    })
}

for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener("click", function () {
        if (quantity[i].value>0){
        quantity[i].value--}
        calcul()
    })
}


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        item[i].parentElement.remove()
        calcul()
    })
}


function calcul(){
    let result=0
    for (let i = 0; i < prix.length; i++) {
        result = result + ((prix[i].innerHTML) * (quantity[i].value))
    }
    document.getElementById('finalPrice').value = result
}