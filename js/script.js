// window.onload = function() {
// 	var buttonTags = document.getElementsByTagName("button"); 
// 	for ( var i = 0; i <= buttonTags.length - 1; i++ ) {
// 		var buttonTag = buttonTags[i];
// 		buttonTag.onclick = function(){ 
// 			var imageName = this.getAttribute("data"); // var imageName = $(this).attr("data");
// 			var imgs = document.getElementsByTagName("img");
// 			var img = imgs[0];
// 			// dấu cộng dùng cho 2 trường hợp
// 			// 1. cộng số học vd: 3 + 5; //8;
// 			// 2. dùng để nối chuỗi vd: "hello" + "word" // helloword

// 			img.src = "img/" + imageName + ".png";

//             // remove active tất cả các button
// 			 removeActiveButton(buttonTags); 
// 			//active button được click
// 			this.classList.add("active");
// 			// console.log(this.classList);
// 		}
// 	}
// }
// 	function removeActiveButton(buttonTags) {
// 		for ( var i = 0; i <= buttonTags.length - 1; i++ ) {
// 			var buttonTag = buttonTags[i];
// 			buttonTag.classList.remove("active");
// 	}
// }




// viết bằng jquenry
// $("button").click(function(event) {
// 	/* Act on the event */
// 	var datas = $(this).attr('data');
	
// 	var imgs = "img/"+ datas +".png";
// 	$("img").attr('src', imgs);
// 	$(this).addClass('active');
// 	$(this).siblings('button').removeClass('active');
// });

// var buttonTags = document.getElementsByTagName("button");
// // lấy 5 nut button gán vào biến buttonTags
// // buttonTags là 1 arry chứa nhiều phần tử có 5 phần tử mỗi phần tủ là 1 button
// // for duyệt từng button 
// for ( var  i = 0; i<= buttonTags.length - 1; i++ ){
// 	var buttonTag = buttonTags[i]; // lấy từng phần tử ra phần tử đầu tiên là 0
// 	buttonTag.onclick = function() { // click từng phần tử button
// 		var imgName = this.getAttribute("data");
// 		var imgs = document.getElementsByTagName("img");
// 		var img = imgs[0];
// 		img.src = "img/"+ imgName +".png";
// 		removeActiveButtonTag(buttonTags);
// 		this.classList.add("active");


// 	}
// }

// function removeActiveButtonTag(buttonTags) {
// 	for (var  i = 0; i<= buttonTags.length - 1; i++){
// 		var buttonTag = buttonTags[i];
// 		buttonTag.classList.remove("active");

// 	}
		
	
// }

var buttonTags = document.getElementsByTagName("button")
for(var i = 0; i <= buttonTags.length - 1; i++){
	var buttonTag = buttonTags[i];
	buttonTag.onclick = function() {
		var imgName = this.getAttribute("data");
		var imgs = document.getElementsByTagName("img");
		var img = imgs[0];
		img.src = "img/"+imgName+".png";
		removeActiveButtonTag(buttonTags);
		this.classList.add("active");
	}
}

function removeActiveButtonTag(buttonTags) {
	for(var i = 0; i <= buttonTags.length - 1; i++){
	var buttonTag = buttonTags[i];
	buttonTag.classList.remove("active");

}
}
