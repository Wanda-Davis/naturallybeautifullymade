<?php

	$connect = mysqli_connect('localhost', 'root', 'mypass123', 'nbushopping_cart');
	$query = 'SELECT * FROM producs ORDER by id ASC';
	$result = mysqli_query($connect, $query);
	
	
	if ($result){
		if(mysqli_num_rows($result)>0){
			while($product = mysqli_fetch_assoc($result)){
				print_r($product);
			}
		}
	}
	
	 
	