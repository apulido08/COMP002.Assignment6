// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.



let form = document.getElementById('preferences-form'); // retrieves the info from the form */
let nameId = document.getElementById('name'); // Selects the section to retrieve the name info */
let greeting = document.getElementById('greeting'); // Chooses the greeting */
let background = document.getElementById('background-color'); //section for the background-color */
let font = document.getElementById('foreground-color'); // this picks the font */




function preferences(){ // function to retrieve the saved info from local storage */
    let myName = localStorage.getItem('name'); // pulls the saved name */
    if(myName){ // Name is entered and greeting is picked */
        greeting.textContent = `Hi ${myName}👋!`;
    }
    let background = localStorage.getItem('background-color'); // pulls color from local storage */
    if (background){document.body.style.backgroundColor = background; // retrieves the color */

    }
    let font = localStorage.getItem('foreground-color'); // adds color and font from the local storage */
    if (font){document.body.style.color = font;

    }

}

preferences(); // applies the preferences */


form.addEventListener('submit', (event)=>{ // event listener once the submit button is clicked */
    event.preventDefault(); // stops the default action */
    localStorage.setItem('name', nameId.value); // saves the name information */
    localStorage.setItem('background-color', background.value); // saves the background color */
    localStorage.setItem('foreground-color', font.value); // saves the font on reload of page */



    preferences(); // calls the function again */
    alert(' Got it 👍!') // once button is clicked message pops up */
})
