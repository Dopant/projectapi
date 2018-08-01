$(function () {

    $('#particularsAdd ').on('click',function (event) {
        event.preventDefault();

        var $busdropdown = $('#busdropdown');
        var $engine = $('#engine');
        var $chasis = $('#chasis');
        var $make = $('#make');
        var $permissible = $('#permissible');
        var $net = $('#net');
        var $start_mileage = $('#start_mileage');
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
                        url:'/particulars',
                        data: {
                            registry_no : $busdropdown.val(),
                            engine_no : $engine.val(),
                            chasis_no : $chasis.val(),
                            make_and_year  : $make.val(),
                            gross_weight: $permissible.val(),
                            net_weight : $net.val(),
                            start_mileage : $start_mileage.val(),
                            persons_allowed : $person.val(),
                            amortised_life : $amortised.val(),
                            rate_of_depreciation : $rate.val(),
                            annual_licence : $annual.val(),
                            invoice_no : $indent.val(),
                            suppliers : $suppliers.val(),
                            date_purchased : $date_purchased.val(),
                            price_paid : $price.val(),
                            cost_of_bodywork : $cost.val(),
                            total_cost : $total.val(),
                            date_written_off : $date_written.val(),
                            date_sold_or_dismantled : $date_sold.val(),
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