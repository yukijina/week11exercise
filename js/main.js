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

// No.14
$('.lastBtn').click(function() {
  $('body').css('background-color', 'tomato');
});
