$(document).ready(function(){
	var items=[];
	$('#js-shopping-list-form').submit(function(event){
		items.push($('#shopping-list-entry').val());
		
		//console.log($("#shopping-list-entry").val());
event.preventDefault();
		$('ul').append(
			"<li>"
			+"<span class='shopping-item'>"
			+$('#shopping-list-entry').val()
			+"</span>"
			+"<div class='shopping-item-controls'>"
			+"<button class='shopping-item-toggle'>"
			+"<span class='button-label'>"
			+"check"
			+"</span>"
			+"</button>"
			+" "
			+"<button class='shopping-item-delete'>"
			+"<span class='button-label'>"
			+"delete"
			+"</span>"
			+"</button>"
			+"</div>"
			+"</li>");
		$('#shopping-list-entry').val("");
		
	});
	

$('.shopping-list').on('click','.shopping-item-toggle',function(event) {
		//console.log("we pushed check");
		//event.stopPropagation();
		$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
	})
$('.shopping-list').on('click','.shopping-item-delete',function(event) {
		//console.log("we pushed check");
		//event.stopPropagation();
		$(this).closest("li").remove();
	})
$('.container').on('click','.for_check',function(event) {
		//console.log("we pushed check");
		//event.stopPropagation();
		$('.shopping-item').closest('li').hide();
		$('.shopping-item__checked').closest('li').show();
		
	})
$('.container').on('click','.for_uncheck',function(event) {
		console.log("we pushed uncheck");
		//event.stopPropagation();
		$('.shopping-item').closest('li').show();
		$('.shopping-item__checked').closest('li').hide();	
		
	});
$('.extra-stuff').on('click', '#search-button', function(event) {
		var searchString = $('#search-shopping-list').val();
		var enteredItem = $('.shopping-item').text();
		//var sea=enteredItem.search(searchString);
$( "span:contains(searchString)").closest('li').hide();
		console.log(items);
		// console.log(searchString);
		// console.log(enteredItem);
		// if (searchString == enteredItem)
		// {
		// 	console.log("its a go!");
		// }
		// $('li').hide();
		
		//$('li').find(searchString).show();

		
	})

});




