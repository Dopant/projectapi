$(function () {

    $('#addButton ').on('click',function (event) {
        event.preventDefault();
        var $busReg = $('#busReg');
        var $engine =$('#engine');
        var $mileage = $('#mileage');
        var $gear = $('#gear');
        var $back = $('#back');
        var $date =$('#date');
        var $steering = $('#steering');
        var $remarks = $('#remarks');



        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        method: 'POST',
                        url:'/Oil',
                        data: {
                            busReg :$busReg.val(),
                            engine :$engine.val(),
                            mileage :$mileage.val(),
                            gear : $gear.val(),
                            back : $back.val(),
                            date : $date.val(),
                            steering : $steering.val(),
                            remarks: $remarks.val(),


                        },
                        success: function (value){
                            console.log(value);
                            swal({
                                title: "Completed!",
                                text: "Record Saved!",
                                icon: "success",
                                button: "ok",
                            });
                        },
                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The post request failed!", "error");
                        },
                    });
                } else {
                    swal("Your record was not submitted");
                }
            });
    });
});