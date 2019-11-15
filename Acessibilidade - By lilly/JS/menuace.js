window.onload = vai

function vai(){
    let fontSize = 10
    const setAltoContraste = () => {
        $('*').css({ "background-color" : "white", "color": "black" })
        $('input, textarea').css({ "background-color" : "black", "color": "white" })
        $('h1, h2, h3, h4, h5').css({ "border-bottom" : "1px solid black"})
        $('.ponteiro').css({ "background-color": "black" })
        $('.texto_animado').css({ "filter" : "invert(100%)"})
        localStorage.setItem("altoContraste", "true")
    }
    const removeAltoConstraste = () => {
        console.log("remove")
        $('*').removeAttr("style")
        localStorage.clear()
    }
    
    $('#AltoConstrate')
        .click(() => {
            if(localStorage.getItem('altoContraste') == null)
                return setAltoContraste()
            removeAltoConstraste()
        })
    
    $("#FontMaior").click(() =>{
        fontSize += 1
        $("body").css({ "font-size" : `${fontSize * 10 }%`})
    })  
    
    $("#FontMenor").click(() =>{
        fontSize -= 1
        $("body").css({ "font-size" : `${fontSize * 10 }%`})
        
    })  
    
    $(document).ready(() =>{
        if(localStorage.getItem('altoContraste') != null)
            setAltoContraste()
    })
}