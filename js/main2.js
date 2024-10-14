// 1 - Fetch, load and show Categories on html

// Create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((error) => console.log(error));
  };
  
  const loadPets = () => {
    fetch(" https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => console.log(data.pets))
    .catch((error) => console.log(error));
  }
  
  
  const displayPets = (pets) => {
    const petsContainer = document.getElementById("pets");
    console.log(petsContainer);
    pets.forEach( (pet) => {
      console.log(pet);
      const card = document.createElement("div");
      card.classList = "card border border-inherit p-4";
      card.innerHTML = `
                  <figure class="h-{200px}">
                      <img class="h-full w-full object-cover border rounded-lg" src=${pet.image} alt="" />
                  </figure>
                  <div class="px-0 p-2 items-center gap-2">
                      <h2 class="card-title font-bold text-xl">${pet.pet_name}</h2>
                      <p class="text-gray-600">${pet.breed}</p>
                      ${pet.breed.verified === true ?  '' : ""}
                      <p class="text-gray-600">${pet.date_of_birth}</p>
                    ${pet.date_of_birth.verified === true ? 'date_of_birth": "2022-09-05' : ""}
                      <p class="text-gray-600">${pet.gender}</p>
                      <p class="text-gray-600">${pet.price}</p>
                      <hr>
                      <div class="card-actions pt-2 justify-between">
                          <div class="border border-solid px-2 rounded-lg"><i class="fa-regular fa-thumbs-up"></i>
                          </div>
                          <div class="border border-solid px-2 rounded-lg text-cyan-600 font-medium">Adopt</div>
                          <div class="border border-solid px-2 rounded-lg text-cyan-600 font-medium">Details</div>
                      </div>
                  </div>`;
                  petsContainer.appendChild(card);
    })
  };
  
  
  // Create DisplayCategories button in main section up
  const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category;
    });
  }
   
  
  loadCategories();
  loadPets();
  
  /*
  
  https://openapi.programming-hero.com/api/peddy/pet/1
  
  
  https://openapi.programming-hero.com/api/peddy/category/dog
  
  */ 