const phoneNumber = document.querySelector(".phone__number")
const soundEl = document.querySelector(".sound")

const numbers = [
    "+998 90 813 64 03",
    "+998 91 777 88 12",
    "+998 93 612 34 56",
    "+998 94 709 21 90",
    "+998 95 800 11 22",
    "+998 97 999 00 33",
    "+998 88 123 45 67",
    "+998 33 654 32 10",
    "+998 93 101 20 30",
    "+998 91 232 76 54",
    "+998 90 111 22 33" 
]

function randomPhoneNumber() {
    const interval = setInterval(() => {
        let randomNumber = Math.floor( Math.random() * numbers.length)
        phoneNumber.innerHTML = numbers[randomNumber]
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        soundEl.play()
    }, 3000);
}