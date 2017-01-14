$(document).ready(function(){
  var displayedStudent = 0;
  var currentStudent = 0;
  // var people = {};


  $('.people').on('click', function() {
    var index = $(this).attr('id');
    currentStudent = Number(index - 1);
    console.log(index);
    console.log(currentStudent);

    showStudent(currentStudent);

    function showStudent(currentStudent) {
      $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
          console.log("GET /data returns", data);
          $('#stage').fadeOut('slow');
          $('#stage').empty();
          displayedStudent = data[currentStudent];
          console.log(displayedStudent);
          $('#stage').fadeIn('slow');
          appendDom(displayedStudent);
          }
        });
      }
      $('#nextButton').on('click', function() {
        console.log("Next button was clicked");
        nextStudent(currentStudent);
      })
      function nextStudent(currentStudent) {
        $.ajax({
          type: "GET",
          url: "/data",
          success: function(data){
            // console.log("GET /data returns", data);
            console.log("previous student is", currentStudent);
            $('#stage').fadeOut('slow');
            $('#stage').empty();
            currentStudent = currentStudent + 1;
            displayedStudent = data[currentStudent];
            console.log("new student is", currentStudent)
            $('#stage').fadeIn('slow');
            appendDom(displayedStudent);
            }
          });
        }
        $('#previousButton').on('click', function() {
          console.log("Previous button was clicked");
          previousStudent(currentStudent);
        })
        function previousStudent(currentStudent) {
          $.ajax({
            type: "GET",
            url: "/data",
            success: function(data){
              // console.log("GET /data returns", data);
              console.log("previous student is", currentStudent);
              $('#stage').fadeOut('slow');
              $('#stage').empty();
              currentStudent = currentStudent - 1;
              displayedStudent = data[currentStudent];
              console.log("new student is", currentStudent);
              $('#stage').fadeIn('slow');
              appendDom(displayedStudent);
              }
            });
          }

    });
});



function appendDom(data){
  var $studentDiv = $('<div class="student"></div>');
  $studentDiv.append('<h2>' + data.name + '</h2>');
  $studentDiv.append('<p>' + data.githubUserName + '</p>');
  $studentDiv.append('<p>' + data.shoutout + '</p>');

  $('#stage').append($studentDiv);
};
