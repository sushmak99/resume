function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("applicastion/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status== "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
})/* converted the data to be displayed in content frame from JSON to JS*/
var right=document.querySelector(".content");
function career(car){
  console.log(car.info);
  var h3=document.createElement("h3");
  h3.textContent="Career Objective";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  right.appendChild(p);
}/* to convert the content file converted above to a html file*/
function education(edu){
  var h3=document.createElement("h3");
  h3.textContent="EDUCATION";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
}
