guest_array=[]
function submit(){
    for(i=1;i<=4;i++){
name_guest=document.getElementById("name_of_the_guest_"+i).value;
guest_array.push(name_guest)
console.log (guest_array)
}
for(b=0;b<=3;b++){
document.getElementById("display_name_with_commas").innerHTML+=guest_array[b]+"<br>";
}
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"

}
function sorting(){
    guest_array.sort()
    for(b=0;b<=3;b++){
        document.getElementById("display_name_without_commas").innerHTML+=guest_array[b]+"<br>";

}

}