const thankYou = document.querySelector('.thank-you')
const button = document.querySelectorAll('.btn')
const submitButton = document.querySelector('.submit-btn')
const component = document.querySelector('.component')


button[0].addEventListener('click', function() {
    button[0].classList.add('active')
})

for (const btn of button) {
    btn.addEventListener('click', function() {
        btn.classList.add('active')
    })
}

submitButton.addEventListener('click', function() {
    component.style.display = 'none'
    thankYou.style.display = 'block'
})