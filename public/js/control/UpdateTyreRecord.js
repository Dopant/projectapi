$(function () {

    $('#updateTyreButton ').on('click',function (event) {
        event.preventDefault();
        let mileageInterval = 0;
        var newMileage = document.getElementById('mileageRemoved');
        var oldMileage = document.getElementById('mileageFixed');
        var jobCard = document.getElementById('jobCard');
        var newDate = document.getElementById('dateRemoved');

        var $mileageRemoved = $('#mileageRemoved');
        var $dateRemoved = $('#dateRemoved');
        var $jobNumber = $('#jobCard');

         mileageInterval = newMileage.value - oldMileage.value;


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
                        url:'/updateTyreRecord',
                        data: {
                            date : $dateRemoved.val(),
                            mileage : $mileageRemoved.val(),
                            jobCard : $jobNumber.val(),
                            mileageDiff : mileageInterval,

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