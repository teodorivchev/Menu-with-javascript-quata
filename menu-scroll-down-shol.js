jQuery('.navbar-top').addClass('original').clone().insertAfter('.navbar-top').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {

    var orgElementPos = jQuery('.original').offset();
    orgElementTop = orgElementPos.top;

    if (jQuery(window).scrollTop() >= (orgElementTop)) {

        orgElement = jQuery('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        jQuery('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        jQuery('.original').css('visibility', 'hidden');
    } else {

        jQuery('.cloned').hide();
        jQuery('.original').css('visibility', 'visible');
    }
}