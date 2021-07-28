$(document).ready(function(){
$('#chicago').click(function(){
    $('#movieHide').slideToggle();
    $('#life').text('Night Life in Chicago');
    $('#life2').text('5.90$');

});
$('#chucky').click(function(){
    $('#movieHide').slideToggle();
    $('#life').text('Chucky');
    $('#life2').text('3.90$');

});
$('#homeAlone').click(function(){
    $('#movieHide').slideToggle();
    $('#life').text('Home Alone');
    $('#life2').text('4.90$');

});
$('#maryJane').click(function(){
    $('#movieHide').slideToggle();
    $('#life').text('Being Mary Jane');
    $('#life2').text('6.90$');

});
$('#popcorn').click(function(){
    $('#movieHide').slideToggle();
    $('#life').text('PopCorn City');
    $('#life2').text('4.90$');

});
$('#thugLife').click(function(){
    $('#movieHide').slideToggle();
    $('#life').text('Thug Life');
    $('#life2').text('8.90$');

});

});

$(document).ready(function(){
    $('#myModal').modal('hide');
});


function validate() {
    var myTime = document.getElementById('time').value;
    var myAge = document.getElementById('age').value;
    var myQuality = document.getElementById('quality').value;
    // var quality = document.getElementById('first').value;
    // var quality = document.getElementById('second').value;
    // var quality = document.getElementById('third').value;
    // var quality = document.getElementById('fourth').value;
    if (myTime != '' && myAge != '' && myQuality != '') {

        swal(
             'Ticket Booked!',
           'Please keep time!',
         "success");
    }
    else{ 
         return false;
    
        }
       

}
