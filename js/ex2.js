/* HW 7
   Example 2 JavaScript code
*/

console.log("Torres Output from HW 7 Example 2");

// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };
  
  // Get the house select element and the characters list element
  const houseSelect = document.getElementById("house");
  const charactersList = document.getElementById("characters");
  
  // Populate the house select element
  houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.textContent = house.name;
    houseSelect.appendChild(option);
  });
  
  // Listen for changes to the house select element
  houseSelect.addEventListener("change", () => {
    // Clear the characters list
    charactersList.innerHTML = "";
  
    // Get the selected house code
    const selectedHouse = houseSelect.value;
  
    // Get the characters belonging to the selected house
    const characters = getCharacters(selectedHouse);
  
    // Create a list item for each character and add it to the characters list
    characters.forEach(character => {
      const listItem = document.createElement("li");
      listItem.textContent = character;
      charactersList.appendChild(listItem);
    });
  });
  