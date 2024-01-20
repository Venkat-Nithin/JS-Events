// Challenge 1
window.onload = function () {
  document.getElementById("user").innerHTML = "Venkat";
};

// Challenge 2
document.getElementById("btn-click").onclick = function () {
  this.style.backgroundColor = "lightblue";
};

// Challenge 3
function makeSentence() {
  const noun = document.getElementById("noun").value;
  const verb = document.getElementById("verb").value;
  const adverb = document.getElementById("adverb").value;
  const statementDiv = document.getElementById("statement");

  const sentence = `${noun} ${verb} ${adverb}`;
  statementDiv.innerHTML = sentence;
}

document.getElementById("build-button").addEventListener("click", makeSentence);

// Challenge 4.1
document.getElementById("grandparent").addEventListener("click", function () {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child clicked");
  event.stopPropagation(); // Prevents the event from further propagation
});

// Challenge 4.2
document.getElementById("grandparent").addEventListener(
  "click",
  function () {
    console.log("Grandparent clicked");
  },
  true // Use capturing phase
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent clicked");
  },
  true // Use capturing phase
);

document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child clicked");
  },
  true // Use capturing phase
);

// Challenge 5
document.getElementById("category").addEventListener("click", function (event) {
  if (event.target.id === "blazers") {
    console.log("blazers");
  }
});

