$(function () {

    $('#oilReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var oilReportTableBody = document.getElementById('oilReportTableBody');
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
                    $.ajax({
                        method: 'GET',
                        url:'/controlOilReport1',
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
                                    var engine = dataCell(data[i].engine);
                                    tableRow.appendChild(engine);
                                    var mileage = dataCell(data[i].mileage);
                                    tableRow.appendChild(mileage);
                                    var gearBox = dataCell(data[i].gear_box);
                                    tableRow.appendChild(gearBox);
                                    var backAxle = dataCell(data[i].back_axle);
                                    tableRow.appendChild(backAxle);
                                    var steering = dataCell(data[i].steering);
                                    tableRow.appendChild(steering);
                                    var date = dataCell(data[i].date);
                                    tableRow.appendChild(date);

                                    oilReportTableBody.appendChild(tableRow);
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