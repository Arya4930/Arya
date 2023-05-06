copycontents = ['! Arya#3856']
const testing = document.getElementById('sussy-boi')

function myFunction2() {testing.style.opacity = 0;}
function myFunction() {
    navigator.clipboard.writeText(copycontents[0]);
    console.log(copycontents[0])
    testing.style.opacity = 1;
    setTimeout(myFunction2, 1500)
}

function imageclick() {
    window.location.href = "https://github.com/Arya4930"
}