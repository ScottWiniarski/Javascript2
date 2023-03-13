$('input[type=button]').on('submit', function(){
    let target = $(this).data('bs-target');
    let id = $(this).data('id');
    let id2 = $(this).id;
    let value= $(this).val();
    $(target).toggle('show');

})

/*
<button class="btn btn-info"
data-bs-toggle="modal"
:data-bs-target="'#'+ item.id"
v-on:click="edit">
    <i class="fas fa-minus-circle"></i> Edit?
</button>*/
