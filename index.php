<!DOCTYPE html>
<html>
<head>
	<title>Coming Soon - Daniella Taylor</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
<link href="https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:300|Vollkorn" rel="stylesheet">
</head>
<body>
	

	<?php 

		$greetings = [
			0 => "You're a little early",
			1 => "A little too eager",
			2 => "Pleased to meet you",
			3 => "Coming Soon"
		];

		$random = array_rand($greetings, 1);
		$randomGreeting = strtoupper($greetings[$random]);


	?>

	<div class="main-wrapper">

		<div class="content">
			<h1><?php echo $randomGreeting; ?></h1>
			<p>Feel free to say <a href="mailto:hello@daniellataylor.co.uk">hello</a></p>
		</div>
	</div>

</body>
</html>