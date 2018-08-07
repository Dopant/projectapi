$(function () {

    $('#dischargeReportButton ').on('click',function (event) {
        event.preventDefault();

        var dischargeReportTableBody = document.getElementById('dischargeReportTableBody');
        var from = document.getElementById('date1');
        var to = document.getElementById('date2');
        var itemType = document.getElementById('itemType');


        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $('#dischargeReportTableBody').html('');
                    $.ajax({
                        method: 'GET',
                        url:'/storesDischargeReport',
                        data:{
                            'from':from.value,
                            'to':to.value,
                            'item_type': itemType.value,
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
                                var transID = dataCell(data[i].transaction_id);
                                tableRow.appendChild(transID);
                                var item = dataCell(data[i].item);
                                tableRow.appendChild(item);
                                var quantity = dataCell(data[i].quantity);
                                tableRow.appendChild(quantity);
                                var total = dataCell(data[i].total_cost);
                                tableRow.appendChild(total);
                                var company = dataCell(data[i].registry_no);
                                tableRow.appendChild(company);
                                var person = dataCell(data[i].person);
                                tableRow.appendChild(person);
                                var station = dataCell(data[i].station);
                                tableRow.appendChild(station);
                                var date = dataCell(data[i].date);
                                tableRow.appendChild(date);
                                // inventoryTableBody.appendChild(tableRow);
                                $('#dischargeReportTableBody').append(tableRow);
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