const currentyear = document.querySelector("#currentyear");

// use the data object
const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const temples = [
    {
      templeName: "Drink",
      location: "Glasses",
      dedicated: "Plastic",
      area: "1000",
      imageUrl:
      "https://img.freepik.com/fotos-premium/vasos-plastico-colores-aislados-sobre-fondo-blanco_93675-36078.jpg?w=1380"
    },
    {
      templeName: "Drink",
      location: "Bucket with spout",
      dedicated: "Plastic",
      area:"200",
      imageUrl:
      "https://cdnx.jumpseller.com/productos-rey-preu/image/36171863/resize/1280/1280?1686146122"
    },
    {
      templeName: "Drink",
      location: "jugs",
      dedicated: "Plastic",
      area: "500",
      imageUrl:
      "https://i.ebayimg.com/images/g/gfoAAOSwAn1lplje/s-l1600.webp"
    },
    {
      templeName: "Eat",
      location: "Tupperware",
      dedicated: "Plastic",
      area: "4539",
      imageUrl:
      "https://www.ikea.com/us/en/images/products/pruta-food-container-set-of-17-clear-green__0711382_pe728174_s5.jpg?f=xl"
    },
    {
      templeName: "Eat",
      location: "Spoon",
      dedicated: "Metal",
      area: "186",
      imageUrl:
      "https://m.media-amazon.com/images/I/618F1Xwm49L.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
      templeName: "Eat",
      location: "Salt shaker",
      dedicated: "Plastic",
      area: "454",
      imageUrl:
      "https://m.media-amazon.com/images/I/61XanuOsq4L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      templeName: "Drink",
      location: "kettle",
      dedicated: "Metal",
      area: "5",
      imageUrl:
      "https://www.thespruceeats.com/thmb/1N0_r-dK_p9UhvWE63eeOLTqnoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Testing_SusteasStovetopWhistling_Fred-Hardy_0205-3f61821dbf9548508f4ab0b864c7d381.jpg"
    },
    {
      templeName: "Water",
      location: "200-liter drums",
      dedicated: "Plastic",
      area: "15",
      imageUrl:
      "https://www.plastisol.pe/wp-content/uploads/2019/11/TACHO-VERDE-2.jpg"
    },
    {
      templeName: "Clean Clothes",
      location: "Tub",
      dedicated: "Plastic",
      area: "780",
      imageUrl:
      "https://plasticworld.in/wp-content/uploads/2023/08/Rectangular-Plastic-Tub.jpg"
    },
];
  
CreateTempleCard(temples)

const nonutahlink = document.querySelector("#nonutah");

nonutahlink.addEventListener("click", () => {
    CreateTempleCard(temples.filter(temple => !temple.location.includes("Utah")))
})

function CreateTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("H3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName
        location.innerHTML = `<span class = "label">Product:</span> ${temple.location}`;
        dedication.innerHTML = `<span class = "label">Type:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label">In Stock:</span> ${temple.area} uni`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location)
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}