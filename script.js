function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/PontoDoce.png")
  } else {
    // se tiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/PontoDoce2.png")
  }
  document.document.documentElement("DOMContentLoaded", function () {
    const iframe = document.getElementById("spotifyIframe").contentWindow
  })
}
