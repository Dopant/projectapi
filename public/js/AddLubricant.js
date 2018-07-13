$(function () {

    $('#lubricantAddButton ').on('click',function (event) {
        event.preventDefault();

        var $lubricantName = $('#lubricantName');
        var $lubricantCost = $('#lubricantCost');

        var lubricantAdd = {
            lubricant : $lubricantName.val(),
            price : $lubricantCost.val(),
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
                        url:'/lubricantsadd',
                        data: lubricantAdd,
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