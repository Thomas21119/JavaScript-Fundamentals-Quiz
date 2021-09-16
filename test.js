var fname = document.getElementById("fname");

var ptag = document.getElementById('ptag')

var submitEl = $('#submit')
submitEl.on('click', submit)


function submit(event) {
    event.preventDefault()
    localStorage.setItem("fname", fname.value)
    ptag.textContent = localStorage.getItem("fname")
}
