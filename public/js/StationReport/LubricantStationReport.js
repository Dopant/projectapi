/*

 */
$(function () {

    $('#lubricantReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var lubricantReportTableBody = document.getElementById('lubricantReportTableBody');
        var Station = document.getElementById('lubricantStation');
        var lubricantTotal = document.getElementById('lubricantTotal');
        var lubricantCost = 0;
        var from = document.getElementById('date9');
        var to = document.getElementById('date10');

        swal({
            title: "Confirm Request",
            text: "Click OK to confirm",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        method: 'GET',
                        url:'/lubricants',
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

                                if ( Station.value == data[i].station){

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
                                    var station = dataCell(data[i].station);
                                    tableRow.appendChild(station);
                                    var lubricants = dataCell(data[i].lubricants);
                                    tableRow.appendChild(lubricants);
                                    var quantity = dataCell(data[i].quantity);
                                    tableRow.appendChild(quantity);
                                    var date = dataCell(data[i].date);
                                    tableRow.appendChild(date);
                                    var total_cost = dataCell(data[i].total_cost);
                                    tableRow.appendChild(total_cost);

                                    lubricantReportTableBody.appendChild(tableRow);

                                    lubricantCost = lubricantCost + data[i].total_cost;
                                }

                            }
                            lubricantTotal.value = lubricantCost;
                        },

                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The  request failed!", "error");
                        },
                    });
                } else {
                    swal("Your request was cancelled ");
                }
            });
    });
});