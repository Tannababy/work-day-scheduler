$(document).ready(function () {
  // Display current day
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Generate time blocks
  for (let hour = 1; hour <= 12; hour++) {
      $(".container").append(`
          <div class="time-block" id="hour-${hour}">
              <p>${hour}</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button><i class="fas fa-save"></i></button>
          </div>
      `);
  }
});
