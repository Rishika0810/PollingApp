document.addEventListener("DOMContentLoaded", function () {
  // retrieve the HTML elements by their respective IDs
  const votingForm = document.getElementById("Form-box");
  const candidateSelect = document.getElementById("candidate");
  const voteCount = document.getElementById("voteCount");

  votingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    //retrieve the values from input fields
    const userID = document.getElementById("userID").value;
    //gets selected from drop down list
    const selectedCandidate = candidateSelect.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent"));

    const user = users.find((u) => u.id === userID);
    //condition
    if (!user) {
      alert("User not found. Please register first.");
      return;
    }

    if (user.voted) {
      alert("You have already voted.");
      return;
    }

    user.voted = true;
    localStorage.setItem("users", JSON.stringify(users));

    if (!currentEvent.votes[selectedCandidate]) {
      currentEvent.votes[selectedCandidate] = 0;
    }

    currentEvent.votes[selectedCandidate]++;
    localStorage.setItem("currentEvent", JSON.stringify(currentEvent));

    // Display updated vote count
    updateVoteCount(currentEvent.votes);

    // Reset the form
    votingForm.reset();
  });

  function updateVoteCount(votes) {
    voteCount.innerHTML = "<h2></h2>";
    for (const candidate in votes) {
      voteCount.innerHTML += `<p>${candidate}: ${votes[candidate]}  </p>`;
    }
  }

  function populateCandidates() {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent"));
    if (currentEvent) {
      candidateSelect.innerHTML = "";
      for (const candidate of currentEvent.candidates) {
        candidateSelect.innerHTML += `<option value="${candidate}">${candidate}</option>`;
      }
    }
  }

  populateCandidates();
});
