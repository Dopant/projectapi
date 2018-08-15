$(function () {

    $('#addDischargeButton ').on('click',function (event) {
        event.preventDefault();

        var name = document.getElementById('itemName');
        var cost = document.getElementById('cost');
        var quantity = document.getElementById('quantity');
        var total = document.getElementById('total');

        total.value = cost.value * quantity.value;

        var dischargeTableBody = document.getElementById('dischargeTableBody');

        var $itemType = $('#itemType');
        var $transactionId = $('#transactionId');
        var $date = $('#date');
        var $bus = $('#busdropdown');
        var $person= $('#person');
        var $station = $('#stationdropdown');
        var $itemName = $('#itemName');
        var $itemCost = $('#cost');
        var $quantity = $('#quantity');
        var $total = $('#total');

        var dischargeAdd = {
            transaction_id : $transactionId.val(),
            item_type : $itemType.val(),
            item : $itemName.val(),
            unit_cost : $itemCost.val(),
            quantity :$quantity.val(),
            total_cost : $total.val(),
            registry_no : $bus.val(),
            person : $person.val(),
            station : $station.val(),
            date : $date.val(),
        };
        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                 //   let url = 'http://localhost:3000/checkapi';
                    let url = 'https://eng-api.herokuapp.com/checkapi';
                    fetch(url)
                        .then(
                            function(response) {
                                if (response.status !== 200) {
                                    console.warn('Looks like there was a problem. Status Code: ' +
                                        response.status);
                                    return;
                                }
                                response.json().then(function(data) {
                                    for (let i = 0; i < data.length; i++) {
                                        if (data[i].name === name.value){
                                            if (quantity.value > data[i].quantity){

                                                swal("OH SORRY, QUANTITY OF "+name.value+" AVAILABLE = " + data[i].quantity, "");


                                            }else {
                                                $.ajax({
                                                    method: 'POST',
                                                    url:'/storesDischargeRecord',
                                                    data: dischargeAdd,
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
                                                        // get the value in the partName element and creaste a new data cell
                                                        var items = dataCell(name.value);
                                                        tableRow.appendChild(items);

                                                        var costs = dataCell(cost.value);
                                                        tableRow.appendChild(costs);

                                                        var quantities = dataCell(quantity.value);
                                                        tableRow.appendChild(quantities);

                                                        var totals = dataCell(total.value);
                                                        tableRow.appendChild(totals);

                                                        dischargeTableBody.appendChild(tableRow);
                                                    },
                                                    error: function (value) {
                                                        //alert('Data sending Failed');
                                                        swal("Oh No!", "The post request failed!", "error");
                                                    },
                                                });
                                            }
                                        }
                                    }
                                });
                            }
                        )
                        .catch(function(err) {
                            console.error('Fetch Error -', err);
                        });

                } else {
                    swal("Your record was not submitted");
                }
            });
    });
});