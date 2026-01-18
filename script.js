function startcelebration() {
    // For (  let  i=0; i<20; i++)
{
    let balloon = document.createElement("div");
    balloon.style.left  = Math.random() * 100 + "%";
    balloon.classList.add("balloon");
    balloon.style.backgroundColor = getRandomColor();
    document.getElementById("balloons").appendChild(balloon);
    setTimeout(() => balloon.remove() , 4000 );
}
alert("🎉 Make a Wiah and have the best day ever!");
}
 
function getRandomColor(){
    const colors = ["#ff4e50", "#f9d423" , "#ff6f61" , "#e1bee7" , "#81d4fa"];
    return colors [Math,  floor (Math.random()*colors.length)];
}