// let btns = Array.from(document.getElementsByClassName('btn-inc'))

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         let currentCount = btn.nextSibling
//         let newCount = parseInt(currentCount.textContent) + 1

//         btn.nextSibling.textContent = ` ${newCount} `
//     })
// })

$(function(){
    //Incrementing like button
    $('.btn-inc').click(function(event){
        let currentCount = $(this).next().text()
        newCount = parseInt(currentCount) + 1
        $(this).next().text(newCount)
    })

    $('.tweets').submit(function(e){
        let tweet = $(this).text()
        
    })
});