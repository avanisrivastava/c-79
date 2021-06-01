nameofthedancearray=[];

function submit()
{
var dance_1=document.getElementById("dance1").value;
var dance_2=document.getElementById("dance2").value;
var dance_3=document.getElementById("dance3").value;
var dance_4=document.getElementById("dance4").value;

nameofthedancearray.push(dance_1);
nameofthedancearray.push(dance_2);
nameofthedancearray.push(dance_3);
nameofthedancearray.push(dance_4);

console.log(nameofthedancearray);

document.getElementById("display_name").innerHTML=nameofthedancearray;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block"
}
function sort(){
nameofthedancearray.sort();
console.log(nameofthedancearray);
document.getElementById("display_name").innerHTML=nameofthedancearray;
}


