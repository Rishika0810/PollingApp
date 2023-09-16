document.addEventListener("DOMContentLoaded", function () {
  const Form = document.getElementById("Form");

  Form.addEventListener("submit", function (e) {
    e.preventDefault();

    //Storing the values in constant variables
    const eventName = document.getElementById("eventName").value;
    const position = document.getElementById("position").value;
    const eventDate = document.getElementById("eventDate").value;
    const candidates = document.getElementById("candidates").value.split(",");

    const event = {
      name: eventName,
      position: position,
      date: eventDate,
      candidates: candidates,
      votes: {},
    };
    // Storing event data in local storage
    localStorage.setItem("currentEvent", JSON.stringify(event));
    //  Giving alert
    alert("Event created successfully!");

    Form.reset();
  });
});
