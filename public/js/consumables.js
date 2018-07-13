$(function () {



    $('#addConsumableButton ').on('click',function (event) {
        event.preventDefault();

        var consumableName = document.getElementById('consumabledropdown');
        var consumableCost = document.getElementById('consumableCost');
        var consumableOuantity = document.getElementById('consumableOuantity');
        var consumableTotal = document.getElementById('consumableTotal');
        var consumableTableBody = document.getElementById('consumableTableBody');
        var addConsumableButton = document.getElementById('addConsumableButton');
        var consumableBus = document.getElementById('consumablebus');

        consumableTotal.value = consumableCost.value*consumableOuantity.value;

        var $consumabledropdown = $('#consumabledropdown');
        var $consumable_quantity = $('#consumableOuantity');
        var $consumable_total = $('#consumableTotal');
        var $consumablebus = $('#consumablebus');
        var $consumablestation = $('#consumableStation');
        var $consumabledate = $('#consumableDate');




        var consumable = {
            consumabledropdown : $consumabledropdown.val(),
            consumable_quantity : $consumable_quantity.val(),
            consumable_total : $consumable_total.val(),
            consumablebus : $consumablebus.val(),
            consumablestation : $consumablestation.val(),
            consumableDate : $consumabledate.val(),

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
                        url:'/consumables',
                        data: consumable,
                        success: function (value){
                            console.log(value);
                            swal({
                                title: "Completed!",
                                text: "Record Saved!",
                                icon: "success",
                                button: "ok",
                            });

                            //the code


                            function dataCell(value){
                                var cell = document.createElement('td');
                                var text = document.createTextNode(value);
                                cell.appendChild(text);
                                return cell;
                            }

                                // create a table row to hold the new data inputted
                                var tableRow = document.createElement('tr');
                                // create a data column for each input data
                                // get the value in the partName element and create a new data cell
                                var bus = dataCell(consumableBus.value);
                                tableRow.appendChild(bus);
                                var name = dataCell(consumableName.value);
                                tableRow.appendChild(name);
                                var cost = dataCell(consumableCost.value);
                                tableRow.appendChild(cost);
                                var quantity = dataCell(consumableOuantity.value);
                                tableRow.appendChild(quantity);
                                var total = dataCell(consumableCost.value*consumableOuantity.value);
                                tableRow.appendChild(total);

                                consumableTableBody.appendChild(tableRow);
                            //the code
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