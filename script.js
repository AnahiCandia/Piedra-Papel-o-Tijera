const choices = ["piedra", "papel", "tijera"];
const buttons = document.querySelectorAll(".choice");
const result = document.getElementById("result");

buttons.forEach(btn => btn.addEventListener("click", () => {
  const userChoice = btn.getAttribute("data-choice");
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let outcome = "";
  if (userChoice === computerChoice) {
    outcome = "Es un empate.";
  } else if (
    (userChoice === "piedra" && computerChoice === "tijera") ||
    (userChoice === "papel" && computerChoice === "piedra") ||
    (userChoice === "tijera" && computerChoice === "papel")
  ) {
    outcome = `Ganaste! ${userChoice} vence a ${computerChoice}.`;
  } else {
    outcome = `Perdiste. ${computerChoice} vence a ${userChoice}.`;
  }

  result.textContent = `La computadora eligió ${computerChoice}. ${outcome}`;
}));
