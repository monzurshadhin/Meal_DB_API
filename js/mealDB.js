const searchFood = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    if(searchText=='')
    {
      //work
    }
    else{
        // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))

    }

  
}

const displaySearchResult = (meals) =>{

  console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML=''; //not perfect for clear

    if(meals.length == 0){
      //work
    }

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
              ${meal.strInstructions.slice(0,250)}      
              </p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    });

}

const loadMealDetail = (mealId) =>{
  console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  console.log(url);

  fetch(url)
  .then(res => res.json())
  .then(data=> displayMealDeail(data.meals[0]))

}

const displayMealDeail = meal => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
            ${meal.strInstructions.slice(0,150)}
            </p>
            <a href="${meal.strYoutube}" class="btn btn-primary">See on Youtube</a>
          </div>
  `;

  mealDetails.appendChild(div);

}