const foods1 = [
              
    {
        name: "Sweet Potato",
        carbs: 26,
        protein: 1.6,
        fat: 0.3,
        calories: 103,
    },
    {
        name: "Black Beans",
        carbs: 41,
        protein: 15,
        fat: 0.5,
        calories: 227,
    },
    {
        name: "Avocado",
        carbs: 12,
        protein: 1.5,
        fat: 21,
        calories: 234,
    },
  {
    name: "Sweet Potato",
    carbs: 26,
    protein: 1.6,
    fat: 0.3,
    calories: 103,
},
{
    name: "Black Beans",
    carbs: 41,
    protein: 15,
    fat: 0.5,
    calories: 227,
},
{
    name: "Avocado",
    carbs: 12,
    protein: 1.5,
    fat: 21,
    calories: 234,
},
{
    name: "Idly",
    carbs: 10,
    protein: 2,
    fat: 1,
    calories: 50,
},
{
    name: "Dosa",
    carbs: 20,
    protein: 2,
    fat: 5,
    calories: 100,
},
{
    name: "Chapati",
    carbs: 15,
    protein: 2,
    fat: 3,
    calories: 80,
},
// Add more foods here
{
    name: "Rice",
    carbs: 45,
    protein: 4,
    fat: 0.5,
    calories: 204,
},
{
    name: "Chicken Breast",
    carbs: 0,
    protein: 31,
    fat: 3.6,
    calories: 165,
},
{
    name: "Broccoli",
    carbs: 6,
    protein: 2.8,
    fat: 0.4,
    calories: 31,
},

];
function addPredefinedFoodsToDropdown1() {
    const foodSelect1 = document.querySelector("#foodSelect_lunch");
    foods1.forEach((food) => {
        const option = document.createElement("option");
        option.value = food.name;
        option.textContent = food.name;
        foodSelect1.appendChild(option);
    });
}

// Function to add food to the table
function addFoodToTable1(food) {
    const foodTableBody1 = document.querySelector("#foodTable_lunch tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${food.name}</td>
      <td>${food.protein}</td>
      <td>${food.calories}</td>
      <td>${food.fat}</td>
      <td>${food.carbs}</td>
    `;
    foodTableBody1.appendChild(newRow);
}

addPredefinedFoodsToDropdown1();

// Handle form submission
const foodForm1= document.querySelector("#foodForm_lunch");
foodForm_lunch.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedFoodName1 = document.querySelector("#foodSelect_lunch").value;
    const selectedFood1 = foods.find(food => food.name === selectedFoodName1);

    if (selectedFood1) {
        addFoodToTable1(selectedFood1);
    }
    // Reset form
    foodForm1.reset();
});
