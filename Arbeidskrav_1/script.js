

// Function to change the current article information.
// The given index coreponds to the dictonary index in 'resources' array.
// (0 --> the first dictornary element)
function changeArticle(index){

    console.log("You switched to: " + resources[index].category)

    // Build the first half of the article.
    newHTML = `
        <article>
            <h2>${resources[index].category}</h2>
            <p>${resources[index].text}</p>
            <ul>`

    // A loop to build the list elements
    resources[index].sources.map((link, index) => newHTML += `
        <li><a href="${link.url}">${link.title}</a></li>`)
    

    // Builds the end of article
    newHTML += `
        </ul>
        </article>
    `
    // Overwrites old article
    document.getElementById("articleContent").innerHTML = newHTML

    // Change button colors
    changeButtonColor(index)
}


// Function to change the button colors.
// Removes target-class from all buttons,
// then adds it only to the button we clicked.
function changeButtonColor(index){

    for(i=0; i<resources.length; i++){
        document.getElementById("liButton_" + i).classList.remove("target");
    }

    document.getElementById("liButton_" + index).classList.add("target")

}


// Function to make the navbar based on amount elements in dictonary.
// Is run only when the site is loaded or refreshed.
function makeButtons(){

    navHTML = ""

    // Makes one button for each dictonary element.
    resources.map((link, index) => navHTML += `
        <li id="liButton_${index}" onclick="changeArticle(${index})">${link.category}</li>
    `)

    // Adds all the buttons
    document.getElementById('nav').innerHTML = navHTML

    // Changes current viewed ariticle to the first element in the dictionary
    changeArticle(0)
}

