TAFFY.extend("avg",function (c) {
	// This runs the query or returns the results if it has already run
	this.context({
           results: this.getDBI().query(this.context())
    });
    // setup the sum
    var total = 0;
    // loop over every record in the results and sum up the column.
    TAFFY.each(this.context().results,function (r) {
		total = total + r[c];
        console.log(r[c]);
    })
    
    // divide the total by the number of records and return
    return total/(this.context().results.length);
});
