const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bulldog"
    }
];

// Function to show the pet info
function showInfo() {
    const petNum = document.querySelector("#petNum").value;
    const index = parseInt(petNum) - 1;

    // Validate the input
    if (isNaN(index) || index < 0 || index >= petsData.length) {
        document.querySelector('.selectedPetInfo').innerHTML = "Please enter a valid number from 1 to 5.";
        return;
    }

    // Access the pet info
    const pet = petsData[index];
    const petInfo = `${pet.petName} is ${pet.age} years old. This pet weighs ${pet.weightInKilos} kilos and is a ${pet.breed}.`;
    document.querySelector('.selectedPetInfo').innerHTML = petInfo;
}
