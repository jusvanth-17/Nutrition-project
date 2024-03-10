const foods = [
              
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
function addPredefinedFoodsToDropdown() {
    const foodSelect= document.querySelector("#foodSelect");
    foods.forEach((food) => {
        const option = document.createElement("option");
        option.value = food.name;
        option.textContent = food.name;
        foodSelect.appendChild(option);
    });
}

// Function to add food to the table
function addFoodToTable(food) {
    const foodTableBody = document.querySelector("#foodTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${food.name}</td>
      <td>${food.protein}</td>
      <td>${food.calories}</td>
      <td>${food.fat}</td>
      <td>${food.carbs}</td>
    `;
    foodTableBody.appendChild(newRow);
}

addPredefinedFoodsToDropdown();

// Handle form submission
const foodForm= document.querySelector("#foodForm");
foodForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedFoodName= document.querySelector("#foodSelect").value;
    const selectedFood = foods.find(food => food.name === selectedFoodName);

    if (selectedFood) {
        addFoodToTable(selectedFood);
    }
    // Reset form
    foodForm.reset();
});
