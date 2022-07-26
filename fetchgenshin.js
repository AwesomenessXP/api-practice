async function populate() {
    const requestURL = 'https://api.genshin.dev/characters';
    const request = new Request(requestURL);

    // use fetch API
    const response = await fetch(request);
    const genshinData = await response.json();

    populateHeader(genshinData);

}

async function populateHeader(obj) {
    const header = document.querySelector('header');
    const section = document.querySelector('section')
    const myH1 = document.createElement('h1');
    const characters = obj;
    myH1.textContent = `Characters:`;
    header.appendChild(myH1);
    for (character of characters) {
        const newP = document.createElement('p');
        newP.innerHTML = `${character}`;
        newP.style.fontWeight = "bold";
        const requestURL2 = `https://api.genshin.dev/characters/${character}`;
        const request2 = new Request(requestURL2);
    
        // use fetch API
        const response2 = await fetch(request2);
        const genshinData2 = await response2.json();
        const newP2 = document.createElement('p');
        newP2.innerHTML = `${genshinData2.description}`;
        newP2.style.fontWeight = "normal";

        section.appendChild(newP);
        newP.appendChild(newP2);
    }
}

populate();