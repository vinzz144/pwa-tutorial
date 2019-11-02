document.addEventListener('DOMContentLoaded', function() {
    // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

const recipes = document.querySelector('.recipes');

const renderData = (data,id)=>{
  const recipeContainer = `
  <div class="card-panel recipe white row recipe-${id}" data-id="${id}">
    <img src="/img/dish.png" alt="recipe thumb">
    <div class="recipe-details">
      <div class="recipe-title">${data.title}</div>
      <div class="recipe-ingredients">${data.ingredients}</div>
    </div>
    <div class="recipe-delete">
      <i class="material-icons" data-id="${id}">delete_outline</i>
    </div>
  </div>
  `;

  recipes.innerHTML += recipeContainer
}


const removeData = (id)=>{
  const recipe = document.querySelector(`.recipe[data-id=${id}]`);
  recipe.remove();
}

const updateData= (data,id)=>{
  const recipe = document.querySelector(`.recipe[data-id=${id}]`);
  recipe.querySelector('.recipe-title').innerHTML = `${data.title}`;
  recipe.querySelector('.recipe-ingredients').innerHTML = `${data.ingredients}`;
  
}