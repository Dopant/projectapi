$(function () {

    $('#monthlyReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var monthlyReportTableBody = document.getElementById('monthlyReportTableBody');
        var bus = document.getElementById('busdropdown');

        var from = document.getElementById('date1');
        var to = document.getElementById('date2');
        swal({
            title: "Confirm Request",
            text: "Click OK to confirm",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $('#monthlyReportTableBody').html('');
                    $.ajax({
                        method: 'GET',
                        url:'/controlMonthlyReport1',
                        data:{
                            'from':from.value,
                            'to':to.value,
                            'bus': bus.value,
                        },
                        success: function (data){
                            console.log(data);
                            swal({
                                title: "Completed!",
                                text: "Success!",
                                icon: "success",
                                button: "ok",
                            });
                            for ( let i =0 ; i < data.length; i++ ){
                                if ( bus.value == data[i].registry_no){
                                    function dataCell(value){
                                        var cell = document.createElement('td');
                                        var text = document.createTextNode(value);
                                        cell.appendChild(text);
                                        return cell;
                                    }


                                    var tableRow = document.createElement('tr');
                                    // create a data column for each input data
                                    // get the value in the partName element and create a new data cell

                                    var registry_no = dataCell(data[i].registry_no);
                                    tableRow.appendChild(registry_no);
                                    var mileage = dataCell(data[i].current_mileage);
                                    tableRow.appendChild(mileage);
                                    var cumMileage = dataCell(data[i].cumulative_mileage);
                                    tableRow.appendChild(cumMileage);
                                    var fuel = dataCell(data[i].fuel);
                                    tableRow.appendChild(fuel);
                                    var fuelRate = dataCell(data[i].fuel_rate);
                                    tableRow.appendChild(fuelRate);
                                    var oil = dataCell(data[i].oil);
                                    tableRow.appendChild(oil);
                                    var oilRate = dataCell(data[i].oil_rate);
                                    tableRow.appendChild(oilRate);
                                    var date = dataCell(data[i].date);
                                    tableRow.appendChild(date);

                                    monthlyReportTableBody.appendChild(tableRow);
                                }

                            }

                        },

                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The request failed!", "error");
                        },
                    });
                } else {
                    swal("Your request was cancelled");
                }
            });
    });
});