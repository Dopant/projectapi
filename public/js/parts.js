$(function () {

    $('#addPartButton ').on('click',function (event) {
        event.preventDefault();

        //get everybody first
        var partName = document.getElementById('partdropdown');
        var partCost = document.getElementById('partCost');
        var partOuantity = document.getElementById('partOuantity');
        var partTotal = document.getElementById('partTotal');
        var partTableBody = document.getElementById('partTableBody');
        var addPartButton = document.getElementById('addPartButton');
        var partBus = document.getElementById('partbus');

        //alter totals
        partTotal.value = partCost.value*partOuantity.value;

        //i can get the values now

        var $partdropdown = $('#partdropdown');
        var $part_quantity = $('#partOuantity');
        var $part_total = $('#partTotal');
        var $partbus = $('#partbus');
        var $partstation = $('#partStation');
        var $partdate = $('#partDate');


        //store them and lets go!!
        var part = {
            partdropdown : $partdropdown.val(),
            part_quantity : $part_quantity.val(),
            part_total : $part_total.val(),
            partbus : $partbus.val(),
            partstation : $partstation.val(),
            partDate : $partdate.val(),

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
                        url:'/parts',
                        data: part,
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
                                var bus = dataCell(partBus.value);
                                tableRow.appendChild(bus);

                                var name = dataCell(partName.value);
                                tableRow.appendChild(name);

                                var cost = dataCell(partCost.value);
                                tableRow.appendChild(cost);

                                var quantity = dataCell(partOuantity.value);
                                tableRow.appendChild(quantity);

                                var total = dataCell(partCost.value*partOuantity.value);
                                tableRow.appendChild(total);

                                partTableBody.appendChild(tableRow);
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