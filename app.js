const password = document.querySelector("#password");
const background = document.querySelector("#background");
console.log(password);

password.addEventListener("input", (el) => {
  const input = el.target.value;
  const length = input.length;
  const value = 24 - length * 3;
  background.style.filter = `blur(${value}px)`;
  console.log(input);
});
