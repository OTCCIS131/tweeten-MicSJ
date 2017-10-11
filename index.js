// let btns = Array.from(document.getElementsByClassName('btn-inc'))

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         let currentCount = btn.nextSibling
//         let newCount = parseInt(currentCount.textContent) + 1

//         btn.nextSibling.textContent = ` ${newCount} `
//     })
// })

$(function () {
    //Incrementing like button
    $('.btn-inc').click(function (event) {
        let currentCount = $(this).next().text()
        newCount = parseInt(currentCount) + 1
        $(this).next().text(newCount)
    })

    $('.tweets').submit(function (event) {
        event.preventDefault()

        let newTweet = $("[name=newTweet]", $(this))
        let tweet = newTweet.val()

        //ends function
        if (tweet.trim() == '') return

        let newElement = ($(".original").clone()).insertBefore($(".orginal"))

        // newElement.text(newElement.words)

        // let newElement = $("<div>")
        // newElement.addClass('panel panel-default')
        // newElement.text(tweet)
        // $(".orginal").append(newElement)

        newTweet = newTweet.val(' ')
        // let tweetClone = $('.original').clone()

    })
});