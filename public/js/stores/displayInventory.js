$(function () {

    $('#displayAllInventory ').on('click',function (event) {
        event.preventDefault();
        var inventoryTableBody = document.getElementById('inventoryTableBody');
        swal({
            title: "Are you sure?",
            text: "Once entered, you will not be able to alter this submission!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $('#inventoryTableBody').html('');
                    $.ajax({
                        method: 'GET',
                        url:'/checkApi',
                        success: function (data){
                            console.log(data);
                            swal({
                                title: "Completed!",
                                text: "Success!",
                                icon: "success",
                                button: "ok",
                            });
                            for ( let i = 0 ; i < data.length; i++ ){

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
                                    var item = dataCell(data[i].name);
                                    tableRow.appendChild(item);
                                    var number = dataCell(data[i].no);
                                    tableRow.appendChild(number);
                                    var cardex = dataCell(data[i].cardex);
                                    tableRow.appendChild(cardex);
                                    var price = dataCell(data[i].price);
                                    tableRow.appendChild(price);
                                    var quantity = dataCell(data[i].quantity);
                                    tableRow.appendChild(quantity);
                                   // inventoryTableBody.appendChild(tableRow);
                                     $('#inventoryTableBody').append(tableRow);
                            }
                        },
                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The  request failed!", "error");
                        },
                    });

                } else {
                    swal("Your record was not submitted");
                }
            });
    });
});