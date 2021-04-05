function clickLi(val) {
	for(var i=1;i<4;i++){
		document.getElementById('li'+i).style.borderColor = '';
	}
	document.getElementById('li'+val).style.borderColor = '#cddc39';
	document.getElementById('main-image').src = './img/'+val+'.jpg';
}

var navLi = document.querySelectorAll('.nav li');
// navLi[1].style.backgroundColor = '#eee';
function clickNav(val){
	navLi.forEach(element=>{
		element.style.backgroundColor = null;
	})
	document.getElementById(val).style.backgroundColor = '#eee';
}