const icon = document.getElementById("theme-toogler")

let darkTheme = false


icon.addEventListener("click", () => {
  darkTheme = !darkTheme
  icon.firstChild.setAttribute("name", `${darkTheme ? "sunny" : "moon"
    }-outline`)
  const body = document.getElementById("body")
  darkTheme ? body.classList.add("dark-mode") : body.classList.remove("dark-mode")
  body.style.transition = "All .5s ease-in-out"
})

