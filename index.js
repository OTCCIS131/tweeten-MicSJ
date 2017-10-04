// let btns = Array.from(document.getElementsByClassName('btn-inc'))

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         let currentCount = btn.nextSibling
//         let newCount = parseInt(currentCount.textContent) + 1

//         btn.nextSibling.textContent = ` ${newCount} `
//     })
// })

$(function(){
    $('.btn-inc').click(function(event){
        let currentCount = $(this).next().text()
        let newCount = parseInt(currentCount.text()) + 1
        currentCount.text(currentCount.replacewith(newCount))
    })
});