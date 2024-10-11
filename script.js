// Function to calculate BMI
function calculateBMI() {
    // Get the weight and height input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input: check if both fields are filled and values are positive
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    // Calculate BMI using the formula: BMI = weight / (height * height)
    const bmi = weight / (height * height);
    
    // Round the BMI to two decimal places
    const roundedBMI = bmi.toFixed(2);
    
    // Display the BMI result
    document.getElementById('bmi-result').innerText = `Your BMI: ${roundedBMI}`;

    // Determine the BMI category and display the message
    let categoryMessage;
    if (bmi < 18.5) {
        categoryMessage = "Category: Underweight";
    } else if (bmi < 24.9) {
        categoryMessage = "Category: Normal weight";
    } else if (bmi < 29.9) {
        categoryMessage = "Category: Overweight";
    } else {
        categoryMessage = "Category: Obesity";
    }
    
    document.getElementById('category-message').innerText = categoryMessage;
}

// Add event listener to the calculate button
document.getElementById('calculate-btn').addEventListener('click', calculateBMI);
