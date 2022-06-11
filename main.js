
function sc()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Hgxy_EeSB/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        rnr = Math.floor(Math.random() * 255) + 1;
        rng = Math.floor(Math.random() * 255) + 1;
        rnb = Math.floor(Math.random() * 255) + 1;

        document.getElementById("rl").innerHTML = 'Detected Voice is of - '+ results[0].label;
        document.getElementById("rc").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("rl").style.color = "rgb("+rnr+","+rng+","+rnb+")";
        document.getElementById("rc").style.color = "rgb("+rnr+","+rng+","+rnb+")";

    

        if(results[0].label == "Lion Roar"){
            img.src = 'aliens-01.gif';
            
        }
        else if(results[0].label == "dog barking"){
            img.src = 'dog barking gif';
            
        }
        else if(results[0].label == "cat meowing"){
            img.src = 'cat-cartoon';
            

        }
        else if(results[0].label == "Cow Mooing"){
            img.src = 'aliens-01.png';
            

        }
        else {
            img.src = 'aliens-01.png';
            

        }



    }
}