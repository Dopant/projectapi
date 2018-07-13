$(function () {

    $('#addButton ').on('click',function (event) {
        event.preventDefault();
        var $busReg = $('#busReg');
        var $jobNumber =$('#jobNumber');
        var $mileage = $('#mileage');
        var $material = $('#material');
        var $offDate = $('#offDate');
        var $labour = $('#labour');
        var $nature =$('#nature');
        var $total = $('#total');



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
                        url:'/Repairs',
                        data: {
                            busReg :$busReg.val(),
                            jobNumber :$jobNumber.val(),
                            mileage :$mileage.val(),
                            material : $material.val(),
                            offDate : $offDate.val(),
                            labour : $labour.val(),
                            nature : $nature.val(),
                            total : $total.val(),


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