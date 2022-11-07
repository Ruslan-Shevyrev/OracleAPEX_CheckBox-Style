$('input[type="radio"]').click(function(){    
    
    if ($('input[type=radio]:checked').length * 2 == $('input[type=radio]').length) {
        $('#NEXT_PAGE').removeClass("apex_disabled");
    }
    
    if ($(this).val() == 0) {
        apex.server.process(
            'URL_DEVIATION',                           
            {
                x01: $(this).prop('name')
            }, 
            {
                success: function (pData)
                {           
                    apex.navigation.redirect(pData);
                },
                dataType: "text"                     
            }
        );
    } else {
        apex.server.process(
            'ANSWER_YES',                            
            {
                x01: $(this).prop('name'),
            },
            {
                success: function (request) {  
                    if( request == 200){					 
                            
                    }
                    else{
                        apex.message.clearErrors();
                        apex.message.showErrors([ 
                            {
                                type:       "error",
                                location:   "page",
                                message:    request,
                                unsafe:     false
                            }
                        ]);

                    }
                }, 
                error: function(pjqXHR, pTextStatus, pErrorThrown) {
                    alert("error: "+pErrorThrown);       
                },
                dataType: "text",
                async: false                         
            }
        ); 
    };
});