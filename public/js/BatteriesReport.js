/*

 */
$(function () {

    $('#batteryReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var batteryReportTableBody = document.getElementById('batteryReportTableBody');
        var bus = document.getElementById('batteriesBus');
        var batteryTotal = document.getElementById('batteryTotal');
        var batteryCost = 0;
        var from = document.getElementById('date7');
        var to = document.getElementById('date8');

        swal({
            title: "Confirm Request",
            text: "Click OK to confirm",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $('#batteryReportTableBody').html('');
                    $.ajax({
                        method: 'GET',
                        url:'/batteries',
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
                                    var batteries = dataCell(data[i].batteries);
                                    tableRow.appendChild(batteries);
                                    var quantity = dataCell(data[i].quantity);
                                    tableRow.appendChild(quantity);
                                    var date = dataCell(data[i].date);
                                    tableRow.appendChild(date);
                                    var total_cost = dataCell(data[i].total_cost);
                                    tableRow.appendChild(total_cost);

                                    batteryReportTableBody.appendChild(tableRow);

                                    batteryCost = batteryCost + data[i].total_cost;
                                }

                            }
                            batteryTotal.value = batteryCost;
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