$(function () {

    $('#reportSummaryButton ').on('click',function (event) {
        event.preventDefault();

        var reportSummaryTableBody = document.getElementById('reportSummaryTableBody');
        var from = document.getElementById('date1');
        var to = document.getElementById('date2');
        var itemType = document.getElementById('itemType');
        var itemName = document.getElementById('itemName');


        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $('#reportSummaryTableBody').html('');
                    $.ajax({
                        method: 'GET',
                        url:'/reportSummary',
                        data:{
                            'from':from.value,
                            'to':to.value,
                            'item_type': itemType.value,
                            'item' : itemName.value,
                        },
                        success: function (data){
                            console.log(data);
                            swal({
                                title: "Completed!",
                                text: "Success!",
                                icon: "success",
                                button: "ok",
                            });
                            for ( let i = 0 ; i < data.length; i++ ){

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

                                var date = dataCell(data[i].date);
                                tableRow.appendChild(date);
                                var type = dataCell(data[i].type);
                                tableRow.appendChild(type);
                                var transID = dataCell(data[i].criv_no);
                                tableRow.appendChild(transID);
                                var quantity = dataCell(data[i].quantity);
                                tableRow.appendChild(quantity);
                                var total = dataCell(data[i].total_cost);
                                tableRow.appendChild(total);
                                var company = dataCell(data[i].comp_bus);
                                tableRow.appendChild(company);
                                var person = dataCell(data[i].person);
                                tableRow.appendChild(person);
                                var station = dataCell(data[i].station);
                                tableRow.appendChild(station);
                                // inventoryTableBody.appendChild(tableRow);
                                $('#reportSummaryTableBody').append(tableRow);
                            }
                        },
                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The  request failed!", "error");
                        },
                    });

                } else {
                    swal("Your record was not submitted");
                }
            });
    });
});