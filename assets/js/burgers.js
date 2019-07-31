$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");

        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    
});