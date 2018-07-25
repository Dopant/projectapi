$(function () {

    $('#search ').on('click',function (event) {
        event.preventDefault();

        var jobCard = document.getElementById('jobCard');
        var tyreUpdateTableBody = document.getElementById('tyreUpdateTableBody');

       // let inputClass = 'au-input au-input--full';


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
                        method: 'GET',
                        url:'/tyreSearch',
                        data: {
                            'jobCard': jobCard.value,
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

                            function dataCell(value){
                                var cell = document.createElement('td');
                                var input = document.createElement('input');
                                input.value = value;
                                cell.appendChild(input);
                                return cell;
                            }


                            function dataCell1(value){
                                var cell = document.createElement('td');
                                var input = document.createElement('input');
                                input.value = value;
                                input.id = 'mileageRemoved';
                                cell.appendChild(input);
                                return cell;
                            }



                            function dataCell2(value){
                                var cell = document.createElement('td');
                                var input = document.createElement('input');
                                input.type = 'date';
                                input.value = value;
                                input.id = 'dateRemoved';
                                cell.appendChild(input);
                                return cell;
                            }

                            function dataCell3(value){
                                var cell = document.createElement('td');
                                var input = document.createElement('input');
                                input.value = value;
                                input.id = 'mileageFixed';
                                cell.appendChild(input);
                                return cell;
                            }


                            // create a table row to hold the new data inputted
                                    var tableRow = document.createElement('tr');
                                    // create a data column for each input data
                                    // get the value in the partName element and create a new data cell

                                    var jobCardNumber = dataCell(data[0].job_card);
                                    tableRow.appendChild(jobCardNumber);
                                    var registry_no = dataCell(data[0].registry_no);
                                    tableRow.appendChild(registry_no);
                                    var Brand = dataCell(data[0].brand);
                                    tableRow.appendChild(Brand);
                                    var dateFixed = dataCell(data[0].fitted_on_date);
                                    tableRow.appendChild(dateFixed);
                                    var mileageFixed = dataCell3(data[0].fitted_on_mileage);
                                    tableRow.appendChild(mileageFixed);
                                    var dateRemoved = dataCell2(data[0].taken_off_date);
                                    tableRow.appendChild(dateRemoved);
                                    var mileageChanged = dataCell1(data[0].taken_off_mileage);
                                    tableRow.appendChild(mileageChanged);

                                    tyreUpdateTableBody.appendChild(tableRow);


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
/*
<td> <input class="au-input au-input--full" type="email" name="email" placeholder="data"></td>
                                <td><input class="au-input au-input--full" type="email" name="email" placeholder="data"></td>
                                <td> <input class="au-input au-input--full" type="date" name="email" placeholder="data"></td>
                                <td><input class="au-input au-input--full" type="date" name="email" placeholder="data"></td>
                                <td> <input class="au-input au-input--full" type="email" name="email" placeholder="data"></td>
                                <td><input class="au-input au-input--full" type="email" name="email" placeholder="data"></td>
                                <td><button class="au-btn au-btn--block au-btn--blue2">Update</button></td>
 */