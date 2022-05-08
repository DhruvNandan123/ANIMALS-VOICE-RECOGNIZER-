function Startclassification() {
    navigator.mediaDevices.getUserMedia ({audio:true});
    classer=ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/gEwzc2Jui/',modelLoaded);
}
function modelLoaded() {
    classer.classify(gotResults);  
}
function gotResults(error,results) {
if(error) {
    console.error(error);
}
else {
    console.log(results);
    r =Math.floor(Math.random() * 255) +1;
    g =Math.floor(Math.random() * 255) +1;
    b =Math.floor(Math.random() * 255) +1;

    document.getElementById("result_label").innerHTML = results[0].label;
    document.getElementById("result_confidence").innerHTML = (results[0].confidence * 100).toFixed(2) + "%"; 
    document.getElementById("result_label").style.color="rgb(" + r + "," + g + "," + b + ")" ;
    document.getElementById("result_confidence").style.color="rgb(" + r + "," + g + "," + b + ")" ;

    
    if(results[0].label == "DOG") {
      img.src="dog.png"

    }
      else if(results[0].label == "CAT") {
        img.src="cat.png"

    }
    else if(results[0].label == "LION") {
        img.src="lion.png"

    }

    else if(results[0].label == "TIGER") {
        img.src="tiger.png"
    }

    else if(results[0].label == "EAGLE") {
        img.src="eagle.png"
    }
    else{
        img.src="parrot.png"

    }
}
}
