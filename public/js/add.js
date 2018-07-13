$(function () {

    $('#addVehicleButton ').on('click',function (event) {
        event.preventDefault();

        var $registryNumber = $('#registry_no');
        var $Category = $('#busCategory');
        var $Type = $('#busType');

        var busAdd = {
            registry_no : $registryNumber.val(),
            category : $Category.val(),
            type : $Type.val(),
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
                        url:'/busadd',
                        data: busAdd,
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