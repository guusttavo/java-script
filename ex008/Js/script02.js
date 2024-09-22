function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/crianca-m.png')
                document.body.style.background = 'rgb(70, 142, 236)'
            } else if(idade < 21){
                //Joven
                img.setAttribute('src', 'imagens/jovem-m.png')
                document.body.style.background = 'rgb(70, 142, 236)'
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
                document.body.style.background = 'rgb(70, 142, 236)'
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
                document.body.style.background = 'rgb(70, 142, 236)'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/crianca-f.png')
                document.body.style.background = 'rgb(231, 147, 178)'
            } else if(idade < 21){
                //Joven
                img.setAttribute('src', 'imagens/jovem-f.png')
                document.body.style.background = 'rgb(231, 147, 178)'
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
                document.body.style.background = 'rgb(231, 147, 178)'
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
                document.body.style.background = 'rgb(231, 147, 178)'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}