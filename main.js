function startgobrr(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9nV8ZxjuA/model.json",modelReady)
}
function modelReady()
{
    console.log("we have reached");
classifier.classify(gotResults)}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("smartnessgobrr").innerHTML = results[0].label;
        document.getElementById("accuratearchergobrr").innerHTML = results[0].confidence;
        if(results[0].label=="Clap"){
            document.getElementById("bob").src = "aliens-01.gif";
            document.getElementById("Alex").src = "aliens-02.png";
            document.getElementById("Jeffrey").src = "aliens-03.png";
            document.getElementById("Theawewsomevihaan").src = "aliens-04.png";
        }
        else if(results[0].label=="snap"){
            document.getElementById("bob").src = "aliens-01.png";
            document.getElementById("Alex").src = "aliens-02.gif";
            document.getElementById("Jeffrey").src = "aliens-03.png";
            document.getElementById("Theawewsomevihaan").src = "aliens-04.png";
        }
        else if(results[0].label=="bell"){
            document.getElementById("bob").src = "aliens-01.png";
            document.getElementById("Alex").src = "aliens-02.png";
            document.getElementById("Jeffrey").src = "aliens-03.gif";
            document.getElementById("Theawewsomevihaan").src = "aliens-04.png";
        }
        else{
            document.getElementById("bob").src = "aliens-01.png";
            document.getElementById("Alex").src = "aliens-02.png";
            document.getElementById("Jeffrey").src = "aliens-03.png";
            document.getElementById("Theawewsomevihaan").src = "aliens-04.gif";

        }
       
        }

    

}


 