//Step 1: Hiding the message
function hideMessage(){
    document.getElementById("tryAgain").style.display= "none";
    document.getElementById("matched").style.display= "none";
}

//Step 2: Generating Pin
function generatePin(){
    const randomPin = Math.floor(Math.random() * 8999 + 1000);
    document.getElementById("generate-num").value = randomPin;
}

//Step 3: Entering the input buttons
function enterInput(num){
    document.getElementById("input-number").value= document.getElementById("input-number").value + num; 
}

//Step 4: Comparing the Pins and showing the message
function matchPin(){
    let inputNum = document.getElementById("input-number").value;
    let generatedPin = document.getElementById("generate-num").value;

    if (generatedPin == "") {
    }
    else if(inputNum == ""){
    }
    else{
        if(inputNum == generatedPin){
            document.getElementById("matched").style.display= "block"; 
            document.getElementById("tryAgain").style.display= "none";
        }
        else{
            document.getElementById("tryAgain").style.display= "block";
            document.getElementById("matched").style.display= "none";   
        }
    }
}

// Bonus: Removing numbers one by one
function removeNumber(){
    var inputNum = document.getElementById("input-number").value; 
    var remove = inputNum.slice(0,inputNum.length-1);
    document.getElementById("input-number").value = remove;
}

// Bonus: Clearing all inputs
function clearAll(){
    document.getElementById("input-number").value='';   
}

// Extra: How many tries left
function actionLeft() {
    let inputNum = document.getElementById("input-number").value;
    let generatedPin = document.getElementById("generate-num").value;

    if((inputNum != generatedPin) || generatedPin == "" || inputNum == ""){
        var tryLeft= document.getElementById("actionLeft").innerText;
        var tryCount = parseInt(tryLeft);
        if (tryCount > 0){
            tryCount--;
            if(inputNum == ""){
                hideMessage();
            }
        }
        if (tryCount == 0){
            hideMessage();
            document.getElementById("myButton").disabled = true;
        }
        const actionUpdate=document.getElementById("actionLeft");
        actionUpdate.innerText=tryCount;
    }
}