document.addEventListener("DOMContentLoaded", function () {
  const registration = document.getElementById("registration");

  registration.addEventListener("submit", function (e) {
    e.preventDefault();

    //Storing the values in constant variables
    const voterName = document.getElementById("voterName").value;
    const UniqueID = document.getElementById("UniqueID").value;

    const user = {
      name: voterName,
      id: UniqueID,
      voted: false,
    };

    const currentEvent = JSON.parse(localStorage.getItem("currentEvent"));
    //Condition
    if (!currentEvent) {
      alert("No event found. Please create an event first.");
      return;
    }
    //Storing data in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    //Giving an alert
    alert("User registered successfully!");

    //Redirecting to the next page
    window.location.href = "voting2.html";
    registration.reset();
  });
});
