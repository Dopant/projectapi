
$( function (){
    let $ma = $('#ma');
$.ajax({
    type: "GET",
    url: 'http://localhost:3000/buslist',
    success: function (ma) {
        console.log('success', ma);
        $.each(ma, function(i,order){
            $ma.append('<li> Parts: '+ order.parts +',</li>');
        });
    }
});
});

let dropdown = $('#busdropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose Bus</option>');
dropdown.prop('selectedIndex', 0);

const url = 'http://localhost:3000/buslist';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.registry_no).attr('name',entry.registry_no).text(entry.registry_no));
    })
});

let dropdown1 = $('#typedropdown');

dropdown1.empty();

dropdown1.append('<option selected="true" disabled>Choose Maintenance type</option>');
dropdown1.prop('selectedIndex', 0);

const url1 = 'http://localhost:3000/maintenance_typelist';

// Populate dropdown with list of provinces
$.getJSON(url1, function (data) {
    $.each(data, function (key, entry) {
        dropdown1.append($('<option></option>').attr('value', entry.maintenance_type).attr('name',entry.maintenance_type).text(entry.maintenance_type));
    })
});

let dropdown2 = $('#partdropdown');

dropdown2.empty();

dropdown2.append('<option selected="true" disabled> Choose Part</option>');
dropdown2.prop('selectedIndex', 0);

const url2 = 'http://localhost:3000/partslist';

// Populate dropdown with list of provinces
$.getJSON(url2, function (data) {
    $.each(data, function (key, entry) {
        dropdown2.append($('<option></option>').attr('value', entry.parts).attr('name',entry.parts).text(entry.parts));
    })
});

let dropdown3 = $('#stationdropdown');

dropdown3.empty();

dropdown3.append('<option selected="true" disabled>Choose Station</option>');
dropdown3.prop('selectedIndex', 0);

const url3 = 'http://localhost:3000/stationlist';

// Populate dropdown with list of provinces
$.getJSON(url3, function (data) {
    $.each(data, function (key, entry) {
        dropdown3.append($('<option></option>').attr('value', entry.station).attr('name',entry.station).text(entry.station));
    })
});

let dropdown4 = $('#consumabledropdown');

dropdown4.empty();

dropdown4.append('<option selected="true" disabled>Choose Consumable</option>');
dropdown4.prop('selectedIndex', 0);

const url4 = 'http://localhost:3000/consumableslist';

// Populate dropdown with list of provinces
$.getJSON(url4, function (data) {
    $.each(data, function (key, entry) {
        dropdown4.append($('<option></option>').attr('value', entry.consumables).attr('name',entry.consumables).text(entry.consumables));
    })
});
