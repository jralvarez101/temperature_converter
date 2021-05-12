// Steps to Happen
// - Temperature must be entered and it must be a number (will have an error message if not)
// - From and To must be validated so that they are not the same 
// - When the calculate button is clicked, the value will be obtained and calculated.
// - The calculation can always be done even if the fields were not cleared
// - When the clear button is clicked all fields will be reset 
// - the answer must be displayed saying one value is equal another value in a different unit measurement

// Variables for this project.
 const valueToConvert = document.getElementById('valueToConvert');
 const startingUnit = document.getElementById('startingUnit');
 const convertedToUnit = document.getElementById('convertedToUnit');
 const answer =  document.getElementById('answer');
 const calculateBtn  = document.getElementById('calculate');
 const clearBtn = document.getElementById('clear');
 const card = document.getElementsByClassName('card');

 // Function to convert from celsius to fahrenheit 
 function convertToFahrenheit (celsius){
    let convertedFahrenheit = celsius * 9/5 + 32;
    console.log(convertedFahrenheit);
    return answer.value = `${celsius}˚C =  ${convertedFahrenheit}˚F`;
    
 }

 // Function to convert fahrenheit to celsius 
 function convertToCelsius (fahrenheit){
     let convertedCelsius = (fahrenheit - 32) * 5/9;
     formattedConvertedCelsius = parseFloat(convertedCelsius).toFixed(2)
     console.log(formattedConvertedCelsius);
     return answer.value = `${fahrenheit}˚F = ${formattedConvertedCelsius}˚C`;
     
 }

// Event Listener for calculate button
calculateBtn.addEventListener('click', function(){

    let temp = parseInt(valueToConvert.value);
    console.log(temp);
   
     // First check if a valid value was input
     if(isNaN(temp) || temp === ''){
        alert('Please enter a valid temperature')
        
        //check that both options are not the same
    } else if (startingUnit.selectedOptions[0].value === convertedToUnit.selectedOptions[0].value){
        alert('You have to pick a different unit to convert to')

       // check what they will be converting from
    } else if (startingUnit.selectedOptions[0].value === "Celsius (C˚)" && convertedToUnit.selectedOptions[0].value === "Fahrenheit (˚F)"){
        convertToFahrenheit(temp);
    } else {
        convertToCelsius(temp); 
    } 
    
})

// Event listener on Clear button
clearBtn.addEventListener('mousedown', function(e){
    if(e.target === clearBtn){
        window.location.reload();
    }
})


 