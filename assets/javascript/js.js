

$("#submit").click(function () {
  var name = $("#name").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  console.log(name, subject, message);

  var mailTo = `mailto:amanda.elisabet.jordan@gmail.com?subject=${subject}&body=${message}

  from: ${name}`

  $("#submit").attr("href", mailTo);

  console.log(mailTo);
})