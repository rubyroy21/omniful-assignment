// Simulated API call using a promise
function fetchResults(query) {
  const fruits = [
    "apple",
    "apricot",
    "banana",
    "blueberry",
    "cherry",
    "date",
    "grape",
    "kiwi",
    "mango",
    "melon",
    "orange",
    "papaya",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "strawberry",
    "watermelon",
  ];

  // Filter fruits based on the query
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredResults = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredResults);
    }, 1000);
  });
}

// Debouncing function to limit API calls
function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

// Function to handle input and display results
function handleInput() {
  const query = document.getElementById("searchInput").value.trim();

  if (query === "") {
    displayResults([]);
    return;
  }

  // Simulate API call
  fetchResults(query).then((results) => {
    displayResults(results);
  });
}

// Function to display results
function displayResults(results) {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found</p>";
    return;
  }

  // Append new results
  results.forEach((result) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.textContent = result;
    resultsContainer.appendChild(item);
  });
}

// Attach debounced input event listener
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", debounce(handleInput, 500));
