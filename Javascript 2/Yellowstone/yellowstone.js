
$('input[type=radio]').on('change', function(){
    let target = $(this).data('bs-target');
    let value= $(this).val();
    $(target).collapse(value);

    // else{
    //     $(target).collapse('hide');
    // }
})