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

    
    
})