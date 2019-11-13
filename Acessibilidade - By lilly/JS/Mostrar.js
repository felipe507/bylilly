function verificarurl(){
    var url = window.location;
    url = url.toString()
    url = url.split(".");
    alert(url[1]);
    alert(document.referrer);

}




function montarTamanho(){
    var table = document.querySelector('#tamanho')
    var objeto = sapatilhas()
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    var thTamanho = document.createElement('th')
    var thEstoque = document.createElement('th')
    thTamanho.innerHTML = "Tamanho"
    thEstoque.innerHTML = "Estoque"
    var tbody = document.createElement('tbody')
    for(let i = 0;i<objeto.tam.length;i++){
        var trb = document.createElement('tr')
        var tdT = document.createElement('td')
        var tdE = document.createElement('td')
        tdT.innerHTML = objeto.tam[i].tamanho
        tdE.innerHTML = objeto.tam[i].estoque
        trb.appendChild(tdT)
        trb.appendChild(tdE)
        tbody.appendChild(trb)
    }
    tr.appendChild(thTamanho)
    tr.appendChild(thEstoque)
    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)
    var pathname = document.referrer
    if( document['referrer'].value == 'file:///C:/Users/T-Gamer/Desktop/Acessibilidade/Site/Site/sapatilha.html' ) { 
        console.log("okay")
    }
}

function sapatilhas(){
    return {
        tam:[
            {estoque:"Disponivel",tamanho:"35"},
            {estoque:"Disponivel",tamanho:"36"},
            {estoque:"Disponivel",tamanho:"37"},
            {estoque:"Indisponivel",tamanho:"38"},
            {estoque:"Disponivel",tamanho:"39"}
        ]
    }
}