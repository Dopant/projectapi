$(function () {

    $('#addMonthlyButton ').on('click',function (event) {
        event.preventDefault();
        var bus = document.getElementById('busdropdown');
        var busKm = document.getElementById('currentKm');
        var busFuelLitres = document.getElementById('fuelLitres');
        var busFuelLitresKm = document.getElementById('fuelLitresKm');
        var busOilLitres = document.getElementById('oilLitres');
        var busOilLitresKm = document.getElementById('oilLitresKm');
        var monthlyTableBody = document.getElementById('monthlyTableBody');

        busFuelLitresKm.value = ( busKm.value  / busFuelLitres.value );

        busOilLitresKm.value = ( busKm.value /  busOilLitres.value );

        var $busdropdown = $('#busdropdown');
        var $currentKm =$('#currentKm');
        var $fuelL = $('#fuelLitres');
        var $fuelLK = $('#fuelLitresKm');
        var $oilL = $('#oilLitres');
        var $oilLK = $('#oilLitresKm');
        var $date = $('#date');
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
                        url:'/monthly',
                        data: {
                            busdropdown :$busdropdown.val(),
                            currentKm :$currentKm.val(),
                            fuelL :$fuelL.val(),
                            fuelLk : $fuelLK.val(),
                            oilL : $oilL.val(),
                            oil : $oilLK.val(),
                            date : $date.val(),
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
                            var km = dataCell(busKm.value);
                            tableRow.appendChild(km);
                            var fuelLitres = dataCell(busFuelLitres.value);
                            tableRow.appendChild(fuelLitres);
                            var fuelLitresKm = dataCell(busFuelLitresKm.value);
                            tableRow.appendChild(fuelLitresKm);
                            var oilLitres = dataCell(busOilLitres.value);
                            tableRow.appendChild(oilLitres);
                            var oilLitresKm = dataCell(busFuelLitresKm.value);
                            tableRow.appendChild(oilLitresKm);
                            monthlyTableBody.appendChild(tableRow);

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