$(function () {
    $(".eat-btn").on("click", function (event) {
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
      // Send the PUT request.
      $.ajax("/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function () {
          console.log("changed devoured to", devouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})