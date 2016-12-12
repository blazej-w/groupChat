<?php

 	// fetching the value of last_displayed_chat_id
	$data = $_REQUEST;
	$last_displayed_chat_id = $data['last_displayed_chat_id']

	// connecting to mysql server
	$con = mysqli_connect( "localhost", "root", "coderslab", "group_chat");

	$select = "SELECT *
					FROM chats
					WHERE chat_id > '".$last_displayed_chat_id."'
			";

	$result = mysqli_query($con, $select);

	$arr = array();
	$row_count = mysql_num_rows($result);

	if($row_count > 0) 
	{
		while ($row = mysqli_fetch_array($result)) 
		{
			array_push($arr, $row);
		}
	}


	// closing the mysql connection
	$mysqli_close($con);

	// returning the response as JSON
	echo json_encode($arr);
