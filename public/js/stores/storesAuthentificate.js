/*

 */
$(function () {

    $('#intakeDischargeButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone
        swal("Write something here:", {
            content: "input",
        })

    .then((value) => {
        $.ajax({
            method: 'GET',
            url:'/storesAuthentificate',
            data:{
                'key':value,
            },
            success: function (data){

                window.location.href('/stores');
            },

            error: function (value) {
                //alert('Data sending Failed');
                swal("Oh No!", "The request failed!", "error");
            },
        });
           // swal(`You typed: ${value}`);
        });


    });
});