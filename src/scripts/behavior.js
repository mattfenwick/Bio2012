
$(document).ready(function() {

	// whenever somebody clicks on 'button1', we want the stats to be recalculated and displayed
    $("#button1").click(function() {

            // this is a jQuery selector:  it finds the DOM element with id = 'protein'
        var sequence = $("#protein").val(),
            // this grabs some data from our model
            aaPercs = model.getAAPercentages(sequence),
            aa,
            // this jQuery selector gets the 'tbody' element of the element with id = 'AminoTable'
            tbody = $("#AminoTable tbody");
        
        // get rid of the old data ...
        tbody.empty();
        // and and in the new
        for(aa in aaPercs) {
        	// make one row for each amino acid
            tbody.append("<tr><td>" + aa + "</td><td>" + aaPercs[aa] + "</td></tr>");
        }
    });
    
});