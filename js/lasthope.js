// banner section view more

// const loadPetsByCategory = async(category) => {
//   if (category) {
//     console.log('https://openapi.programming-hero.com/api/peddy/categories')
//   }else{
//     console.log('https://openapi.programming-hero.com/api/peddy/categories')
//   }
  // console.log()
  // const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
  // const data = await res.json();
  // console.log(data.pets);
//}
// loadPetsByCategory(category)

// const handleSearchByCategory = () => {
//   const searchCategory = document.getElementById("category-list").Value;
//   loadPetsByCategory(searchCategory)
// }









































































































































































































































































































// const API_BASE = "https://openapi.programming-hero.com/api/peddy";
// const categoryList = document.getElementById('category-list');
// const petGrid = document.getElementById('pet-grid');
// const noPetsMessage = document.getElementById('no-pets-message');
// const sortPriceBtn = document.getElementById('sort-price');

// // Function to fetch categories
// async function fetchCategories() {
//   console.log(fetchCategories)
//   const response = await fetch(`${API_BASE}/categories`);
//   const data = await response.json();
//   return data.categories;
// }

// // Function to fetch all pets
// async function fetchAllPets() {
//   console.log(fetchAllPets)
//   const response = await fetch(`${API_BASE}/pets`);
//   const data = await response.json();
//   return data.pets;
// }

// // Function to fetch pets by category
// async function fetchPetsByCategory(categoryName) {
//   console.log(fetchPetsByCategory)
//   const response = await fetch(`${API_BASE}/category/${categoryName}`);
//   const data = await response.json();
//   return data.pets;
// }

// // Render categories dynamically
// async function renderCategories() {
//   console.log(renderCategories)
//   const categories = await fetchCategories();
//   categories.slice(0, 4).forEach(category => {
//     const button = document.createElement('button');
//     button.innerText = category;
//     button.classList.add('bg-gray-200', 'py-2', 'px-4', 'rounded-lg', 'hover:bg-gray-300');
//     button.addEventListener('click', () => loadPetsByCategory(category));
//     categoryList.appendChild(button);
//   });
// }

// // Render pets dynamically
// async function renderPets(pets) {
//   petGrid.innerHTML = ''; // Clear existing pets
//   if (pets.length === 0) {
//     noPetsMessage.classList.remove('hidden');
//   } else {
//     noPetsMessage.classList.add('hidden');
//   }

//   pets.forEach(pet => {
//     const petCard = document.createElement('div');
//     petCard.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4');
//     petCard.innerHTML = `
//       <img src="${pet.thumbnail || 'default-image.jpg'}" alt="${pet.name}" class="rounded-lg mb-4">
//       <h3 class="text-xl font-bold">${pet.name}</h3>
//       <p>Breed: ${pet.breed || 'Unknown'}</p>
//       <p>Birth Date: ${pet.birthDate || 'N/A'}</p>
//       <p>Gender: ${pet.gender || 'Unknown'}</p>
//       <p>Price: $${pet.price || 'N/A'}</p>
//       <div class="flex justify-between items-center mt-4">
//         <button class="like-btn bg-red-500 text-white py-2 px-4 rounded-lg">Like</button>
//         <button class="adopt-btn bg-blue-500 text-white py-2 px-4 rounded-lg">Adopt</button>
//         <button class="details-btn bg-gray-500 text-white py-2 px-4 rounded-lg">Details</button>
//       </div>
//     `;
//     petGrid.appendChild(petCard);
//   });
// }

// // Sort pets by price in descending order
// async function sortPetsByPrice() {
//   console.log(sortPetsByPrice)
//   const pets = await fetchAllPets();
//   const sortedPets = pets.sort((a, b) => b.price - a.price);
//   renderPets(sortedPets);
// }

// // Load pets by category
// async function loadPetsByCategory(category) {
//   console.log(loadPetsByCategory)
//   const pets = await fetchPetsByCategory(category);
//   renderPets(pets);
// }

