$(document).ready(function () {
  // Display current day
  $("#currentDay").text(dayjs().format("DD, MMMM YYYY"));

  // Function to update colours based on past, present and future
  function updateColors() {
    //loop through each time block
    $(".time-block").each(function () {
      // get the hour of the time block
      const hourBlock = parseInt($(this).attr("id").split("-")[1]);

      //compare with the current hour
      if (hourBlock < currentHour) {
        //past
        $(this).removeClass("presetn future").addClass("past");
      } else if (blockHour === currentHour) {
        // Present
        $(this).removeClass("past future").addClass("present");
      } else {
        // Future
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  // Set interval to update colors every minute
  setInterval(updateColors, 60000);

  // Initial color update
  updateColors();

  // Event listener for save button
  $(".saveBtn").on("click", function () {
    // Your logic to save events to local storage
  });
});
