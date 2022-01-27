/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let my_name = "Wyatt Moore";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = my_name;

// Step 3: declare and instantiate a variable to hold the current year
let year = "2021";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let picture = "images/title.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute("src", picture);



/* ARRAYS */
// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = ['Pizza', 'Pie', 'Burrito'];
// Step 2: place the values of the favorite foods variable into the HTML file
function Step2() {

document.querySelector('#food').textContent = foods.join(", ");

}
// Step 3: declare and instantiate a variable to hold another favorite food
let food = "Sandwich";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(food)

// Step 5: repeat Step 2
Step2()

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
Step2();

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
Step2();


