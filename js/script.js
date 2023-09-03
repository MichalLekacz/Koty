const getFactButton = document.getElementById("get-fact-button");
const factParagraph = document.getElementById("fact");
const factList = document.getElementById("fact-list");
const getRandomBreedButton = document.getElementById("get-random-breed-button");
const randomBreedParagraph = document.getElementById("random-breed");

// Randomowa Kocia Rasa

getRandomBreedButton.addEventListener("click", () => {
    fetch("https://catfact.ninja/breeds")
        .then((response) => response.json())
        .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.data.length);
            const randomBreed = data.data[randomIndex].breed;
            randomBreedParagraph.textContent = randomBreed;
        })
        .catch((error) => console.error("Wystąpił błąd:", error));
});

// randomowy Koci fakt

getFactButton.addEventListener("click", () => {
    fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => {
            const factText = data.fact;
            factParagraph.textContent = factText;
        })
        .catch((error) => console.error("Wystąpił błąd:", error));
});

// 10 kocich faktów

fetch("https://catfact.ninja/facts?limit=10")
    .then((response) => response.json())
    .then((data) => {
        data.data.forEach((fact) => {
            const listItem = document.createElement("li");
            listItem.textContent = fact.fact;
            factList.appendChild(listItem);
        });
    })
    .catch((error) => console.error("Wystąpił błąd:", error));