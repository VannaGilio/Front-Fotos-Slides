'use strict'

async function imagensSlide(){

    const url = `http://localhost:8080/fotos`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function mostrarSlide (imagens, tempo = 3000){
    let inicio = 0

    const fotoAPI = document.getElementById('imagens')
    const legendaAPI = document.getElementById('legenda')

    function mudarFoto( ){
        const foto =  imagens[inicio]
        fotoAPI.src = foto.imagem
        legendaAPI.textContent = foto.legenda

        inicio++
        if (inicio >= imagens.length) {
        inicio = 0

        }
    }
    mudarFoto()
    setInterval(mudarFoto, tempo)
}
imagensSlide().then(imagens => {
    mostrarSlide(imagens, 3000)
})