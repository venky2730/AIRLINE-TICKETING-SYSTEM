<?php
	$Name = $_POST['name'];
	
	$PhoneNo = $_POST['number'];
	$Email = $_POST['mail'];
    $Password = $_POST['password']

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into airlineslogin(Name,number, email, password) values(?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $Name,$PhoneNo,$Email, $Password);
		$execval = $stmt->execute();
		echo $execval;
		echo "You signed in successfully...";
		
		$stmt->close();
		$conn->close();
	}
?>