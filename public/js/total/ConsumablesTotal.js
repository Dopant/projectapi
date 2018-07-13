/*

 */
$(function () {

    $('#consumableReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var consumableReportTableBody = document.getElementById('consumableReportTableBody');
        var consumableTotal = document.getElementById('consumableTotal');
        var from = document.getElementById('date1');
        var to = document.getElementById('date2');
        let overallTotal = 0;
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
                        url:'/consumables',
                        data:{
                            'from':from.value,
                            'to':to.value,
                        },
                        success: function (json){
                            console.log();
                            swal({
                                title: "Completed!",
                                text: "Success!",
                                icon: "success",
                                button: "ok",
                            });
                            //console.log(data);

                             const url = 'https://eng-api.herokuapp.com/buslist';
                            //const url = 'http://localhost:3000/buslist';

                            fetch(url)
                                .then(
                                    function(response) {
                                        if (response.status !== 200) {
                                            console.warn('Looks like there was a problem. Status Code: ' +
                                                response.status);
                                            return;
                                        }
                                        // Examine the text in the response
                                        response.json().then(function(data) {

                                            for (let i = 0; i < data.length; i++) {

                                                let busTotalCost = 0;
                                                let k = 1;

                                                for ( let j = 0 ; j < json.length; j++ ){

                                                    if ( json[j].registry_no === data[i].registry_no) {

                                                        busTotalCost = busTotalCost + json[j].total_cost;

                                                    }

                                                }

                                                if ( !(busTotalCost === 0)) {

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
                                                    var Number = dataCell(k);
                                                    tableRow.appendChild(Number);
                                                    k++;

                                                    var registry_no = dataCell(data[i].registry_no);
                                                    tableRow.appendChild(registry_no);

                                                    var total_cost = dataCell(busTotalCost);
                                                    tableRow.appendChild(total_cost);

                                                    consumableReportTableBody.appendChild(tableRow);

                                                    overallTotal = overallTotal + busTotalCost;

                                                }


                                            }
                                        });
                                    }
                                )
                                .catch(function(err) {
                                    console.error('Fetch Error -', err);
                                });


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