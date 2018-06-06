var leapYear = function(year){
    return true;
};


$(function(){
  $("form#leap-year").submit(function(e){
    e.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });





});
