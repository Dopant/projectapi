$(function () {

    $('#batteryDeleteButton ').on('click',function (event) {
        event.preventDefault();

        var $batteryName = $('#batterydropdown');


        var batteriesdelete = {
            battery : $batteryName.val(),

        };
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
                        url:'/batteriesdelete',
                        data: batteriesdelete,
                        success: function (value){
                            console.log(value);
                            swal({
                                title: "Completed!",
                                text: "Record Deleted!",
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