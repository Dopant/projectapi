/*

 */
$(function () {

    $('#consumableReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var consumableReportTableBody = document.getElementById('consumableReportTableBody');
        var bus = document.getElementById('consumableBus');
        var consumableTotal = document.getElementById('consumableTotal');
        var consumableCost = 0;
        var from = document.getElementById('date3');
        var to = document.getElementById('date4');

        swal({
            title: "Confirm Request",
            text: "Click OK to confirm",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $('#consumableReportTableBody').html('');
                    $.ajax({
                        method: 'GET',
                        url:'/consumables',
                        data:{
                            'from':from.value,
                            'to':to.value,
                        },
                        success: function (data){
                            console.log(data);
                            swal({
                                title: "Completed!",
                                text: "Success!",
                                icon: "success",
                                button: "ok",
                            });
                            console.log(data);
                            for ( let i = 0 ; i < data.length; i++ ){

                                if ( bus.value == data[i].registry_no){

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
                                    var registry_no = dataCell(data[i].registry_no);
                                    tableRow.appendChild(registry_no);
                                    var consumables = dataCell(data[i].consumables);
                                    tableRow.appendChild(consumables);
                                    var quantity = dataCell(data[i].quantity);
                                    tableRow.appendChild(quantity);
                                    var date = dataCell(data[i].date);
                                    tableRow.appendChild(date);
                                    var total_cost = dataCell(data[i].total_cost);
                                    tableRow.appendChild(total_cost);

                                    consumableReportTableBody.appendChild(tableRow);

                                    consumableCost = consumableCost + data[i].total_cost;
                                }

                            }
                            consumableTotal.value = consumableCost;
                        },

                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The  request failed!", "error");
                        },
                    });
                } else {
                    swal("Your request was cancelled");
                }
            });
    });
});