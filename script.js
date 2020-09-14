let attractions;
fetch('let attractions;
fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d7f28c1-b3cb-41cc-b1ab-c42f5b62beeb/attractions.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200914T153057Z&X-Amz-Expires=86400&X-Amz-Signature=ed74ce67beee91be4c32da4aff95200d577fbdd3a65066faae156bc63d4e6c71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22attractions.json%22')
.then(response=> response.json())
.then(data => {
	attractions = data;
	console.log(attractions);
})


function filterData(category) {
	let newResults = [];
	let filteredData = attractions.filter(function(e){
	 if (e.Category == category){
			newResults.push(e);
		};
	})
	newResults.sort(function(a,b){ return b.vistors - a.visitors});
	let finalResults = newResults.slice(0,5);
	console.log(finalResults);
	renderBarChart(finalResults);
}


var mySelect = document.getElementById('attraction-category');
mySelect.onchange = function() {
   var x = document.getElementById("attraction-category").value;
   console.log(x);
   if (x == "all"){
	attractions.sort(function(a,b){ return b.visitors - a.visitors});
	let allAttract = attractions.slice(0,5);
	renderBarChart(allAttract);
	}
	else{
   filterData(x); 
	}
 }


')
.then(response=> response.json())
.then(data => {
	attractions = data;
	console.log(attractions);
})


function filterData(category) {
	let newResults = [];
	let filteredData = attractions.filter(function(e){
	 if (e.Category == category){
			newResults.push(e);
		};
	})
	newResults.sort(function(a,b){ return b.vistors - a.visitors});
	let finalResults = newResults.slice(0,5);
	console.log(finalResults);
	renderBarChart(finalResults);
}


var mySelect = document.getElementById('attraction-category');
mySelect.onchange = function() {
   var x = document.getElementById("attraction-category").value;
   console.log(x);
   if (x == "all"){
	attractions.sort(function(a,b){ return b.visitors - a.visitors});
	let allAttract = attractions.slice(0,5);
	renderBarChart(allAttract);
	}
	else{
   filterData(x); 
	}
 }