// // Initialize page with categories and pets
// async function init() {
//   renderCategories();
//   const allPets = await fetchAllPets();
//   renderPets(allPets);

//   sortPriceBtn.addEventListener('click', sortPetsByPrice);
// }

// // Call init function to load data
// init();

// // Handle Navbar collapse for mobile
// const mobileMenuBtn = document.getElementById('mobile-menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// mobileMenuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
// });


// java code 2
// const navToggle = document.getElementById('nav-toggle');
// const navMenu = document.getElementById('nav-menu');

// navToggle.addEventListener('click', () => {
//   navMenu.classList.toggle('hidden');
// });

 
// // section 
// function scrollToSection() {
//     document.getElementById('adopt').scrollIntoView({ behavior: 'smooth' });
//   }

// //   section 2
// let pets = [];
// const petsContainer = document.getElementById('pets-container');
// const sortBtn = document.getElementById('sort-btn');

// // Fetch and display pets
// async function fetchPets() {
//   const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
//   const data = await response.json();
//   pets = data.pets;
//   displayPets(pets);
// }

// // Display pets in cards
// function displayPets(pets) {
//   petsContainer.innerHTML = pets.map(pet => `
//     <div class="bg-white shadow-md p-4 rounded-lg">
//       <img src="${pet.thumbnail || 'placeholder.jpg'}" alt="${pet.name}" class="w-full h-40 object-cover rounded-md">
//       <h3 class="text-xl font-bold mt-4">${pet.name}</h3>
//       <p>Breed: ${pet.breed || 'N/A'}</p>
//       <p>Birth Date: ${pet.birthDate || 'N/A'}</p>
//       <p>Gender: ${pet.gender || 'N/A'}</p>
//       <p class="font-bold mt-2">Price: $${pet.price}</p>
//       <div class="mt-4 flex space-x-2">
//         <button class="bg-green-500 text-white py-1 px-2 rounded-lg adopt-btn" data-id="${pet.id}">Adopt</button>
//         <button class="bg-blue-500 text-white py-1 px-2 rounded-lg details-btn" data-id="${pet.id}">Details</button>
//         <button class="bg-red-500 text-white py-1 px-2 rounded-lg like-btn" data-id="${pet.id}">Like</button>
//       </div>
//     </div>
//   `).join('');
// }

// // Sort by price
// sortBtn.addEventListener('click', () => {
//   const sortedPets = pets.sort((a, b) => b.price - a.price);
//   displayPets(sortedPets);
// });

// fetchPets();


// // modal 
// const modal = document.getElementById('modal');
//   const petDetails = document.getElementById('pet-details');

//   document.querySelectorAll('.details-btn').forEach(btn => {
//     btn.addEventListener('click', async (e) => {
//       const petId = e.target.dataset.id;
//       const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
//       const pet = await response.json();
//       petDetails.innerHTML = `
//         <p>Name: ${pet.name}</p>
//         <p>Breed: ${pet.breed}</p>
//         <p>Price: $${pet.price}</p>
//         <p>Vaccination History: ${pet.vaccination || 'N/A'}</p>
//         <p>Description: ${pet.description || 'N/A'}</p>
//       `;
//       modal.classList.remove('hidden');
//     });
//   });

//   function closeModal() {
//     modal.classList.add('hidden');
//   }

// //   spinner
// const spinner = document.getElementById('spinner');
//   async function fetchPets() {
//     spinner.classList.remove('hidden');
//     const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
//     spinner.classList.add('hidden');
//   }
// //   adopt
// document.querySelectorAll('.adopt-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       let countdown = 3;
//       const interval = setInterval(() => {
//         if (countdown === 0) {
//           e.target.textContent = 'Adopted';
//           clearInterval(interval);
//         } else {
//           e.target.textContent = `Adopting in ${countdown}...`;
//           countdown--;
//         }
//       }, 1000);
//     });
//   });