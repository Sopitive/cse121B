/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myName;

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myName = "Wyatt Moore";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
let photo = "images/title.jpg";


// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
let favoriteFoods = ["pizza", "apple", "pie", "orange", "cheeseburger"];


// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
let hobbies = ["coding", "engineering", "gaming"];


// Step 6: Add another property named placesLived with a value of an empty array
let placesLived = [];


// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
class Place {
    constructor(place, length) {
        this.place = place;
        this.length = length;
    }
    
    //Setters
    setPlace(x) { 
        return this.place = x;
    }

    setLength(x) {
        return this.length = x;
    }
}
place1 = new Place("Socorro", "21 Years")
placesLived.push(place1);
console.log(place1);



// Step 8: For each property, add appropriate values as strings
place1.place = "Socorro";
place1.length = "21 Years";



// Step 9: Add additional objects with the same properties for each place you've lived
let place2 = new Place("Wisconsin", "2 Years");
placesLived.push(place2);



/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = myName;



// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = photo;



// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#name").alt = myName;



// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
function step4(array, id) {
    for (let i = 0; i < array.length; i++) {
        let ul = document.getElementById(id);
        let li = document.createElement("li");
        li.innerHTML = array[i];
        // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
        ul.appendChild(li);
        
    }
}

step4(favoriteFoods, "favorite-foods");

// Step 6: Repeat Step 4 for each hobby in the hobbies property
step4(hobbies, "hobbies");
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
//↑-Handled in function


// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

for (i = 0; i < favoriteFoods.length; i++) {
    dl = document.querySelector("#places-lived");
    dt = document.createElement("dt");
    dt.innerHTML = placesLived[i].place;
    dd = document.createElement("dd");
    dd.innerHTML = placesLived[i].length;
    dl.appendChild(dt);
    dl.appendChild(dd);
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
