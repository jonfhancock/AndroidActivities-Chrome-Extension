jQuery.noConflict();
jQuery(document).ready(function(){
	var pack = getUrlVars()["id"];
	if(pack != undefined){
		jQuery.get('http://activities.droidicon.com/get-activities.php',{q:pack}, function(data) {
	    	showResults(data);
	    },"json");
	}
	
});
function showResults(data){
	jQuery.each(data, function(i,item){
		jQuery('#doc-description-container').prepend("<h3>"+item.formatted_activity+"</h3>");

    });	
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