let valnm,valem,valpw;
let data1;
let nm=[],em=[],pw=[]
var i=0;
var o=document.getElementById("sign");
function preload(){
  btn= document.getElementById("submit");
  data1=loadJSON('https://spreadsheets.google.com/feeds/list/18t2EPSZbO8YNYMfURJBci1M8qSj2X_DmkgE8m49Y6sw/od6/public/values?alt=json')
  
}
function out(){
  var o=document.getElementById("sign");
  localStorage.removeItem('email');
  o.style.display='';
}
function show(obj, id){
  var o=document.getElementById("sign");
  user1=window.localStorage.getItem('email')
  if(user1==null){
    o.style.display='';
  }
  else{
    o.style.display='none';
  }
}
 function setup(){
    data1.feed.entry.forEach((b)=>{
    //nm.push([b.gsx$username.$t])
    em.push([b.gsx$email.$t])
    pw.push([b.gsx$password.$t])
   })
  //let fn = nm.flat(Infinity);
  let fe = em.flat(Infinity);
  let fp = pw.flat(Infinity);
  btn.addEventListener('click',()=>{
    //valnm= document.getElementById("username").value
    valem= document.getElementById("email").value
    valpw= document.getElementById("password").value
    //a=fn.indexOf(valnm) 
    b=fe.indexOf(valem) 
    c=fp.indexOf(valpw) 
    if(b>-1){
      if (b==c){    
        console.log("輸入成功")
        window.localStorage.setItem('email',valem)
        window.localStorage.setItem('password',valpw)
      }
      else{
        console.log("密碼錯誤")
      }
    }
   if(b==-1){
     console.log("輸入錯誤")
   }
})}
  

function draw(){}