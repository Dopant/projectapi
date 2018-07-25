
$(function () {

    $('#tyreReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var tyreReportTableBody = document.getElementById('tyreReportTableBody');
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
                        url:'/controlTyreReport1',
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
                                    var Brand = dataCell(data[i].brand);
                                    tableRow.appendChild(Brand);
                                    var dateFixed = dataCell(data[i].fitted_on_date);
                                    tableRow.appendChild(dateFixed);
                                    var mileageFixed = dataCell(data[i].fitted_on_mileage);
                                    tableRow.appendChild(mileageFixed);
                                    var dateRemoved = dataCell(data[i].taken_off_date);
                                    tableRow.appendChild(dateRemoved);
                                    var mileageChanged = dataCell(data[i].taken_off_mileage);
                                    tableRow.appendChild(mileageChanged);
                                    var mileageInterval = dataCell(data[i].total_mileage);
                                    tableRow.appendChild(mileageInterval);

                                    tyreReportTableBody.appendChild(tableRow);
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
