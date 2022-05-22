function clearscreen()
{
    document.getElementById("result").value="";
}

function display(value)
{
    document.getElementById("result").value+=value;
}

function calculate()
{
    var res=document.getElementById("result").value;
var q=eval(res);
document.getElementById("result").value=q;

}