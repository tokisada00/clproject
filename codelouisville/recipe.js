$(document).ready(function(){
	$(".row").hide();
    $("button").click(function(){
		$("h2").hide();
        $(" #recipe1").fadeIn();
        $(" #recipe2").fadeIn("slow");
        $(" #recipe3").fadeIn(3000);
    });
});
