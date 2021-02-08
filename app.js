//meal details
const displayMeals = (mealData) => {
    const mealDiv = document.getElementById('mealDiv');
   

//allMeal = data.meals
    mealData.forEach(allMeal => {
        const mealDivAppend = document.createElement('div');
        mealDivAppend.className = 'main-part';
        const mealInfo = `
                     <img class="img-fluid" src="${allMeal.strMealThumb}" alt="">
                     <h3 class ="meal-name"> ${allMeal.strMeal} </h3>
                     <h5 class ="meal-area"> ${allMeal.strArea} </h5>
                 `;
        mealDivAppend.innerHTML = mealInfo;

        mealDivAppend.addEventListener('click', function () {
            singleMealDetails(allMeal.idMeal);

        });
        mealDiv.appendChild(mealDivAppend);
    });
    document.getElementById('mealName').value = '';
};



const submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    const mealName = document.getElementById('mealName');

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName.value}`)
        .then(response => response.json())
        .then(data => {
            const mealInput = document.getElementById('mealName').value;
            const meal = data.meals;
            if (mealInput == "") {
                alert("Please Enter your Food Name")
            } else if (meal == null) {
                alert("Don't Match With Any Food Items! Please Try Again!");
            } else {
                displayMeals(data.meals);
            }

        })
        .catch(error => console.log(error))
});


//display all meal details:
const displayMealDetails = (allMealDetails) => {
    const mealDetails = document.getElementById('mealDetails');
    clearAllData('mealDetails');

    const mealDetailAppend = document.createElement('div');
    mealDetailAppend.className = 'meal-details';
    const mealInfo = `
                     <img class="detail-img" src="${allMealDetails.strMealThumb}" alt="">
                     <h3>${allMealDetails.strMeal}</h3>
                     <p>${mealName.ingredients}</p>
                     <ul>
                        <li>${allMealDetails.strMeasure1} ${allMealDetails.strIngredient1}</li>
                        <li>${allMealDetails.strMeasure2} ${allMealDetails.strIngredient2}</li>
                        <li>${allMealDetails.strMeasure3} ${allMealDetails.strIngredient3}</li>
                        <li>${allMealDetails.strMeasure4} ${allMealDetails.strIngredient4}</li>
                        <li>${allMealDetails.strMeasure5} ${allMealDetails.strIngredient5}</li>
                        <li>${allMealDetails.strMeasure6} ${allMealDetails.strIngredient6}</li>
                        <li>${allMealDetails.strMeasure7} ${allMealDetails.strIngredient7}</li>
                        <li>${allMealDetails.strMeasure8} ${allMealDetails.strIngredient8}</li>
                        
                    </ul
                 `;
    mealDetailAppend.innerHTML = mealInfo;
    mealDetails.appendChild(mealDetailAppend);

}

//display specific meal detail:
const singleMealDetails = id => {
    //console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayDetails(data.meals);
            
        })
}

