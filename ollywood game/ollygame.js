$(document).ready(function(){

//resizing the window
$(window).resize(function(){
  var windowsize = $(window).width();
  if(windowsize>992){
  $('#rules').removeClass('col-sm-6 d-inline d-flex-column justify-content-center position-absolute rulepop');
} 
});

   
   //rules and card popup div
$('.score').on('click',function(e){
    let show = $(e.target).attr('href');
    if(show === "#rules")
     { 
      $(show).addClass('col-sm-6 d-inline d-flex-column position-absolute rulepop');
      $('body').not('.rulepop').css('background-color','rgba(255,255,255,0.8)');
     }
    else if(show === "#card")
       $(show).addClass('cardpop');   
});


// move to the next page
let nextpage = () => {
   if(i<=10)
  {

   //pages increments
   $('.incre').children().last().replaceWith(`<h5 class="d-sm-inline ml-auto d-none"><${i}/10></h5>`);
   i++;

  //images changes
 // let moviearr = iterator(imgname);
   for(let i in imgname){
       imgname[i];
   }
    while(j<=imgname.length)
    {
     $('.movieimages > img').not('.d-none').addClass('d-none');
     $(imgname[j]).removeClass('d-none');
      break;
    }
     j++;

   $('input[type="text"]').val("");
   $('#chanceleft').text(5);
   $('.hintleft').text(3);
    clearInterval(setid);
    timecall();
  }  
}




//changes after clicking next buttons
let i=2;
let imgname = [...$('.movieimages > img:not(:first)')], j=0;

$('.nextbtn').on('click',function(e){ 

let answer = $('input[type="text"]').val();
let chleft = $('#chanceleft').text();


//checking correct answer
if((answer.toUpperCase() === movies.get(array[j]).toUpperCase()))
 {
   nextpage();
 }
 else{
    if(chleft>0)
    {  
       $('#chanceleft').text(--chleft);
       console.log(chleft);
    }
    if(chleft === 0)
    {
      $('#chanceleft').text(chleft);
      alert('Opps you loss');
      nextpage();
    }
 }
});

//timer
let time,setid;
const countEl = document.getElementById('countdown');
let timecall = () => {
time=60;
setid = setInterval(updatecountdown, 1000);}
function updatecountdown(){ 
  if(time<0)
  {  
    clearInterval(setid);
    nextpage();
    return;
  }
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0'+ seconds : seconds; 
  countdown.innerHTML = `${minutes}:${seconds}`;
  time--; 
}
timecall();
//Correct answer
//store the src of images
let array=[];
imgname.forEach( (item,i) =>
{
  array.push((($(item).attr('src').split('/'))[1].split('.'))[0]);
});
array= ['pic1',...array];

//map() 
let movies = new Map([
  [array[0],'La La Land'],
  [array[1],'La'],
  [array[2],'L'],
  [array[3],'a'],
  [array[4],'b'],
  [array[5],'c'],
  [array[6],'d'],
  [array[7],'e'],
  [array[8],'f'],
  [array[9],'LaLa'],
  ]);



//Hint
let hleft=$('.hintleft').text();
$('.hint').on('click',function(){
  if(hleft>0)
    $('.hintleft').text(--hleft);
  else
    alert("no more hint left");
});


});
