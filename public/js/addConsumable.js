$(function () {

    $('#consumableAddButton ').on('click',function (event) {
        event.preventDefault();

        var $consumableName = $('#consumableName');
        var $consumableCost = $('#consumableCost');

        var consumableAdd = {
            consumable : $consumableName.val(),
            price : $consumableCost.val(),
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
                        url:'/consumablesadd',
                        data: consumableAdd,
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