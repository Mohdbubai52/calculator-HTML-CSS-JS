function hello(num){
    
   // console.log(document.getElementById("number").value)
    var total =  num
    document.getElementById("cal-input").value += num;
   console.log(total);
}
function total()
{
    var total= document.getElementById("cal-input").value;
    result=eval(total );
    console.log(result);
    document.getElementById("cal-input").value =  result;
}
function cleaner()
{
    console.log("hellon inside")
    document.getElementById("cal-input").value = "";

}