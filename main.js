document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scroll-button")

  scrollButton.addEventListener("click", function () {
    const targetElement = document.querySelector("#cards")
    const targetPosition = targetElement.offsetTop

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  })
})
