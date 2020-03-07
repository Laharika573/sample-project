//function loadjson(file,callback){
//	var xhr=new XMLHttpRequest();
 //   xhr.overrideMimeType("application/json");
 //   xhr.open("GET",file,true);
//    xhr.onreadystatechange=function(){
//    	if(xhr.readyState===4 && xhr.status===200){
//    	}
//};
//}
//loadjson("data.json",function (text){
//    var data=JSON.parse(text);
    //console.log(data);
  //  basics(data.details);
//})

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
})
var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	img.alt="picture";
	ch.appendChild(img);
	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="laharikakonathala@gmail.com";
	email.textContent="laharikakonathala@gmail.com";
	ch.appendChild(email);
	var num=document.createElement("no");
	num.textContent=det.no;
	ch.appendChild(num);
	var add=document.createElement("p");
	add.textContent=det.address;
	ch.appendChild(add);
}