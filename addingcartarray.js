<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet">
    <title>NBU Urban Organic E-commerce</title>
    <link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="products.html">
	<script src="https://kit.fontawesome.com/332a215f17.js" crossorigin="anonymous"></script>
	
</head>


<body>


<!-- start list of Shopping Cart items using JavaScript 
<!-- reminder...need to create a database that will push those list of items into the unorder list <ul id="product">  -->
<script>
<!-- start Stage1 create array of items -->
	var items =[
		['images/img1.jpg',29.99,'Product 1' 'descr'],
		['images/img2.jpg',19.99,'Product 2' 'descr'],
		['images/img3.jpg',17.99,'Product 3' 'descr'],
		['images/img4.jpg',30.99,'Product 4' 'descr'],
		];
<!-- end Stage1 create array of items -->		
	
<!-- start Stage2 push array of items by grabbing the id -->
	function run() {
		var main = document.getElementById('products');
	
	// all elements to be added
	
		var ele = document.createElement('li');
		var pic = document.createElement('img');
		var price = document.createElement('h1');
		var descr = document.createElement('h2');
		var add = document.createElement('button');
		var typeBox = document.createElement('input');
		
	// push elements into HTML (basically adding items)
		main.appendChild(ele);
		ele.appendChild(pic);
		ele.appendChild(price);
		ele.appendChild(descr);
		ele.appendChild(add);
		ele.appendChild(typeBox);
		
	// edit pushed elements info from array (grab the information from the array, attach it to the push elements that way it will have the image that is there.)
	
	pic.innerHTML = items[0][0];
	price.innerHTML = '$' + items[0][1];
	descr.innerHTML = items[0][2];
	add.innerHTML = 'add';
	typeBox.type = 'number';
	}
</script>
<body onload="run()">
	<ul id="products">
	
	</ul>
<!-- end list of Shopping Cart items using JavaScript -->


</body>
</html>