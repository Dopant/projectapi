$(function () {

    $('#tyreAddButton ').on('click',function (event) {
        event.preventDefault();

        var $name = $('#name');
        var $number = $('#number');
        var $cardexNumber = $('#cardexNumber');
        var $cost = $('#cost');
        var $quantity = $('#quantity');

        var add = {
            tyre : $name.val(),
            tyres_no : $number.val(),
            cardex_no : $cardexNumber.val(),
            price : $cost.val(),
            quantity_in_stock : $quantity.val(),
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
                        url:'/storesTyreAdd',
                        data: add,
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