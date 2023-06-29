$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('#formulario').submit(function(event){
        event.preventDefault()

        alert('mensagem enviada!')

        this.reset()
    })
})