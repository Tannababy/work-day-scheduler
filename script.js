$(document).ready(function () {
  console.log("Script executed");
  // Display current day
  $("#currentDay").text(dayjs().format("DD, MMMM YYYY"));

  // Generate time blocks
  for (let hour = 1; hour <= 12; hour++) {
    $(".container").append(`
    
          <div class="time-block" id="hour-${hour}">
                 <p class="hour">${hour}</p>
                 <textarea name=""cols="30" rows="10"></textarea>
                 <button class="saveBtn"><i class="fas fa-save"></i></button>
              </div>
          </div>
      
        `);
  }

  // Function to update colours based on past, present and future
  function updateColors() {
    console.log("Updating colors");
    // Get the current hour
    const currentHour = dayjs().hour();

    //loop through each time block
    $(".time-block").each(function () {
      // get the hour of the time block
      const hourBlock = parseInt($(this).attr("id").split("-")[1]);

      //compare with the current hour
      if (hourBlock < currentHour) {
        //past
        $(this).removeClass("present future").addClass("past");
      } else if (hourBlock === currentHour) {
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
    // Get the values from the corresponding textarea and its parent time-block
    const eventText = $(this).siblings("textarea").val();
    const hourBlock = $(this).parent(".time-block").attr("id");

    // Save the event to local storage using the hourBlock as the key
    localStorage.setItem(hourBlock, eventText);
  });

  // Function to load events from local storage
  function loadEvents() {
    // Loop through each time block
    $(".time-block").each(function () {
      // Get the hour of the time block
      const hourBlock = $(this).attr("id");

      // Retrieve the event from local storage based on the hourBlock key
      const storedEvent = localStorage.getItem(hourBlock);

      // Update the corresponding textarea with the stored event
      $(this).find("textarea").val(storedEvent);
    });
  }

  // Call the function to load events from local storage
  loadEvents();
});
