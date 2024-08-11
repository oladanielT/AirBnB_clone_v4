$(document).ready(function(){
    let checklist = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')){
            checklist[amenityId] = amenityName;
        } else {
            delete checklist[amenityId];
        }

        const amenityNames = Object.values(checklist).join(', ');
        $('.amenities h4').text(amenityNames);
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
        if (data.status === 'OK'){
            $('#api_status').addClass('available')
        } else {
            $('#api_status').removeClass('available')
        }
    })
})

