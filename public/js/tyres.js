$(function () {


    $('#addTyreButton').on('click',function (event) {
        event.preventDefault();

        //get everybody first
        var tyreName = document.getElementById('tyredropdown');
        var tyreCost = document.getElementById('tyreCost');
        var tyreOuantity = document.getElementById('tyreOuantity');
        var tyreTotal = document.getElementById('tyreTotal');
        var tyreTableBody = document.getElementById('tyreTableBody');
        var addTyreButton = document.getElementById('addTyreButton');
        var tyreBus = document.getElementById('tyrebus');

        //alter totals
        tyreTotal.value = tyreCost.value*tyreOuantity.value;

        //i can get the values now

        var $tyredropdown = $('#tyredropdown');
        var $tyre_quantity = $('#tyreOuantity');
        var $tyre_total = $('#tyreTotal');
        var $tyrebus = $('#tyrebus');
        var $tyrestation = $('#tyreStation');
        var $tyredate = $('#tyreDate');

        //store them and lets go!!
        var tyre = {
            tyredropdown : $tyredropdown.val(),
            tyre_quantity : $tyre_quantity.val(),
            tyre_total : $tyre_total.val(),
            tyrebus : $tyrebus.val(),
            tyrestation : $tyrestation.val(),
            tyreDate : $tyredate.val(),

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
                        url:'/tyres',
                        data: tyre,
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
                            var bus = dataCell(tyreBus.value);
                            tableRow.appendChild(bus);

                            var name = dataCell(tyreName.value);
                            tableRow.appendChild(name);

                            var cost = dataCell(tyreCost.value);
                            tableRow.appendChild(cost);

                            var quantity = dataCell(tyreOuantity.value);
                            tableRow.appendChild(quantity);

                            var total = dataCell(tyreCost.value*tyreOuantity.value);
                            tableRow.appendChild(total);

                            tyreTableBody.appendChild(tableRow);
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