$j = jQuery.noConflict();

var url,positionRegular,positionLS;
$j('.autolinker_link').each(function(index){
    url = decodeURIComponent(decodeURIComponent($j(this).attr('href')).replace('&amp;','&'));

    positionLS = url.indexOf('RD_PARM1=');
    positionRegular = url.indexOf('url=');

    if (positionLS !== -1) {
        $j(this).attr('href',url.substring(positionLS+9));
        $j(this).removeClass('autolinker_link');
    } else if (positionRegular !== -1) {
        $j(this).attr('href',url.substring(positionRegular+4));
        $j(this).removeClass('autolinker_link');
    }
});
