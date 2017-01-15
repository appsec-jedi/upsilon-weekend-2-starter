var displayedStudent = 0;
var currentStudent = 0;

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      showStudent(currentStudent);
    }
  });

  $('.people').on('click', function() {
    currentStudent = $(this).attr('id');
    console.log(currentStudent);

    showStudent(currentStudent);
  });

  $('#nextButton').on('click', function() {
    console.log("Next button was clicked");
    $('highlighted').removeClass();
    if (currentStudent<16) {
      currentStudent = Number(currentStudent) +1;
      showStudent(currentStudent);
    } else {
      currentStudent = 0;
      showStudent(currentStudent);
    }


  });

  $('#previousButton').on('click', function() {
    console.log("Previous button was clicked");
    $('highlighted').removeClass();
    if (currentStudent>0) {
      currentStudent = Number(currentStudent) -1;
      showStudent(currentStudent);
    } else {
      currentStudent = 16;
      showStudent(currentStudent);
    }
  });

    function showStudent(currentStudent) {
      $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
          $('.highlighted').removeClass('highlighted');
          console.log("GET /data returns", data);
          // $('#stage').fadeOut('slow');
          $('#stage').empty();
          displayedStudent = data[currentStudent];
          console.log(displayedStudent);
          // $('#stage').fadeIn('slow');
          appendDom(displayedStudent);
          $('#'+currentStudent).addClass('highlighted');
          }
        });
      }
      function appendDom(data){
        var $studentDiv = $('<div class="student"></div>');
        $studentDiv.append('<h2>' + data.name + '</h2>');
        $studentDiv.append('<p>' + data.githubUserName + '</p>');
        $studentDiv.append('<p>' + data.shoutout + '</p>');

        $('#stage').append($studentDiv);
      };

});

// nextStudent(currentStudent);

// function nextStudent(currentStudent) {
//   $.ajax({
//     type: "GET",
//     url: "/data",
//     success: function(data){
//       $('.highlighted').removeClass('highlighted');
//       if(currentStudent<16){
//         console.log(currentStudent);
//         currentStudent = Number(currentStudent) +1;
//         console.log(currentStudent);
//         $('#stage').empty();
//         displayedStudent = data[currentStudent];
//         appendDom(displayedStudent);
//         $('#'+currentStudent).addClass('highlighted');
//       } else {
//         currentStudent=0;
//         $('#stage').empty();
//         displayedStudent = data[currentStudent];
//         appendDom(displayedStudent);
//         $('#'+currentStudent).addClass('highlighted');
//       };
//     }
//   });
// }

// prevStudent(currentStudent);
//
// function prevStudent(currentStudent) {
//   $.ajax({
//     type: "GET",
//     url: "/data",
//     success: function(data){
//       $('.highlighted').removeClass('highlighted');
//       if(currentStudent>0){
//         console.log(currentStudent);
//         currentStudent = Number(currentStudent) - 1;
//         console.log(currentStudent);
//         $('#stage').empty();
//         displayedStudent = data[currentStudent];
//         appendDom(displayedStudent);
//         $('#'+currentStudent).addClass('highlighted');
//       } else {
//         currentStudent=16;
//         $('#stage').empty();
//         displayedStudent = data[currentStudent];
//         appendDom(displayedStudent);
//         $('#'+currentStudent).addClass('highlighted');
//       };
//     }
//   });
// }
