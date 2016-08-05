$('#searchButton').click(function() {

var term = $('input[name=search]').val();
var numOfRec = $('input[name=records]').val();
var startYear = $('input[name=start]').val();
var endYear = $('input[name=end').val();

// console.log(term + 'search term=====');
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "7f1cc21797ae428ba6a8743d784aabec", 
 'q': term,
 'begin_date': startYear,
 'end_date': endYear
});
$.ajax({url: url, method: 'GET',})
.done(function(result) {
	var preview = $('<div>');




 console.log(result);
}).fail(function(err) {
 throw err;
});

return false;

});