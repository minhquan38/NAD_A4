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

const APIUrl = "https://swapi.dev/api/people/";

// JQuery AJAX method
$.ajax({
  type: "GET",
  url: APIUrl,
  success: function (response) {
    console.log("ajax", response);
  },
  error: function (error) {
    console.log(error);
  },
});

// XMLHttoRequest

const req = new XMLHttpRequest();
req.addEventListener("readystatechange", () => {
  if (req.readyState === 4) {
    console.log("XMLHttp", JSON.parse(req.responseText));
  }
});

req.open("GET", APIUrl);
req.send();

// Fetch
fetch(APIUrl)
  .then((response) => response.json())
  .then((data) => console.log("fetch", data))
  .catch((err) => console.log(err));
