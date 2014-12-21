function change(){
	var vol = document.getElementById('myTextField').value;

	if(vol.length==0){ //check if input exists
		document.getElementById("updateDiv").innerHTML = 'Write Volume Please.';
		return;
	}
	else if(vol <= 0){ //must be a positive volume
		document.getElementById("updateDiv").innerHTML = 'Volume must be greater than 0';
		return;
	}
	else if(isNaN(vol)){ //restrict to number
		document.getElementById("updateDiv").innerHTML = 'Please enter a number';
		return;
	}
	
	cube(vol);
	sphere(vol); 
	cylinder(vol);
	cone(vol);
}

function cube(vol){ //calculate cube volume
	var a = Math.pow(vol,1/3).toFixed(2);
	document.getElementById("updateDiv").innerHTML = 'Cube: '+a+'m width, '+a+'m high, '+a+'m tall'+'<br>';
}

function sphere(vol){ //calculate sphere volume
	var r = Math.pow(vol*3/(4*Math.PI),1/3).toFixed(2);
	document.getElementById("updateDiv").innerHTML += 'Sphere: '+r+'m radius'+'<br>';
}

function cylinder(vol){ //calculate cylinder volume
	var h = Math.pow(vol/Math.PI,1/3).toFixed(2);
	var d = 2*Math.pow(vol/(Math.PI*h),1/2).toFixed(2)
	document.getElementById("updateDiv").innerHTML += 'Cylinder: '+h+'m tall, Diameter of '+d+'m'+'<br>';
}

function cone(vol){ //calculate cone volume
	var h = Math.pow(vol*3/Math.PI,1/3).toFixed(2);
	var r = Math.pow(vol*3/(Math.PI*h),1/2).toFixed(2)
	document.getElementById("updateDiv").innerHTML += 'Cone: '+h+'m tall, '+r+'m radius'+'<br>';
}

function checkSubmit(e){ //enable submit with enter key
   if(e && e.keyCode == 13)
   {
      document.getElementById('byBtn').click();
   }
}