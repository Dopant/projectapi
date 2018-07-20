$(function () {

    /*
       get everyone first
        */



    $('#addTyreButton ').on('click',function (event) {
        event.preventDefault();

        var tyreTableBody = document.getElementById('tyreTableBody');

        var bus = document.getElementById('busdropdown');
        var tyreBrand = document.getElementById('tyredropdown');
        var tyreDateFixed = document.getElementById('fittedOnDate');
        var tyreDateChanged = document.getElementById('takenOffDate');
        var tyreMileageFixed = document.getElementById('mileageFixed');
        var tyreMileageRemoved = document.getElementById('mileageRemoved');

        var $busdropdown = $('#busdropdown');
        var $jobCard = $('#jobCard');
        var $tyredropdown =$('#tyredropdown');
        var $serial_no = $('#serialNumber');
        var $onDate = $('#fittedOnDate');
        var $onMileage = $('#mileageFixed');
        var $offDate = $('#takenOffDate');
        var $offMileage = $('#mileageRemoved');
        var $totalMileage =$('#totalMileage');
        var $remarks = $('#remarks');



        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        method: 'POST',
                        url:'/tyres_control',
                        data: {
                            busdropdown : $busdropdown.val(),
                            jobCard : $jobCard.val(),
                            tyredropdown :$tyredropdown.val(),
                            serialNumber : $serial_no.val(),
                            onDate :$onDate.val(),
                            onMileage : $onMileage.val(),
                            offDate : $offDate.val(),
                            offMileage : $offMileage.val(),
                            totalMileage : $totalMileage.val(),
                            remarks : $remarks.val(),

                        },
                        success: function (value){
                            console.log(value);
                            swal({
                                title: "Completed!",
                                text: "Record Saved!",
                                icon: "success",
                                button: "ok",
                            });

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
                            var registry_no = dataCell(bus.value);
                            tableRow.appendChild(registry_no);
                            var brand = dataCell(tyreBrand.value);
                            tableRow.appendChild(brand);
                            var dateFixed = dataCell(tyreDateFixed.value);
                            tableRow.appendChild(dateFixed);
                            var dateChanged = dataCell(tyreDateChanged.value);
                            tableRow.appendChild(dateChanged);
                            var mileageFixed = dataCell(tyreMileageFixed.value);
                            tableRow.appendChild(mileageFixed);
                            var mileageRemoved = dataCell(tyreMileageRemoved.value);
                            tableRow.appendChild(mileageRemoved);

                            tyreTableBody.appendChild(tableRow);
                        },
                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The post request failed!", "error");
                        },
                    });
                } else {
                    swal("Your record was not submitted");
                }
            });
    });
});