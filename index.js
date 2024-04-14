
const apiUrl=`http://localhost:3000/Cuisines`;
const cuisineContainer = document.querySelector("#cuisine-container");
   
function loadCuisines(){

fetch(apiUrl)
    .then(res =>res.json())
    .then ((data) => console.log(data));
};
loadCuisines();

const getRecipeStepsString =(Ingredients=[])=> {
    let string=" ";
    for(var step of Ingredients){
        string=string+ `<li>${step}</li>`;
    }
    return string;
};



    const renderCuisines=(cuisineList = []) =>{
     cuisineList.forEach((cuisineObj) =>{
        const {Title, Description, "Prep time": PrepTime, Serves, Rating, "Nutrition facts (per serving)": NutritionFacts, Ingredients, Recipe, image:cuisineimage } = cuisineObj;
   const recipeStepsString= getRecipeStepsString(Ingredients);
        const htmlString= `<div id="cuisine-container">
     <div class="cuisine">
    <div class="cuisine-Title">${cuisine-Title}</div>
     <div class="cuisine-image">
    <img src="${cuisineimage}" alt="Cuisine"/>
        </div>
       <div class="cuisine-text">
      <ul>
     ${recipeStepsString}

    </ul>
    </div>
    </div>
    </div>`;


 cuisineContainer.insertAdjacentElement("beforeend",htmlString)


     });


    };
    
//         // declaring what the variable contains
//         const cuisines = data.Cuisines;
//       // Function to search for a cuisine based on title and location
//       function searchCuisine(queryTitle, queryLocation) {
//         //   const cuisines=[];
//         queryTitle = queryTitle.toLowerCase();
//         queryLocation = queryLocation.toLowerCase();
//         return cuisines.filter(cuisine => cuisine.Title.toLowerCase().includes(queryTitle) && cuisine.location.toLowerCase().includes(queryLocation));
//       }
// console.log(data);

    
        
    
// // EXAMPLE USAGE
// let titleQuery = "Hearts of Palm Salsa"; // The user's title search query
// let locationQuery = "Central America"; // The user's location search query
// let result = searchCuisine(titleQuery, locationQuery);



// if (result.length > 0) {
//     console.log("Found cuisine(s) matching your search:");
//     result.forEach(cuisine => {
//         console.log(cuisine.Title + " - Location: " + cuisine.location);
//     });
// } else {
//     console.log("No cuisines found matching your search.");
// }
// })
// .catch(error => console.error('ERROR OCCURED'))










// function renderCuisines(cuisineList = [])=> {
//   cuisineList.forEach(cuisineObj => {
    //    const {Title, Description, "Prep time": PrepTime, Serves, Rating, "Nutrition facts (per serving)": NutritionFacts, Ingredients, Recipe, image } = cuisineObj;

//        // Convert the array of nutrition facts into a formatted string
//    const nutritionFactsString = NutritionFacts.join(", ");

//        // Convert the array of ingredients into a formatted string
//    const ingredientsString = Ingredients.join(", ");

//        // Convert the recipe object into an HTML string
//        const recipeSteps = Object.values(Recipe).map((step, index) => `<li>Step ${index + 1}: ${step}</li>`).join("");

//        // Construct the HTML for displaying the cuisine
//        const htmlString = `
//            <div class="cuisine">
//                <div class="cuisine-title">${Title}</div>
//                <div class="cuisine-description">${Description}</div>
//                <div class="cuisine-info">
//                    <div>Prep Time: ${PrepTime}</div>
//                    <div>Serves: ${Serves}</div>
//                    <div>Rating: ${Rating}</div>
//                    <div>Nutrition facts (per serving): ${nutritionFactsString}</div>
//                </div>
//                <div class="cuisine-ingredients">
//                    <h3>Ingredients:</h3>
//                    <ul>${ingredientsString}</ul>
//                </div>
//                <div class="cuisine-recipe">
//                    <h3>Recipe:</h3>
                    // <ol>${recipeSteps}</ol>
                // </div>
                // <div class="cuisine-image">
                    // <img src="${image}" alt="${Title}" />
        //  /      </div>
        //  <//div>`;

//        // Insert the HTML string into the cuisine container
    //  cuisineContainer.insertAdjacentHTML("beforeend", htmlString);
