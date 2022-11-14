$('input[type="radio"]').click(function(){

	if ($(this).val() == 0){ 
		apex.server.process(
			'ANSWER_YES',
			{
				x01: $(this).prop('name')
			},
			{
				success: function (pData)
				{
					//Your code here
				},
				dataType: "text"
			});
	} else {
		apex.server.process(
			'ANSWER_NO',
			{
				x01: $(this).prop('name')
			},
			{
				success: function (pData)
				{
					//Your code here
				},
				dataType: "text"
			});
    };
});