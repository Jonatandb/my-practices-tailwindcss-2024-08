const darkCheck = document.getElementById("darkCheck")

darkCheck.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})