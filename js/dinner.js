const foods2 = [
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
}

];
function addPredefinedFoodsToDropdown2() {
    const foodSelect2 = document.querySelector("#foodSelect_dinner");
    foods2.forEach((food) => {
        const option = document.createElement("option");
        option.value = food.name;
        option.textContent = food.name;
        foodSelect2.appendChild(option);
    });
}

function addFoodToTable2(food) {
    const foodTableBody2 = document.querySelector("#foodTable_dinner tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${food.name}</td>
      <td>${food.protein}</td>
      <td>${food.calories}</td>
      <td>${food.fat}</td>
      <td>${food.carbs}</td>
    `;
    foodTableBody2.appendChild(newRow);
}

addPredefinedFoodsToDropdown2();

const foodForm2 = document.querySelector("#foodForm_dinner");
foodForm2.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedFoodName2 = document.querySelector("#foodSelect_dinner").value;
    const selectedFood2 = foods.find(food => food.name === selectedFoodName2);

    if (selectedFood2) {
        addFoodToTable2(selectedFood2);
    }
    // Reset form
    foodForm.reset();
});
