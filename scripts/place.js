const currentyear = document.querySelector("#currentyear");
const lastModified = document.getElementById("lastModified");

// use the data object
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified ${document.lastModified}`;
