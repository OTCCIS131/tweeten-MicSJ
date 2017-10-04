let btns = Array.from(document.getElementsByClassName('btn-inc'))

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let currentCount = btn.nextSibling
        let newCount = parseInt(currentCount.textContent) + 1

        btn.nextSibling.textContent = ` ${newCount} `
    })
})