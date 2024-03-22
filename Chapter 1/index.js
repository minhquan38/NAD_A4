console.log("Hello world");

const testEL = document.getElementById("test-el");

testEL.textContent = "Bye Bye";

testEL.addEventListener("click", () => {
  console.log("click");
  testEL.innerHTML = "<b>Clicked</b>";
});

testEL.addEventListener("mouseover", () => {
  console.log("on");
});

testEL.addEventListener("mouseout", () => {
  console.log("off");
});

document.addEventListener("scroll", () => {
  const positionY = window.scrollY;
  console.log(positionY);
});
