$(function () {

    $('#addRepairsButton ').on('click',function (event) {
        event.preventDefault();

        var repairsTableBody = document.getElementById('repairsTableBody');
        var bus = document.getElementById('busdropdown');
        var busJobNumber = document.getElementById('jobNumber');
        var busNatureOfRepairs = document.getElementById('natureOfRepairs');
        var busLabour = document.getElementById('labour');
        var busMaterial = document.getElementById('material');
        let busTotal = document.getElementById('total');

        var $busReg = $('#busdropdown');
        var $jobNumber =$('#jobNumber');
        var $mileage = $('#mileage');
        var $material = $('#material');
        var $date = $('#date');
        var $labour = $('#labour');
        var $nature =$('#natureOfRepairs');
        var $total = $('#total');


        busTotal.value = +busLabour.value + +busMaterial.value;

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
                        url:'/repairs',
                        data: {
                            busdropdown :$busReg.val(),
                            jobNumber :$jobNumber.val(),
                            mileage : $mileage.val(),
                            material : $material.val(),
                            date : $date.val(),
                            labour : $labour.val(),
                            nature : $nature.val(),
                            total : $total.val(),


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
                            var jobNumber = dataCell(busJobNumber.value);
                            tableRow.appendChild(jobNumber);
                            var natureOfRepairs = dataCell(busNatureOfRepairs.value);
                            tableRow.appendChild(natureOfRepairs);
                            var labour = dataCell(busLabour.value);
                            tableRow.appendChild(labour);
                            var material = dataCell(busMaterial.value);
                            tableRow.appendChild(material);
                            var total = dataCell(busTotal.value);
                            tableRow.appendChild(total);

                            repairsTableBody.appendChild(tableRow);


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