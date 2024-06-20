// script.js
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('#filter-options input[type="checkbox"]');
    const resultsContainer = document.getElementById('diseases-container');
    
    // Sample data - replace with your actual data
    const data = [
      { name: "Diabetes ", options: ["Itchy skin"] },
      { name: "Aasthma ", options: ["Coughing"] },
      { name: "cancer", options: ["Itchy skin", "Coughing"] }
    ];
  
    function renderResults(diseases) {
      resultsContainer.innerHTML = '';
      diseases.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('diseases-item');
        resultElement.textContent = result.name;
        resultsContainer.appendChild(resultElement);
      });
    }
  
    function SymptomChecker() {
      const selectedOptions = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
  
      const SymptomChecker = data.filter(diseases => {
        return selectedOptions.every(option => diseases.options.includes(option));
      });
  
      renderResults(SymptomChecker);
  
      if (SymptomChecker.length === 0) {
        diseasesContainer.textContent = 'No diseases found.';
      }
    }
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterResults);
    });
  
    // Initial render
    filterResults();
  });
  