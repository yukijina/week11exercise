// No.5
$('.1stBtn').click(function() {
  $('img').show();
})

$('.2ndBtn').click(function() {
  $('img').hide();
})

// No.6
$('.3rdBtn').click(function() {
  $('img').toggle();
})

// No.9
$('.4thBtn').click(function() {
  $('img').fadeToggle('300');
})

// No.10
$('img').hover(function(){
  $(this).prop('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFMcb5MhcXWquxTpxqIn_giNIMPptds2cse2jAP-tkEmIDLukrw');
}, function(){
  $(this).prop('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ASomZFcAu3yKocogPUoP4KGInUb6Zkp7nPxZwyM3ZXaaMu8s');
});

// No.12
$('.liBtn').click(function() {
  var newList = 'whale'
  $('ul').append('<li>' + newList)
})

//additonal No.4
$('ul').hover(function() {
  $(this).css({'color': 'lightblue', 'font-size': '2rem'})
})

// No.14
// $('.lastBtn').click(function() {
//   $('body').css('background-color', 'tomato');
// });

var colors = ['red', 'blue', 'green', 'yellow'], // the color choices
index = 0; //index of the current color

$('.lastBtn').click(function() {
  $('body').css('background-color', colors[index]);
  index = (index + 1) % colors.length; //increment index to point to the next color (if it goes beyond the length of the colors array get it back to 0 using the nodulo%)
});
//https://stackoverflow.com/questions/43285552/how-to-change-background-color-multiple-times-with-one-button-only-javascript-p


// addional No.2
$('h1').click(function(){
  $(this).fadeToggle('slow');
})
