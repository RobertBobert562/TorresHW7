/* HW 7
   Example 3 JavaScript code
*/

console.log("Torres Output from HW 7 Example 3");

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan"
  ];
  
  const input = document.querySelector('#country');
  const suggestions = document.querySelector('#suggestions');
  
  // Function that filters the countryList based on the input value
  const filterCountries = (inputValue) => {
    const filteredList = countryList.filter((country) => {
      return country.toLowerCase().startsWith(inputValue.toLowerCase());
    });
    return filteredList;
  };
  
  // Function that displays the suggestions
  const displaySuggestions = (suggestedCountries) => {
    suggestions.innerHTML = '';
    suggestedCountries.forEach((country) => {
      const div = document.createElement('div');
      div.classList.add('suggestion');
      div.textContent = country;
      suggestions.appendChild(div);
      div.addEventListener('click', () => {
        input.value = country;
        suggestions.innerHTML = '';
      });
    });
  };
  
  // Event listener for the input box
  input.addEventListener('input', () => {
    const inputValue = input.value.trim();
    if (inputValue.length > 0 && inputValue.startsWith('A')) {
      const suggestedCountries = filterCountries(inputValue);
      displaySuggestions(suggestedCountries);
    } else {
      suggestions.innerHTML = '';
    }
  });
  