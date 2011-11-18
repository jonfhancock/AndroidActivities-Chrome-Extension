jQuery.noConflict();
jQuery(document).ready(function(){
	var pack = getUrlVars()["id"];
	if(pack != undefined){
		jQuery.get('http://activities.droidicon.com/get-activities.php',{q:pack}, function(data) {
	    	showResults(data);
	    },"json");
	}
	
//	jQuery('#doc-description-container').prepend("<h3>com_alphonso_pulse_mainactivity</h3>");
});
function showResults(data){
	jQuery.each(data, function(i,item){
		jQuery('#doc-description-container').prepend("<h3>"+item.formatted_activity+"</h3>");

    });	
	jQuery('#device-permissions-frag').append('<p>-----------------------------------------&gt;</p><p>Activity names brought to you by <a href="http://activities.droidicon.com">Android Activities</a></p>');
}
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}