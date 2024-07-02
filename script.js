const birthdateInput = document.querySelector("#birthdate");
const calculateBtn = document.querySelector("#calculate-btn");
const resultPara = document.querySelector("#result");

calculateBtn.addEventListener("click", () => {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  resultPara.textContent = `You are ${age} years old.`;
});
