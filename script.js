
		function addComment() {
		
			if( $('#user_name').val().length == 0 ) {
				alert('Please Enter a User Name');
				return false;
			}
		
			requestData = $('#last_displayed_chat_id,#user_name,#user_comment').serialize();
			$.ajax({
				url: "http://localhost/groupChat/server.php",
				type: "get", 
				data: requestData, 
				dataType: "json", 
				success: function(response, status, http ) {
					$.each( response , function( index , item ){
						$('#chat_box').val( $('#chat_box').val() + item.user_name + ' : ' + item.user_comment + '\n' );
						$('#last_displayed_chat_id').val( item.chat_id );
					});	
					$('#user_comment').val('');
				},
				error : function(http, status, error) {
					alert('Some Error Occured: ' + error);
				}
			});
			
			return false;
		
		}
		
		function updateChat() {
		
			$.ajax({
				url: "http://localhost/groupChat/server.php",
				type: "get", 
				data: "last_displayed_chat_id="+$('#last_displayed_chat_id').val(), 
				dataType: "json", 
				success: function(response, status, http ) {
					$.each(response, function(index, item){
						$('#chat_box').val( $('#chat_box').val() + item.user_name + ' : ' + item.user_comment + '\n' );
						$('#last_displayed_chat_id').val( item.chat_id );
					});	
				},
				error: function(http, status, error) {
					alert('Some Error Occured : ' + error);
				}
			});
		
		}
		
		setInterval(updateChat, 4000);