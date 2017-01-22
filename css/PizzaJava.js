/*========================
Add to Form Function
=========================*/

function myFunction(){
/*==========Size============================*/	
	var the_size;
	if(document.form1.size[0].checked){
		the_size=document.form1.size[0].value;
	}
	else if(document.form1.size[1].checked){
		the_size=document.form1.size[1].value;
	}
	else if(document.form1.size[2].checked){
		the_size=document.form1.size[2].value;
	}
	else if(document.form1.size[3].checked){
		the_size=document.form1.size[3].value;
	}
	// Add to Table
    document.getElementById("size2").innerHTML=the_size;

	var size_text;
	if(document.form1.size[0].checked){
		size_text=document.form1.size[0].id;
	}
	else if(document.form1.size[1].checked){
		size_text=document.form1.size[1].id;
	}
	else if(document.form1.size[2].checked){
		size_text=document.form1.size[2].id;
	}
	else if(document.form1.size[3].checked){
		size_text=document.form1.size[3].id;
	}
	// Add to Table
	document.getElementById("size1").innerHTML=size_text;
	
		
/*=====Cheese============================================*/

	var the_cheese;
	if(document.form1.cheese[0].checked){
		the_cheese=document.form1.cheese[0].value;
	}
	else if(document.form1.cheese[1].checked){
		the_cheese=document.form1.cheese[1].value;
	}
	else if(document.form1.cheese[2].checked){
		the_cheese=document.form1.cheese[2].value;
	}
	// Add to Table
    document.getElementById("cheese2").innerHTML=the_cheese;
	
	var cheese_text;
	if(document.form1.cheese[0].checked){
		cheese_text=document.form1.cheese[0].id;
	}
	else if(document.form1.cheese[1].checked){
		cheese_text=document.form1.cheese[1].id;
	}
	if(document.form1.cheese[2].checked){
		cheese_text=document.form1.cheese[2].id;
	}
	// Add to Table
	document.getElementById("cheese1").innerHTML=cheese_text;


/*=====Crust============================================*/	

	var the_crust;
	if(document.form1.crust[0].checked){
		the_crust=document.form1.crust[0].value;
	}
	else if(document.form1.crust[1].checked){
		the_crust=document.form1.crust[1].value;
	}
	else if(document.form1.crust[2].checked){
		the_crust=document.form1.crust[2].value;
	}
	else if(document.form1.crust[3].checked){
		the_crust=document.form1.crust[3].value;
	}
	else if(document.form1.crust[4].checked){
		the_crust=document.form1.crust[4].value;
	}
	// Add to Table
    document.getElementById("crust2").innerHTML=the_crust;
	
	var crust_text;
	if(document.form1.crust[0].checked){
		crust_text=document.form1.crust[0].id;
	}
	else if(document.form1.crust[1].checked){
		crust_text=document.form1.crust[1].id;
	}
	if(document.form1.crust[2].checked){
		crust_text=document.form1.crust[2].id;
	}
	if(document.form1.crust[3].checked){
		crust_text=document.form1.crust[3].id;
	}
	if(document.form1.crust[4].checked){
		crust_text=document.form1.crust[4].id;
	}
	// Add to Table
	document.getElementById("crust1").innerHTML=crust_text;

/*=====Sauce============================================*/

	var the_sauce;
	if(document.form1.sauce[0].checked){
		the_sauce=document.form1.sauce[0].value;
	}
	else if(document.form1.sauce[1].checked){
		the_sauce=document.form1.sauce[1].value;
	}
	else if(document.form1.sauce[2].checked){
		the_sauce=document.form1.sauce[2].value;
	}
	else if(document.form1.sauce[3].checked){
		the_sauce=document.form1.sauce[3].value;
	}
	// Add to Table
    document.getElementById("sauce2").innerHTML=the_sauce;

	var sauce_text;
	if(document.form1.sauce[0].checked){
		sauce_text=document.form1.sauce[0].id;
	}
	else if(document.form1.sauce[1].checked){
		sauce_text=document.form1.sauce[1].id;
	}
	else if(document.form1.sauce[2].checked){
		sauce_text=document.form1.sauce[2].id;
	}
	else if(document.form1.sauce[3].checked){
		sauce_text=document.form1.sauce[3].id;
	}
	// Add to Table
	document.getElementById("sauce1").innerHTML=sauce_text;
	
/*=====Meat============================================*/	
		
	var m1, i = 0;
	var mtotal = 0;
	var mnumber = 1;
	var mend = 0;
	while(m1 = document.getElementsByName("meats")[i++]) {
	if(m1.checked) { mtotal= mtotal + mnumber;
		mend = mtotal - mnumber;}
	}
	// Add to Table
	var mdiv = document.getElementById('meats2');
	mdiv.innerHTML = mend;
	
	
	
	var mlength =document.form1.meats.length;
	var mresult="";
	for(i=0; i<mlength; i++){
		var checkedM = document.form1.meats[i].checked;
		if(checkedM){
			mresult += document.form1.meats[i].id + ", ";
		}
	}
	// Add to Table				
	var mData = mresult;
	document.getElementById('meats1').innerHTML=mData;
	
/*=====Veggies============================================*/	
		
	var v1, i = 0;
	var vtotal = 0;
	var vnumber = 1;
	var vend = 0;
	while(v1 = document.getElementsByName("veggies")[i++]) {
	if(v1.checked) { vtotal= vtotal + vnumber;
		vend = vtotal - vnumber;}
	}
	// Add to Table
	var vdiv = document.getElementById('veggies2');
	vdiv.innerHTML = vend;
	
	var vlength =document.form1.veggies.length;
	var result="";
	for(i=0; i<vlength; i++){
		var checkedV = document.form1.veggies[i].checked;
		if(checkedV){
			result += document.form1.veggies[i].id + ", ";
		}
	}
	// Add to Tablee				
	var vData = result;
	document.getElementById('veggies1').innerHTML=vData;
	
	}
	
/*========================
Calculate Form Function
=========================*/	

function myCalc(){        

	var sum = 0; 
	var dataTable = document.getElementById("table1");
	var cells = document.querySelectorAll("th:nth-of-type(2)");

		for (var i = 0; i < cells.length; i++)
			sum+=parseFloat(cells[i].firstChild.data);
	// Add to Table
   var newRow = document.createElement("tr");

   // first cell
   var firstCell = document.createElement("td");
   var firstCellText = document.createTextNode("Total:");
	firstCell.appendChild(firstCellText);
	newRow.appendChild(firstCell);

   // second cell with sum
   var secondCell = document.createElement("td");
   var secondCellText = document.createTextNode(sum);
	secondCell.appendChild(secondCellText);
	newRow.appendChild(secondCell);

   // add row to table
	dataTable.appendChild(newRow);
   
   
   
}
	
	
	
	
		
	





