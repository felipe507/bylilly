
$(function () {

    $('#bylillyfrom').validate({
        debug:true,
        submitHandler: function(form){
          form.submit();
        },
        invalidHandler: function(event, validator) {
          if($('.errorMsgContainer')){
            $('.errorMsgContainer')
                .remove();
          }
          
          var errors = validator.numberOfInvalids();
          if (errors) {
              
            var message = `
            <div class='errorMsgContainer'>
                <h2 class='errorHeader'>Por favor corrija os seguintes campos:
                </h2>
                <ol>
                    ${
                        validator.errorList
                        .map( item => {
                            return `<li>${item.message}</li>`
                        })
                        .join('')
                    }
                </ol>
            </div>
            `
            
            $(validator.settings.errorContainer)
                .prepend(message);
            $(validator.errorContainer)
                .show();
          } else {
            $('.errorMsgContainer')
                .remove();
            $("div.error")
                .hide();
          }
        },
        ignore: ".ignore",
        rules: {
          //simple rule, converted to {required:true}          fname0: "required",
          //compound rule
          nome: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email:true      
          },
          telefone: {
            required: true,
            minlength: 11,
            maxlength: 12,
          },
          mensagem: {
            required: true,
            minlength: 5,
          }
        },
        messages: {
          nome: {
             required: "Por favor informe o seu nome",
             minlength: "No minimo 3 digitos"
          },
          telefone: {
            required: "Nos precisamos do seu telefone para entrar em contato",
            minlength: "No minimo 11 digitos",
            maxlength: "No maximo 12 digitos"
          },
          email: {
            required: "Nos precisamos do seu email para entrar em contato",
            email: "Seu email deve está no formato nome@dominio.com.br"
          },
          mensagem: {
            required: "Informe o assunto",
            minlength: "No minimo 5 digitos"
          }
       },
        errorPlacement: function(error, element){
            $(element)
                .prev()
                .prev()
                .addClass("error-indicator");     
            $(error).insertBefore($(element));
        },
        groups: {
          sublevel: "sublevel-free sublevel-pro sublevel-premiere"  
        },
        errorContainer:"#bylillyfrom",
        showErrors: function(errorMap, errorList) {
          
          this.defaultShowErrors();
          $("input.error")
            .on("focus", function(){
                $(this)
                    .prev()
                    .addClass("show-error")
            })
        $("input.error")
            .on("focusout", function(){
                $(this)
                    .prev()
                    .removeClass("show-error")
            })
        }
        
        
      })
})
