$(function () {

    $('#addTyreButton ').on('click',function (event) {
        event.preventDefault();
        var $busReg = $('#busReg');
        var $offDate =$('#offDate');
        var $offMileage = $('#offMileage');
        var $onDate = $('#onDate');
        var $onMileage = $('#onMileage');
        var $siv = $('#siv');
        var $makeTake = $('#makeTake');
        var $serialNumber = $('#serialNumber');
        var $totalMileage =$('#totalMileage');
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
                        url:'/Tyres',
                        data: {
                           busReg :$busReg.val(),
                            offDate :$offDate.val(),
                            offMileage :$offMileage.val(),
                            onDate : $onDate.val(),
                            onMileage : $onMileage.val(),
                            siv : $siv.val(),
                            makeTake : $makeTake.val(),
                            serialNumber : $serialNumber.val(),
                            totalMileage : $totalMileage.val(),
                            remarks : $remarks.val(),

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