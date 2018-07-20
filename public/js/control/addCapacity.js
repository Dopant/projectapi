$(function () {

    $('#particularsAddButton ').on('click',function (event) {
        event.preventDefault();

        var $busdropdown =$('#busdropdown1');
        var $engine_ = $('#engine_');
        var $gear = $('#gear');
        var $black = $('#black');
        var $radiator = $('#radiator');
        var $fuel = $('#fuel');

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
                        url:'/capacities',
                        data: {
                            busdropdown :$busdropdown.val(),
                            engine_ :$engine_.val(),
                            gear : $gear.val(),
                            black : $black.val(),
                            radiator : $radiator.val(),
                            fuel : $fuel.val(),

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