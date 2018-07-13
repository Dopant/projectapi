

$(function(){
    //for maintenance
    var $busdrop = $('#busdropdown');
    var $date = $('#date');
    var $type = $('#typedropdown');
    var $station = $('#stationdropdown');
    var $contract = $('#extra_contract');
    var $milleage = $('#current_milleage');




    $('#maintenance_save ').on('click',function (event) {

        event.preventDefault();
        var maintenance = {
            bus_dropdown: $busdrop.val(),
            date: $date.val(),
            type_dropdown: $type.val(),
            station_dropdown: $station.val(),
            extra_contract: $contract.val(),
            current_milleage: $milleage.val(),

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
                        url:'/maintenance',
                        data: maintenance,
                        success: function (value){
                            console.log(value);
                            //alert('Record Saved');
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







