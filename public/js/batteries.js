$(function () {


    $('#addBatteriesButton').on('click',function (event) {
        event.preventDefault();

        //get everybody first
        var batteryName = document.getElementById('batterydropdown');
        var batteryCost = document.getElementById('batteryCost');
        var batteryOuantity = document.getElementById('batteryOuantity');
        var batteryTotal = document.getElementById('batteryTotal');
        var batteryTableBody = document.getElementById('batteryTableBody');
        var addBatteriesButton = document.getElementById('addBatteriesButton');
        var batteryBus = document.getElementById('batterybus');

        //alter totals
        batteryTotal.value = batteryCost.value*batteryOuantity.value;

        //i can get the values now

        var $batterydropdown = $('#batterydropdown');
        var $battery_quantity = $('#batteryOuantity');
        var $battery_total = $('#batteryTotal');
        var $batterybus = $('#batterybus');
        var $batterystation = $('#batteryStation');
        var $batterydate = $('#batteryDate');


        //store them and lets go!!
        var battery = {
            batterydropdown : $batterydropdown.val(),
            battery_quantity : $battery_quantity.val(),
            battery_total : $battery_total.val(),
            batterybus : $batterybus.val(),
            batterystation : $batterystation.val(),
            batteryDate : $batterydate.val(),

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
                        url:'/batteries',
                        data: battery,
                        success: function (value){
                            console.log(value);
                            //alert('Record Saved');
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
                            var bus = dataCell(batteryBus.value);
                            tableRow.appendChild(bus);

                            var name = dataCell(batteryName.value);
                            tableRow.appendChild(name);

                            var cost = dataCell(batteryCost.value);
                            tableRow.appendChild(cost);

                            var quantity = dataCell(batteryOuantity.value);
                            tableRow.appendChild(quantity);

                            var total = dataCell(batteryCost.value*batteryOuantity.value);
                            tableRow.appendChild(total);

                            batteryTableBody.appendChild(tableRow);
                            //the code end
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