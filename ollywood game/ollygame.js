$(document).ready(function(){
let str = $('.ollycross').text();

// login close btn
$('.closebtn').on('click',function(e){
         $('#Loginform').addClass('d-none');      
         $('#loginbtn').show();
         if($(e.target).closest('div[id="#rules"]'))
           { 
              $('#rules').hide();
              timecall();
              $('.movieimages > img').first().removeClass('d-none');
              $('.inputarea').removeClass('d-none');
              $('.pageno').removeClass('d-none');
           } 
});



// move to the next page
let nextpage = () => {
   if(i<=10)
  {

   //pages increments
   $('.incre').children().last().text(`<${i}/10>`);
   i++;

    while(j<=imgname.length)
    {
     $('.movieimages > img').not('.d-none').addClass('d-none');
     $(imgname[j]).removeClass('d-none');
      break;
    }
     j++;
  
   $('input[type="text"]').val("");
   $('#chanceleft').text(3);
   $('.hintleft').text(3);
    clearInterval(setid);
    timecall();
  } 
  else{
    $('.movieimages').hide();
    $('.inputarea').hide();
    $('.pageno').hide();
    $('#card').removeClass('d-none');
    $('.marks').text(`Score: ${score}`);
    if(score>=8)
      $('.greeting').text('Awesome!!');
    else if(score>=4)
      $('.greeting').text('Well Done!!');
    else 
    $('.greeting').text('Try Again!!');
    clearInterval(setid);
  } 
}



let popup = () => {
   $('.movieimages').addClass('blur');
      $('#nochanceleft').css('visibility','visible').delay(2000).fadeOut('slow', function() {
         $('.movieimages').removeClass('blur');
         $('#nochanceleft').css({'visibility':'hidden','display':""});
           nextpage();
    });
}



//changes after clicking next buttons
let i=2,score=0;
let imgname = [...$('.movieimages > img:not(:first)')], j=0,k=0;
$('.nextbtn').on('click',function(e){ 

let answer = $('input[type="text"]').val();
let chleft = $('#chanceleft').text();

if(answer.length)
{
  answer = answer.replace(/\s+/g," ");
  answer = answer.trim();
//checking correct answer
if((answer.toUpperCase() === movies.get(array[j]).toUpperCase()))
 {
   score+=1;
   nextpage();
 }
 else{

    $('input[type="text"]').animate({color:'#dc3545', 'font-weight':900},"fast",function(){
      $('input[type="text"]').animate({color:'#343a40','font-weight':400},"fast");
    });


   //if answer is incorrec, effect should be made
    if(chleft>0)
    {  
       $('#chanceleft').text(--chleft);
    }
    if(chleft === 0)
    {
      $('#chanceleft').text(chleft);
      $('#nochanceleft').find('h5').text(`${movies.get(array[j])}`);
      popup();
    }
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
    $('#nochanceleft').find('h5').text("Time out");
    popup();
    return;
  }
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0'+ seconds : seconds; 
  countdown.innerHTML = `${minutes}:${seconds}`;
  time--; 
}


//Correct answer
//store the src of images
let array=[];
imgname.forEach( (item,i) =>
{
  array.push((($(item).attr('src').split('/'))[1].split('.'))[0]);
});
array = ['pic1',...array];

//map() 
let movies = new Map([
  [array[0],'La La Land'],
  [array[1],'Tangled'],
  [array[2],'Life of PI'],
  [array[3],'Amar Akbar Anthony'],
  [array[4],'Parasite'],
  [array[5],'Mary Kom'],
  [array[6],'Forrest Gump'],
  [array[7],'Incredibles'],
  [array[8],'Whiplash'],
  [array[9],'Taare Zameen Par'],
  ]);



//Hint
let hleft=$('.hintleft').text();
$('.hint').on('click',function(){
  if(hleft>0)
    $('.hintleft').text(--hleft);
  else
    alert("no more hint left");
});



$('.restart').on('click',function(e){
    location.reload();
});

});
