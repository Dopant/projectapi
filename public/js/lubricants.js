$(function () {

    $('#addLubricantButton').on('click',function (event) {
        event.preventDefault();

        //get everybody first
        var lubricantName = document.getElementById('lubricantdropdown');
        var lubricantCost = document.getElementById('lubricantCost');
        var lubricantOuantity = document.getElementById('lubricantOuantity');
        var lubricantTotal = document.getElementById('lubricantTotal');
        var lubricantTableBody = document.getElementById('lubricantTableBody');
        var addLubricantButton = document.getElementById('addLubricantButton');
        var lubricantBus = document.getElementById('lubricantbus');

        //alter totals
        lubricantTotal.value = lubricantCost.value*lubricantOuantity.value;

        //i can get the values now

        var $lubricantdropdown = $('#lubricantdropdown');
        var $lubricant_quantity = $('#lubricantOuantity');
        var $lubricant_total = $('#lubricantTotal');
        var $lubricantbus = $('#lubricantbus');
        var $lubricantstation = $('#lubricantStation');
        var $lubricantdate = $('#lubricantDate');

        //store them and lets go!!
        var lubricant = {
            lubricantdropdown : $lubricantdropdown.val(),
            lubricant_quantity : $lubricant_quantity.val(),
            lubricant_total : $lubricant_total.val(),
            lubricantbus : $lubricantbus.val(),
            lubricantstation : $lubricantstation.val(),
            lubricantDate : $lubricantdate.val(),

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
                        url:'/lubricants',
                        data: lubricant,
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
                            var bus = dataCell(lubricantBus.value);
                            tableRow.appendChild(bus);

                            var name = dataCell(lubricantName.value);
                            tableRow.appendChild(name);

                            var cost = dataCell(lubricantCost.value);
                            tableRow.appendChild(cost);

                            var quantity = dataCell(lubricantOuantity.value);
                            tableRow.appendChild(quantity);

                            var total = dataCell(lubricantCost.value*lubricantOuantity.value);
                            tableRow.appendChild(total);

                            lubricantTableBody.appendChild(tableRow);
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