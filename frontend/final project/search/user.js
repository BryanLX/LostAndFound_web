$(function(){

	var $signin_email = $('#signin-email');
	var $signin_pass = $('#signin-password');
	var current_user = "";



	// $('#log').on('click',function(){
	// 	$self = $(this);

	// 	var input = {
	// 		email : $signin_email.val(),
	// 		password : $signin_pass.val()
	// 	};
	// 	$.ajax({
	// 		type: "post",
	// 		url: "http://localhost:3000/user/login",
	// 		data: input,
	// 		success: function(data){
	// 			if(data == "0"){
	// 				alert("No such user");
	// 				return;
	// 			}
	// 			if(data == "1"){
	// 				alert("login failed, please check the username and password");
	// 				return;
	// 			}
	// 			else{
	// 				current_user = data;
	// 				alert(current_user + " login successful!");
	// 				self.location.href = "profile.html?";
	// 			}
	// 		},
	// 		error: function(){
	// 			alert("error logging in");
	// 		}
	// 	});
	// });

	// var $signup_email = $('#signup-email');
	// var $signup_pass = $('#signup-password');
	// var $signup_first = $('#signup-first');
	// var $signup_last = $('#signup-last');


	// $('#Started').on('click',function(){
	// 	$self = $(this);

	// 	var input = {
	// 		username : ($signup_first.val()) + " " + ($signup_last.val()),
	// 		email : $signup_email.val(),
	// 		password : $signup_pass.val()
	// 	};
	// 	$.ajax({
	// 		type: "post",
	// 		url: "http://localhost:3000/user/signup",
	// 		data: input,
	// 		success: function(data){
	// 			if(!data){
	// 				alert("signup failed");
	// 				return;
	// 			}
	// 			else{
	// 				alert("signup successful!");
	// 				self.location.href = "profile.html";
	// 			}
	// 		},
	// 		error: function(){
	// 			alert("error signing up");
	// 		}
	// 	});
	// });


	


});