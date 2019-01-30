/// получаем массив кнопок 

var monthbtns = document.getElementsByClassName("month");
var monthbtnstoArr = Array.from(monthbtns);

/// массив названий кнопок

const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/// назначем тексту кнопке значение соответствующего месяца

months.forEach(function(month, index){
    monthbtns.item(index).textContent = month;
});

/// присоединяем listener к кнопкам , который при нажатии на кнопку с опреедленным месяцем :  очищает окно активностей, подгружает акивности  ,  передает кнопку  в функцию loadactivitytodocument()

monthbtnstoArr.forEach(function(monthbtn){
    monthbtn.addEventListener("click", function(){
    console.log("clicked me");
    clearactivities();
    loadactivitytodocument(monthbtn);

    });
});

/// ----


///----   получить  JSON как JS  Объект   (сделано с помощью JQuery т.к. было удобно)

var items = null;
var items2 = [];

$.getJSON("https://dl.dropboxusercontent.com/s/rvz2q36x05wt8gz/calendardata.json?dl=0", function(data) {
  items = data;
  items.forEach(function(item, index) {

console.log(item);

    items2.push(item);
  });
 
});

/// ----



/// загружает данные на страничку в список  с id list

function loadactivitytodocument(monthbtn){    // если значение поля месяц совпадает с именем кнопки то перебираем любой массив из активностей, и присоединяем к списку новые строки li
 
 items2.forEach(function (item){

   var space = " ";

    if(item["month"] === monthbtn.textContent)       
     {
       for(var i=0; i<item["activities"].length; i++){

       var sumactivity = item.dates[i] + space +  item.times[i] + space + item.activities[i];
         
          $('#list').append('<li class="act">' + sumactivity  +  '</li>');
       }
    }
 });
}

///---


/// убирает активности из документа.

function clearactivities(){
 $('.act').remove(); 
}


alert("script connected");
    



