var leapYear = function(year){
  if (year % 100 === 0){
      return false;
  }else if (year % 4 === 0){
    return true;
  }else {
    return false;
  }
};


$(function(){
  $("form#leap-year").submit(function(e){
    e.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });





});
