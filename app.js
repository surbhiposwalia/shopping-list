$(document).ready(function() {
    $(document).submit(function(event) {
        // $("ul").append("<li>" 
        // 	+ $("input").val()
        // 	+"<Button>check</Button>"+"Button>delete</Button>"+
        // 	"</li>");
        //.append()
        //.append()
        // .addClass("shopping-list shopping-item")
        //.append("</li>");
        $("ul").append(
            $("<li/>").append(
                $("<span/>").addClass("shopping-item").append(
                    $("input").val()
                )
            ).append(
                $("<div/>").addClass("shopping-item-controls")
                .append(
                    $("<Button/>").addClass("shopping-item-toggle").append(
                        $("<span/>").addClass("button-label").append("check")
                    )
                ).append(
                    $("<Button/>").addClass("shopping-item-delete").append(
                        $("<span/>").addClass("button-label").append("delete")
                    )
                )
            )

        );

        event.preventDefault();
        $("input").val("");
    });

    // $(".shopping-item-delete").on('click','li',function(event){
    // 	this.remove();9
    // });


    $(document).on('click','.shopping-item-delete', function(event) {
        $(this).closest('li').remove();

    });
    $(document).on('click','.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    });


});
