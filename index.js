const card = document.querySelectorAll(" .card")
card.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (e.classList.contains("close")) {} else {
            card.forEach((d) => {
                d.classList.contains('close') ? d.classList.remove('close') : ''
            })
            e.classList.add('close')
        }
    })
})