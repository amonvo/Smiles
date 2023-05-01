var badFace = " :-( ";
var neutralFace = " :-| ";
var smileFace = " :-) ";
var side = 15;
var r = 0, y = 1, g = side - 1 - r;

for (var i = 0 ; i < side ; i++) {

    for (var j = 0 ; j < r ; j++) {
        var smile = document.createElement("div");
        smile.innerText = badFace;
        smile.classList.add("face");
        smile.classList.add("b_face");
        document.getElementById("ctverec").appendChild(smile);
    }
    
    var smile = document.createElement("div");
    smile.innerText = neutralFace;
    smile.classList.add("face");
    smile.classList.add("n_face");
    document.getElementById("ctverec").appendChild(smile);
    
    for (var j = 0 ; j < g ; j++) {
        var smile = document.createElement("div");
        smile.innerText = smileFace;
        smile.classList.add("face");
        smile.classList.add("s_face");
        document.getElementById("ctverec").appendChild(smile);
    }

    r++; 
    g--;
}  