let event = [
  "Book Club",
  "Fight Club",
  "Free ice cream",
  "Meeting for Catholics against seedless Watermelon",
  "Meeting for Catholics for seedless Watermelon",
  "Catholic civil war",
  "Library of Alexander RP at Norlin",
  "I really can't think of more events"
];

function clearResult() {
  let ul = document.getElementById("myUL");
  $(ul).each(function(index) {
    ul.removeChild(this);
  });
}

function constructSearch(event) {
  clearResult();
  console.log("Construct events database");
  let ul = document.getElementById("myUL");
  if (event.length() == 0) {
    let a = document.getElementById("a");
    a.innerHTML = "We couldn't retrieve the events database";
    ul.appendChild(a);
    return;
  }
  for (i = 0; i < event.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let a = document.createElement("a");
    a.classList.add("results");
    a.innerHTML = event[i];
    console.log(event[i]);
    li.appendChild(a);
  }
}
function toggleResult(r, open) {
  if (r.className != "results") {
    console.log(r.className + "Not Results class");
    return;
  }
  if ((open && r.id == "open") || (!open && r.id == "close")) {
    return;
  }
  if (open) {
    r.style.display = "";
    r.id = "open";
    let state = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (state >= 100) {
        clearInterval(id);
        // console.log("Opened");
      } else {
        state++;
        r.style.width = state + "%";
        r.style.height = 30 * (state / 100) + "px";
      }
    }
    return;
  } else {
    r.id = "close";
    let state = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (state >= 100) {
        r.style.display = "none";
        clearInterval(id);
        // console.log("Closed");
      } else {
        state++;
        r.style.width = 100 - state + "%";
        r.style.height = 30 * (1 - state / 100) + "px";
      }
    }
    return;
  }
}

function updateSearchResults(page) {
  let filter = document.getElementById("myInput");
  filter = filter.value;
  // console.log(filter);
  let reg = new RegExp(filter.toLowerCase());
  let res = document.getElementsByClassName("results");
  for (i = 0; i < res.length; i++) {
    txt = res[i].innerHTML.toLowerCase();
    match = txt.match(reg);
    if (match != null) {
      // console.log("open");
      toggleResult(res[i], true);
    } else {
      // console.log("close");
      toggleResult(res[i], false);
    }
  }
}

function orderQueue() {}
