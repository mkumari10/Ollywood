
//Login btn
$('#loginbtn').on('click',function(e){
   e.preventDefault();
   $(e.target).hide();
   let toShow = $(this).attr('href');
   $(toShow).removeClass('d-none');
});



//login close btn
$('.closebtn').on('click',function(e){
         $('#Loginform').addClass('d-none');      
         $('#loginbtn').show();
         $('#rules').removeClass('col-sm-6 d-inline d-flex-column justify-content-center position-absolute rulepop');                  
});


//Start button in login form
$('#start').on('click',function(e){
   if($('input[name="pic"]:checked').attr('id') === 'catoname')
   	$('#start').attr('href','r');
   else
   	$('#start').attr('href','Pictures.html');    
});