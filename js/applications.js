$(document).ready(function() {

  console.log("File linked");
  $(".table-hide").click(function() {
    var selectedTable = $(this).attr("data-table-for");
    $("#" + selectedTable).find("tbody").toggle();

    var toggleButton;
    if ($("#" + selectedTable).find("tbody").is(":visible")) {
      toggleButton = "Hide"
    } else {
      toggleButton = "Show"
    }
    $(this).html(toggleButton);
  });

});
