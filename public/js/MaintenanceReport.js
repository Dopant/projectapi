/*

 */
$(function () {

    $('#maintenanceReportButton ').on('click',function (event) {
        event.preventDefault();
        //get everyone

        var maintenanceReportTableBody = document.getElementById('maintenanceReportTableBody');
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
                        url:'/maintenance',
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
                                   var maintenance_type = dataCell(data[i].maintenance_type);
                                   tableRow.appendChild(maintenance_type);
                                   var station = dataCell(data[i].station);
                                   tableRow.appendChild(station);
                                   var current_milleage = dataCell(data[i].current_milleage);
                                   tableRow.appendChild(current_milleage);
                                   var extra_contract = dataCell(data[i].extra_contract);
                                   tableRow.appendChild(extra_contract);
                                   var date = dataCell(data[i].date);
                                   tableRow.appendChild(date);
                                   maintenanceReportTableBody.appendChild(tableRow);
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