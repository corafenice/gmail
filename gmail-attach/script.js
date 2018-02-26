
// //to make button give alert
// function myFunction() {
//     document.getElementById("mySend").innerHTML =
//     "check attachment in email";
//     document.getElementById("mySend").style.font = "italic bold 20px arial,serif";
// }
//
// //to unclick button
// if (i === 10) {
//         var clicked = document.getElementById('i10');
//         clickedButton.push(click.textContent);
//         clicked.style.color = "pink";
// }

window.addEventListener('load',function() {
  let submitButton1 = document.getElementById('mySend');
  let submitButton2 = document.getElementById('mySend2');

  submitButton1.addEventListener('click', function() {
    let textField = document.getElementById('box').value;
    let nofile = document.getElementById('no-file').value;

    if (textField.indexOf("attach") !== -1) {
      if (nofile === "") {
      alert("Did you want to attach a file?");
  }}
});
  submitButton2.addEventListener('click', function() {
    let textField = document.getElementById('box').value;
    let nofile = document.getElementById('no-file').value;

    if (textField.indexOf("attach") !== -1) {
      if (nofile === "") {
      alert("Did you mean to attach a file?");
    }}
  });
});
