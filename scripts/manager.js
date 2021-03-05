let data2;
let time=[];
let title=[];
let note=[];
let hu=[];
let i=0;
let b=[];
let bas='<table>'+'<tr>'+'<th>'+"時間"+'</th>'+'<th>'+"標題"+'</th>'+'<th>'+"備註"+'</th>'+'<th>'+"已報名人數"+'</th>'+'</tr>';
function preload(){
  data2=loadJSON('https://spreadsheets.google.com/feeds/list/1ahCsxN9NJ5kCurS6WRCXBNzhjq_29_1yMMTOr0BnZrQ/od6/public/values?alt=json')
  data1=loadJSON('https://spreadsheets.google.com/feeds/list/18t2EPSZbO8YNYMfURJBci1M8qSj2X_DmkgE8m49Y6sw/od6/public/values?alt=json')
}
function setup() {
  data2.feed.entry.forEach((c)=>{
    time.push([c.gsx$時間戳記.$t])  
    title.push([c.gsx$subject.$t]) 
    note.push([c.gsx$description.$t])
    note.push([c.gsx$description.$t])
    hu.push([c.gsx$負責人人數.$t])
    })
  len=time.length
  let fti=time.flat(Infinity);
  let ftt=title.flat(Infinity);
  let fno=note.flat(Infinity);
  let fhu=hu.flat(Infinity);
  document.write('<h3><a href = "min.html">回首頁</a></h3>')
  
  while( i<len ) {
    b[i] = document.createElement("input");
    b[i].type = 'button';
    b[i].id = 'btn' + i;
    b[i].value = "報名負責人"; 
   document.write(bas+'<tr>'+'<td>' + fti[i] + '</td>'+'<td>' + ftt[i] + '</td>'+'<td>' + fno[i] + '</td>'+'<td>' + fhu[i] + '</td>'+'</tr>'+'</table>'); 
    document.body.appendChild(b[i]); 
    b[i].onclick = function () {
     
    }
　i++;
   }
 
 
 console.log(b[0])
}                
function draw() {

}