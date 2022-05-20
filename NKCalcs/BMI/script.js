window.onload = () => {
    let buttonImp = document.getElementById("impBtn");
    let buttonMet = document.getElementById("metBtn");
    let selectImp = document.getElementById("Imperial");
    let selectMet = document.getElementById("Metric");
    let backImp = document.getElementById("backImp");
    let backMet = document.getElementById("backMet");

    // Function for calculating BMI
    buttonImp.addEventListener("click", calculateImpBMI);
    buttonMet.addEventListener("click", calculateMetBMI);
    selectImp.addEventListener("click", displayImp);
    selectMet.addEventListener("click", displayMet);
    backImp.addEventListener("click", selectScreen);
    backMet.addEventListener("click", selectScreen);
};

function displayImp() {
    document.getElementById("selectMeasure").style.display = "none"
    document.getElementById("imperialBlock").style.display = "block"
}

function displayMet() {
    document.getElementById("selectMeasure").style.display = "none"
    document.getElementById("metricBlock").style.display = "block";
}

function selectScreen() {
    document.getElementById("selectMeasure").style.display = "block"
    document.getElementById("metricBlock").style.display = "none";
    document.getElementById("imperialBlock").style.display = "none"
    
}

function calculateImpBMI() {
        // Convert height and inches into pure inches
        let hft = parseInt(document.getElementById("heightFt").value);
        let hin = parseInt(document.getElementById("heightIn").value);
        let height = (hft * 12) + hin;
        console.log(height);
        // Grab value of weight
        let weight = parseInt(document.getElementById("weightLbs").value);
        console.log(weight);
        // Check provided value
        if (height === "" || isNaN(hft)) {
            return result.innerHTML = "Please provide a valid height.";
        } else if (height === "" || isNaN(hin)) {
            return result.innerHTML = "Please provide a valid height.";
        } else if (weight === "" || isNaN(weight)) {
            return result.innerHTML = "Please provide a valid weight.";
        } else {
            // If all fields are valid then calculate BMI
            let BMI = (703 * weight / (height * height)).toFixed(2);
            let underweight = document.getElementById("underweight");
            let noData = document.getElementById("noData");
            let resultHead = document.getElementById("resultHead")
            if (BMI < 18.6) {
                underweight.innerHTML = `Your BMI is ${BMI}.`
                underweight.style.display = "block"
                noData.style.display = "none"
                resultHead.innerHTML = "Underweight"
                containerResult.style.backgroundcolor = "var(--DarkOrange)"
                // return result.innerHTML = `Underweight: ${BMI}`;
            } else if (BMI >= 18.6 && BMI < 24.9) {
                return result.innerHTML = `Normal: ${BMI}`;
            } else {
                return result.innerHTML = `Overweight: ${BMI}`
            }
        }
}

function calculateMetBMI() {
    //Convert height and weight to numbers
    let height = parseInt(document.getElementById("heightInches").value);
    let weight = parseInt(document.getElementById("weightKgs").value);
    console.log(height);
    console.log(weight);
    height = height * 0.0254;
    console.log(height);
    // Chack provided value
    if (height === "" || isNaN(height)) {
        return result.innerHTML = "Please provide a valid height.";
    } else if (weight === "" || isNaN(weight)) {
        return result.innerHTML = "Please provide a valid weight.";
    } else {
        // If all fields are valid then calculate BMI
        let BMI = (weight / (height**2)).toFixed(2);
        if (BMI < 18.6) {
            return result.innerHTML = `Underweight: ${BMI}`;
        } else if (BMI >= 18.6 && BMI < 24.9) {
            return result.innerHTML = `Normal: ${BMI}`;
        } else {
            return result.innerHTML = `Overweight: ${BMI}`
        }
    }

}