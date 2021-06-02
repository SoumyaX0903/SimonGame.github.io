let colors=["red","blue","yellow","green"];
let gamePattern=[];
let userpat=[];
let level=0;
function nextsequence()
{
    let rand=Math.floor(Math.random()*(4-1+1))+1;
    let chosencolor=colors[rand-1];
    gamePattern.push(chosencolor);
    doanimation(chosencolor);
    makesound(chosencolor);
    level++;
    $("h1").html("Level "+Number(level));

}
$(".btn").on("click",function(){
    let x=$(this).attr("id");
   doanimation(x);
   userpat.push(x);
   makesound(x);
   checkans(userpat.length-1);
});
function doanimation(x)
{
   let ob= $("#"+x);
   ob.addClass("scaledown");
    setTimeout(()=>
    {
        ob.removeClass("scaledown");
    },100)
}
function makesound(x)
{
    let t="sounds/"+x+".mp3";
    let au=new Audio(t);
    au.play();
}
$(".myButton").on("click",function()
{
    nextsequence();
    $(".myButton").addClass("vis");
})
function checkans(curr)
{
    if(gamePattern[curr]===userpat[curr])
    {
        if(gamePattern.length==userpat.length)
        {
            userpat=[];
            setTimeout(function()
            {
                nextsequence();
            },1000);
        }
    }
    else
    {
        let au=new Audio("sounds/wrong.mp3");au.play();
    $("body").addClass("makered");
    setTimeout(()=>{
    $("body").removeClass("makered");},200);
    $("h1").html("Game Over! You've reached Level "+Number(level));
    gamePattern=[];userpat=[];level=0;
    $(".myButton").removeClass("vis");
    }

}