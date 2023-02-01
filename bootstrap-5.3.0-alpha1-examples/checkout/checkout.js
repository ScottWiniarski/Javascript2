console.log("Echo");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

$(`#shippingToPayment`).on("click", advance);

function advance(e){
  e.preventDefault();
  var sel = $('#nav-profile-tab')
  bootstrap.Tab.getOrCreateInstance(sel).show();
  console.log(sel);
  console.log(bootstrap.Tab.getOrCreateInstance(sel));
  //Needed to select every tag

  //$('#nav-profile').show();
}

$(`#pay-to-cart`).on("click", advanceTwo);

function advanceTwo(e){
  e.preventDefault();
  var sel = $('#nav-contact-tab')
  bootstrap.Tab.getOrCreateInstance(sel).show();
}

$(".navigation").click(function(){
  $("#nav-contact-tab").show("");
})

/*$(".navigation").click(advance{
  var selected = $("#btn-primary").tabIndex("option", "selected");
  $("#nav-tab").
});*/
