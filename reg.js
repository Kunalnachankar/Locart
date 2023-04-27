

	var popup_login = document.getElementById('popup_form');
	var close = document.getElementById('close_btn');

	window.addEventListener("load", function(){

		setTimeout(function(){

			popup_login.classList.add('anyname');

		 },3000) // 1 secon is 1000ms so 5 second is = to 5000ms.


	}) // 5 second popup are working count our time and check it now 
	// create close btn event
	close.addEventListener("click", function(){
			popup_login.classList.remove('anyname');
		 }) //friends create 5 second popup form you are check for pouse video check the and after i am close btn is work properly 
	// now add transition


