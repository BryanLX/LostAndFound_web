// $(function(){

// 	var $location = $('#searchlocation');
// 	var $name = $('#searchname');
// 	var $color = $('#searchcolor');


// 	$('#foundItem').on('click',function(){
// 		var location_in = JSON.parse($location.val());
// 		var x = parseInt(location_in[0]);
// 		var y = parseInt(location_in[1]);
// 		var input = {
// 			"location" : [x, y],
// 			"name" : $name.val(),
// 			"color" : $color.val()
// 		};
// 		$.ajax({
// 			type: "post",
// 			url: "http://localhost:3000/item/search",
// 			data: input,
// 			success: function(data){
// 				alert("Data: " + data[0].name + "\n success " );
// 			},
// 			error: function(){
// 				alert("error searching");
// 			}
// 		});


// 	});

// 	var $ulocation = $('#uploadLocation');
// 	var $uname = $('#uploadName');
// 	var $ucolor = $('#uploadColor');
// 	var $uimage = $('#uploadImage');

// 	// upload
// 	$('#Upload').on('click',function(){
// 		var location_in = JSON.parse($ulocation.val());
// 		var x = parseInt(location_in[0]);
// 		var y = parseInt(location_in[1]);
// 		var input = {
// 			"location" : [x, y],
// 			"name" : $uname.val(),
// 			"color" : $ucolor.val(),
// 			"img" : $uimage.val()
// 		};
// 		$.ajax({
// 			type: "post",
// 			url: "http://localhost:3000/item/upload",
// 			data: input,
// 			success: function(data){
// 				alert("Data: " + data.name + "\n success " );
// 			},
// 			error: function(status){
// 				alert("error uploading" + status);
// 			}
// 		});


// 	});


// });