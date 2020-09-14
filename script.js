let attractions;
fetch('attractions.json')
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


