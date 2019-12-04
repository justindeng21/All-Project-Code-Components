console.log(JSON.parse(eventString));

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




//document.getElementById('')


// Script for event cards

  var event = JSON.parse(eventString);
  var numEvents = event.length;



for (var i = 0; i < numEvents; i++){
  var card = document.createElement("div");
  card.className = "card";

  var text =
                '<img src="../images/CU.png" alt="Event Image" style="width:100%">' +
                '<div class="container" name="' + i.toString() + '" id="info">' +
                  '<h4><b>' + event[i].eventName + '</b></h4>' +
                    '<p>' + event[i].eventDescription + '</p>' +
                '</div>' +

                '<button onclick="openModal()"> Click for details </button>';


  card.innerHTML = text;

  document.getElementById('eventCards').appendChild(card);

}


function openModal() {
  var name = document.getElementById("info").getAttribute("name");
  console.log(name);
    $(document).ready(function()
    {
        $("#eventWindow").modal('show');
    });
}











// '<div class="modal fade" id="eventWindow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
//     '<div class="modal-dialog" role="document">' +
//       '<div class="modal-content">' +
//         '<div class="modal-header">' +
//           '<h5 class="modal-title" id="eventTitle"></h5>' +
//           '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
//             '<span aria-hidden="true">&times;</span>' +
//           '</button>' +
//         '</div>' +
//         '<div class="modal-body">' +
//           '<p id='eventDescription'></p>' +
//           '<p id='date'></p>' +
//           '<p id='start'></p>' +
//           '<p id='stop'></p>' +
//         '</div>' +
//         '<div class="modal-footer">' +
//           '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
//         '</div>' +
//       '</div>' +
//     '</div>' +
//   '</div>';


// // Trigger/Open The Modal
// '<button id="myBtn">Open Modal</button>' +
//
// // The Modal
// '<div id="myModal" class="modal">' +
//
// // Modal content
// '<div class="modal-content">' +
// '<span class="close">&times;</span>' +
// '<p>Some text in the Modal..</p>' +
// '</div>' +
//
// '</div>';
