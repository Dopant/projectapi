$(function () {

    $('#addOilButton ').on('click',function (event) {
        event.preventDefault();
        var bus = document.getElementById('busdropdown');
        var busEngine = document.getElementById('engine');
        var busGear = document.getElementById('gearBox');
        var busBack = document.getElementById('backAxle');
        var busSteering = document.getElementById('steering');
        var busRemarks = document.getElementById('remarks');
        var oilTableBody = document.getElementById('oilTableBody');

        var $busdropdown = $('#busdropdown');
        var $engine =$('#engine');
        var $mileage = $('#mileage');
        var $gearBox = $('#gearBox');
        var $backAxle = $('#backAxle');
        var $date = $('#date');
        var $steering = $('#steering');
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
                        url:'/oil',
                        data: {
                            registry_no :$busdropdown.val(),
                            engine :$engine.val(),
                            mileage :$mileage.val(),
                            gear_box : $gearBox.val(),
                            back_axle : $backAxle.val(),
                            date : $date.val(),
                            steering : $steering.val(),
                            remarks: $remarks.val(),

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

                            var tableRow = document.createElement('tr');
                            // create a data column for each input data
                            // get the value in the partName element and create a new data cell
                            var busName = dataCell(bus.value);
                            tableRow.appendChild(busName);
                            var Engine = dataCell(busEngine.value);
                            tableRow.appendChild(Engine);
                            var Gear_box = dataCell(busGear.value);
                            tableRow.appendChild(Gear_box);
                            var Back_Axle = dataCell(busBack.value);
                            tableRow.appendChild(Back_Axle);
                            var Steering = dataCell(busSteering.value);
                            tableRow.appendChild(Steering);
                            var Remarks = dataCell(busRemarks.value);
                            tableRow.appendChild(Remarks);
                            oilTableBody.appendChild(tableRow);

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