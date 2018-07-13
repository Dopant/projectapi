$(function () {

    $('#particularsAdd ').on('click',function (event) {
        event.preventDefault();

        var $vehicle = $('#vehicle');
        var $engine = $('#engine');
        var $chasis = $('#chasis');
        var $make = $('#make');
        var $permissible = $('#permissible');
        var $nett = $('#nett');
        var $person = $('#person');
        var $amortised = $('#amortised');
        var $rate = $('#rate');
        var $annual = $('#annual');
        var $indent = $('#indent');
        var $suppliers = $('#suppliers');
        var $date_purchased = $('#date_purchased');
        var $price = $('#price');
        var $cost = $('#cost');
        var $total = $('#total');
        var $date_written = $('#date_written');
        var $date_sold = $('#date_sold');
        var $amount_sold = $('#amount_sold');


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
                        url:'/Particulars',
                        data: {
                            vehicle : $vehicle.val(),
                            engine : $engine.val(),
                            chasis : $chasis.val(),
                            make  : $make.val(),
                            permissible: $permissible.val(),
                            nett : $nett.val(),
                            person : $person.val(),
                            amortised :$amortised.val(),
                            rate:$rate.val(),
                            annual:$annual.val(),
                            indent:$indent.val(),
                            suppliers:$suppliers.val(),
                            date_purchased:$date_purchased.val(),
                            price :$price.val(),
                            cost :$cost.val(),
                            total :$total.val(),
                            date_written :$date_written.val(),
                            date_sold :$date_sold.val(),
                            amount_sold: $amount_sold.val(),


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