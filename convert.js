$j = jQuery.noConflict();

var url;
$j('.autolinker_link').each(function(index){
    url = decodeURIComponent($j(this).attr('href'));
    $j(this).attr('href',url.replace('&amp;','&').slice(url.indexOf('url=')+4));
    $j(this).removeClass('autolinker_link');
});
