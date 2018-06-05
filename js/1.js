// JavaScript Document

$("#console-task").click(function(){
	console.log('Я вывел в консоль текст');
});


$("#alert-task").click(function(){
    alert("Я вызвал алерт");
});

$("#redirect-task").click(function(){
	var url = "https://www.google.com.ua/";
	$(location).attr('href',url);
})


