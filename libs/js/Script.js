	var fnameglobal = "";
	var lnameglobal = "";
	var jobtitleglobal = "";
	var emailglobal = "";
	var departmentNameglobal = "";
	var locationNameglobal = "";
	var departmentIDglobal = "";
	var personnelIDglobal = "";
	var radiobtnoptionglobal = "";
	var locationid2global = "";






$(document).ready(function() {
    $(document).on('submit', '#FormsubmitUpdateEntry1', function() {
      // do your things
      return false;
     });
       $(document).on('submit', '#FormsubmitUpdateEntry2', function() {
      // do your things
      return false;
     });
          $(document).on('submit', '#FormsubmitUpdateEntry3', function() {
      // do your things
      return false;
     });
      $(document).on('submit', '#formCreate1', function() {
      // do your things
      return false;
     });
     $(document).on('submit', '#formCreate2', function() {
      // do your things
      return false;
     });
     $(document).on('submit', '#formCreate3', function() {
      // do your things
      return false;
     });
});

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


searchEntries(this);

function searchEntries(obj) {

	 obj.disabled = true;
    setTimeout(function() {
        obj.disabled = false;
    }, 850);
	var storeresult = document.getElementById("mysearchBar").value.trim();
var node = document.getElementById("mycontainer2_2");


    while (node.firstChild) {
          node.removeChild(node.lastChild);
          }

if (document.getElementById('personnelRadio').checked) {
radiobtnoptionglobal = document.getElementById('personnelRadio').value; 
    $.ajax({
	url: "libs/php/getPersonnelEntriesFromSearch.php",
	type: "POST",
	dataType: "json",
	data: {
		searchResult: storeresult
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
			var innercontainer2 = document.getElementById("mycontainer2_2");

					var namepara1 = document.createElement("p");
					var emailpara2 = document.createElement("p");
					var locationpara3 = document.createElement("p");
					var departmentpara4 = document.createElement("p");
					var newRow = document.createElement("div");
					var newNameRow = document.createElement("div");
					var newEmailRow = document.createElement("div");
					var newLocationRow = document.createElement("div");
					var newDepartmentRow = document.createElement("div");
					newRow.setAttribute("class","row");
					newNameRow.setAttribute("class","col-md-3 col-4 padding-0");
					newEmailRow.setAttribute("class","col-md-3 emailCol");
					newLocationRow.setAttribute("class","col-md-3 col-4 padding-0");
					newDepartmentRow.setAttribute("class","col-md-3 col-4 padding-0");

					namepara1.innerHTML = "Name";
					emailpara2.innerHTML = "Email";
					locationpara3.innerHTML = "Location";
					departmentpara4.innerHTML = "Department";
					newNameRow.appendChild(namepara1);
					newEmailRow.appendChild(emailpara2);
					newLocationRow.appendChild(locationpara3);
					newDepartmentRow.appendChild(departmentpara4);
					newRow.appendChild(newNameRow);
					newRow.appendChild(newEmailRow);
					newRow.appendChild(newLocationRow);
					newRow.appendChild(newDepartmentRow);
					innercontainer2.appendChild(newRow);
	

				for(var i = 0; i < result['data'].length;i++) {

					var namepara1 = document.createElement("p");
					var emailpara2 = document.createElement("p");
					var locationpara3 = document.createElement("p");
					var departmentpara4 = document.createElement("p");
					var newRow = document.createElement("div");
					var newNameRow = document.createElement("div");
					var newEmailRow = document.createElement("div");
					var newLocationRow = document.createElement("div");
					var newDepartmentRow = document.createElement("div");

					newRow.setAttribute("class","row");
				    newRow.setAttribute("onclick",'showPopup( this,"'+result['data'][i]['id']+'", "'+result['data'][i]['firstName']+'","'+result['data'][i]['lastName']+'","'+result['data'][i]['jobTitle']+'","'+result['data'][i]['email']+'","'+result['data2'][i]['name']+'","'+result['data3'][i]['name']+'","'+result['data'][i]['departmentID']+'")');
					newRow.setAttribute("data-toggle","modal");
					newRow.setAttribute("data-target","#exampleModal");				
					newNameRow.setAttribute("class","col-md-3 col-4 padding-0");
					newEmailRow.setAttribute("class","col-md-3 emailCol");
					newLocationRow.setAttribute("class","col-md-3 col-4 padding-0");
					newDepartmentRow.setAttribute("class","col-md-3 col-4 padding-0");	


					emailpara2.style.textOverflow = "ellipsis";
					emailpara2.style.overflow = "hidden";
					namepara1.style.textOverflow = "ellipsis";
					namepara1.style.overflow = "hidden";
					locationpara3.style.textOverflow = "ellipsis";
					locationpara3.style.overflow = "hidden";	
					departmentpara4.style.textOverflow = "ellipsis";
					departmentpara4.style.overflow = "hidden";						


					namepara1.innerHTML = result['data'][i]['firstName'] + " " + result['data'][i]['lastName'];
					emailpara2.innerHTML = result['data'][i]['email'];
					locationpara3.innerHTML = result['data3'][i]['name'];
					departmentpara4.innerHTML = result['data2'][i]['name'];
					newNameRow.appendChild(namepara1);
					newEmailRow.appendChild(emailpara2);
					newLocationRow.appendChild(locationpara3);
					newDepartmentRow.appendChild(departmentpara4);
					newRow.appendChild(newNameRow);
					newRow.appendChild(newEmailRow);
					newRow.appendChild(newLocationRow);
					newRow.appendChild(newDepartmentRow);
					innercontainer2.appendChild(newRow);
				}

                    var container_1 = document.getElementById("mycontainer1");
					var para = document.createElement("p");
					para.setAttribute("class","entryResultNumber");

					  if ($(".entryResultNumber")[0]){
					   $(".entryResultNumber").css("display","block");
					   $(".entryResultNumber").html(result['data'].length + " entries returned");
					}
					else {
					para.innerHTML = result['data'].length + " entries returned";
					container_1.appendChild(para);
					}


					if(result['data'].length == 0 ){
                    let container_2 = document.getElementById("mycontainer2");
                    container_2.style.display="none";

					}
					else {
						let container_2 = document.getElementById("mycontainer2");
                        container_2.style.display = "flex";
                        var headerOffset = 85;
                        var elementPosition = container_2.getBoundingClientRect().top;
                        var offsetPosition = elementPosition - headerOffset;

                        window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                 });

					}
				
			}
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});
}
else if (document.getElementById('departmentRadio').checked) {
radiobtnoptionglobal = document.getElementById('departmentRadio').value; 
	    $.ajax({
	url: "libs/php/getDepartmentEntriesFromSearch.php",
	type: "POST",
	dataType: "json",
	data: {
		searchResult: storeresult
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
				var innercontainer2 = document.getElementById("mycontainer2_2");

					var depIDpara = document.createElement("p");
					var locationIDpara3 = document.createElement("p");
					var departmentpara4 = document.createElement("p");
					var newRow = document.createElement("div");
					var DepartmentIDRow = document.createElement("div");
					var locationIDRow = document.createElement("div");
					var newDepartmentRow = document.createElement("div");

					newRow.setAttribute("class","row");
					DepartmentIDRow.setAttribute("class","col-sm-4 col-4");	
					locationIDRow.setAttribute("class","col-sm-4 col-4");
					newDepartmentRow.setAttribute("class","col-sm-4 col-4");

					depIDpara.innerHTML = "ID";
					departmentpara4.innerHTML = "Department";
					locationIDpara3.innerHTML = "Location";

					DepartmentIDRow.appendChild(depIDpara);
					newDepartmentRow.appendChild(departmentpara4);
					locationIDRow.appendChild(locationIDpara3);

					newRow.appendChild(DepartmentIDRow);
					newRow.appendChild(newDepartmentRow);
					newRow.appendChild(locationIDRow);

					innercontainer2.appendChild(newRow);
			
				for(var i = 0; i < result['data'].length;i++) {

					var depIDpara = document.createElement("p");
					var locationIDpara3 = document.createElement("p");
					var departmentpara4 = document.createElement("p");
					var newRow = document.createElement("div");
					var DepartmentIDRow = document.createElement("div");
					var locationIDRow = document.createElement("div");
					var newDepartmentRow = document.createElement("div");

					newRow.setAttribute("class","row");
				    newRow.setAttribute("onclick",'showPopup2( this,"'+result['data'][i]['id']+'", "'+result['data'][i]['name']+'","'+result['data'][i]['locationID']+'","'+result['data2'][i]['name']+'","'+result['data3'][i]['COUNT(personnel.id)']+'")');
					newRow.setAttribute("data-toggle","modal");
					newRow.setAttribute("data-target","#exampleModal");	
					DepartmentIDRow.setAttribute("class","col-sm-4 col-4");	
					locationIDRow.setAttribute("class","col-sm-4 col-4");
					newDepartmentRow.setAttribute("class","col-sm-4 col-4");

					depIDpara.innerHTML = result['data'][i]['id'];
					departmentpara4.innerHTML = result['data'][i]['name'];
					locationIDpara3.innerHTML = result['data2'][i]['name'];

					DepartmentIDRow.appendChild(depIDpara);
					newDepartmentRow.appendChild(departmentpara4);
					locationIDRow.appendChild(locationIDpara3);

					newRow.appendChild(DepartmentIDRow);
					newRow.appendChild(newDepartmentRow);
					newRow.appendChild(locationIDRow);

					innercontainer2.appendChild(newRow);

				}
				    var container_1 = document.getElementById("mycontainer1");
					var para = document.createElement("p");
					para.setAttribute("class","entryResultNumber");
					  if ($(".entryResultNumber")[0]){
					   $(".entryResultNumber").css("display","block");
					   $(".entryResultNumber").html(result['data'].length + " entries returned");
					}
					else {
					para.innerHTML = result['data'].length + " entries returned";
					container_1.appendChild(para);
					}


					if(result['data'].length == 0 ){
                    let container_2 = document.getElementById("mycontainer2");
                    container_2.style.display="none";
					}
					else {
						let container_2 = document.getElementById("mycontainer2");
                        container_2.style.display = "flex";
                        var headerOffset = 85;            
                        var elementPosition = container_2.getBoundingClientRect().top;
                        var offsetPosition = elementPosition - headerOffset;

                        window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                 });                        
					}
			}
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});
}
else if (document.getElementById('locationRadio').checked) {
radiobtnoptionglobal = document.getElementById('locationRadio').value; 

	    $.ajax({
	url: "libs/php/getLocationEntriesFromSearch.php",
	type: "POST",
	dataType: "json",
	data: {
		searchResult: storeresult
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
				var innercontainer2 = document.getElementById("mycontainer2_2");

					var locationIDpara3 = document.createElement("p");
					var locationpara4 = document.createElement("p");
					var locationDepNumberpara5 = document.createElement("p");
					var newRow = document.createElement("div");
					var locationIDRow = document.createElement("div");
					var newlocationRow = document.createElement("div");
					var locationDepNumberRow = document.createElement("div");

					newRow.setAttribute("class","row");
					locationIDRow.setAttribute("class","col-sm-4 col-4");
					newlocationRow.setAttribute("class","col-sm-4 col-4");
					locationDepNumberRow.setAttribute("class","col-sm-4 col-4");

					locationIDpara3.innerHTML = "ID";
					locationpara4.innerHTML = "Location";
					locationDepNumberpara5.innerHTML = "No. departments";


					locationIDRow.appendChild(locationIDpara3);
					newlocationRow.appendChild(locationpara4);
					locationDepNumberRow.appendChild(locationDepNumberpara5);

					newRow.appendChild(locationIDRow);
					newRow.appendChild(newlocationRow);
					newRow.appendChild(locationDepNumberRow);

					innercontainer2.appendChild(newRow);				

				for(var i = 0; i < result['data'].length;i++) {

					var locationIDpara3 = document.createElement("p");
					var locationpara4 = document.createElement("p");
				    var locationDepNumberpara5 = document.createElement("p");
					var newRow = document.createElement("div");
					var locationIDRow = document.createElement("div");
					var newlocationRow = document.createElement("div");
					var locationDepNumberRow = document.createElement("div");

					newRow.setAttribute("class","row");
				    newRow.setAttribute("onclick",'showPopup3(this,"'+result['data'][i]['id']+'", "'+result['data'][i]['name']+'","'+result['data2'][i]['COUNT(department.id)']+'")');
					newRow.setAttribute("data-toggle","modal");
					newRow.setAttribute("data-target","#exampleModal");	
					locationIDRow.setAttribute("class","col-sm-4 col-4");
					newlocationRow.setAttribute("class","col-sm-4 col-4");
					locationDepNumberRow.setAttribute("class","col-sm-4 col-4");

					locationIDpara3.innerHTML = result['data'][i]['id'];
					locationpara4.innerHTML = result['data'][i]['name'];
					locationDepNumberpara5.innerHTML = result['data2'][i]['COUNT(department.id)'];


					locationIDRow.appendChild(locationIDpara3);
					newlocationRow.appendChild(locationpara4);
					locationDepNumberRow.appendChild(locationDepNumberpara5);

					newRow.appendChild(locationIDRow);
					newRow.appendChild(newlocationRow);
					newRow.appendChild(locationDepNumberRow);

					innercontainer2.appendChild(newRow);


				}
				    var container_1 = document.getElementById("mycontainer1");
					var para = document.createElement("p");
					para.setAttribute("class","entryResultNumber");
					  if ($(".entryResultNumber")[0]){
					$(".entryResultNumber").css("display","block");
		  	
					   $(".entryResultNumber").html(result['data'].length + " entries returned");
					}
					else {
					para.innerHTML = result['data'].length + " entries returned";
					container_1.appendChild(para);
					}


					if(result['data'].length == 0 ){
                    let container_2 = document.getElementById("mycontainer2");
                    container_2.style.display="none";
					}
					else {
						let container_2 = document.getElementById("mycontainer2");
                        container_2.style.display = "flex";
                        var headerOffset = 85;
                        var elementPosition = container_2.getBoundingClientRect().top;
                        var offsetPosition = elementPosition - headerOffset;

                        window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                 });                        
					}
			}
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});
}

}

function showPopup(object,personnelID,fname,lname,jobtitle,email,departmentName,locationName,departmentID) {

	var modalbody = document.getElementById("modalBody");
    while (modalbody.firstChild) {
          modalbody.removeChild(modalbody.lastChild);
          }
	var i_para4 = document.createElement("i");
	var i_para5 = document.createElement("i");
	var i_para6 = document.createElement("i");
	var para7 = document.createElement("p");
	var para8 = document.createElement("p");
	var para9 = document.createElement("p");
	i_para4.setAttribute("class","fas fa-envelope");
	i_para5.setAttribute("class","fas fa-building");
	i_para6.setAttribute("class","fas fa-map-marker-alt");
	i_para4.style.display="block";
	i_para5.style.display="block";
	i_para6.style.display="block";
	para7.style.display="inline-block";
	para8.style.display="inline-block";
	para9.style.display="inline-block";
	para7.innerHTML = email;
	para8.innerHTML = departmentName;
	para9.innerHTML =locationName;

	i_para4.appendChild(para7);
	i_para5.appendChild(para8);
	i_para6.appendChild(para9);
	document.getElementById("exampleModalLabel").innerHTML = fname + " " + lname;
	document.getElementById("exampleModalLabel2").innerHTML = jobtitle;

	modalbody.appendChild(i_para4);
	modalbody.appendChild(i_para5);
	modalbody.appendChild(i_para6);

	 fnameglobal =fname;
	 lnameglobal = lname;
	 jobtitleglobal = jobtitle;
	 emailglobal = email;
	 departmentNameglobal = departmentName;
	 locationNameglobal = locationName;
	 departmentIDglobal = departmentID;
	 personnelIDglobal = personnelID;

}

function showPopup2(object,id,departmentname,locationid,locationname,employeeNumber) {

	var modalbody = document.getElementById("modalBody");
    while (modalbody.firstChild) {
          modalbody.removeChild(modalbody.lastChild);
          }
	var para = document.createElement("p");
	var para3 = document.createElement("p");
	var para4 = document.createElement("p");
	var ipara = document.createElement("i");
	var ipara3 = document.createElement("i");
	var ipara4 = document.createElement("i");

		ipara.setAttribute("class","fas fa-id-badge");
	ipara3.setAttribute("class","fas fa-map-marker-alt");
	ipara4.setAttribute("class","fas fa-users");
	ipara.style.display="block";
	ipara3.style.display="block";
	ipara.style.display="block";
	para.style.display="inline-block";
	para3.style.display="inline-block";
	para4.style.display="inline-block";

	para.innerHTML = id;
	para3.innerHTML = locationname;
	para4.innerHTML = employeeNumber + " personnels assigned";

	ipara.appendChild(para);
	ipara3.appendChild(para3);
	ipara4.appendChild(para4);

		document.getElementById("exampleModalLabel").innerHTML = departmentname;
	document.getElementById("exampleModalLabel2").innerHTML = "";

	modalbody.appendChild(ipara);
	modalbody.appendChild(ipara3);
	modalbody.appendChild(ipara4);

	 personnelIDglobal = id;
	departmentNameglobal =departmentname;
	 locationid2global = locationid;
}

function showPopup3(object,id,locationName,departmentNumber) {

	var modalbody = document.getElementById("modalBody");
    while (modalbody.firstChild) {
          modalbody.removeChild(modalbody.lastChild);
          }
	var para = document.createElement("p");
	var para2 = document.createElement("p");
	var ipara = document.createElement("i");
	var ipara3 = document.createElement("i");
			ipara.setAttribute("class","fas fa-id-badge");
	ipara3.setAttribute("class","fas fa-building");
		ipara.style.display="block";
	ipara3.style.display="block";
		para.style.display="inline-block";
	para2.style.display="inline-block";

	para.innerHTML = "ID: " + id;
	para2.innerHTML = departmentNumber + " departments assigned";

	ipara.appendChild(para);
	ipara3.appendChild(para2);

		document.getElementById("exampleModalLabel").innerHTML = locationName;
	document.getElementById("exampleModalLabel2").innerHTML = "";
	modalbody.appendChild(ipara);
	modalbody.appendChild(ipara3);

	 personnelIDglobal = id;
	locationNameglobal =locationName;

}

function openUpdateEntry() {
$('.modal').modal('hide');

	if(radiobtnoptionglobal == "name") {
	var updateinputs = document.getElementById("FormsubmitUpdateEntry1");
	var updateinputs2 = document.getElementById("FormsubmitUpdateEntry2");
	var updateinputs3 = document.getElementById("FormsubmitUpdateEntry3");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	updateinputs.style.display = "block";
	updateinputs2.style.display = "none";
	updateinputs3.style.display = "none";
	container1.style.display = "none";
	container2.style.display = "none";
	var fnameinput = document.getElementById("fnameinput");
	var lnameinput = document.getElementById("lnameinput");
	var jobtitleinput = document.getElementById("jobtitleinput");
	var emailinput = document.getElementById("emailinput");
	var departmentDropDown = document.getElementById("departmentDropDown");

	fnameinput.value = fnameglobal;
	lnameinput.value = lnameglobal;
	jobtitleinput.value = jobtitleglobal;
	emailinput.value = emailglobal;

	    $.ajax({
	url: "libs/php/allDepartments.php",
	type: "POST",
	dataType: "json",
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
				var node = document.getElementById("departmentDropDown");
				    while (node.firstChild) {
          node.removeChild(node.lastChild);
          }
			for(var i =0;i< result['data'].length;i++) {
				var option = document.createElement("option");
				option.setAttribute("value",result['data'][i]['id']);
				option.innerText = result['data'][i]['name'];
				node.appendChild(option);
			}			
	node.value = departmentIDglobal;

			}
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});
	}
	else if(radiobtnoptionglobal == "department") {
var updateinputs = document.getElementById("FormsubmitUpdateEntry2");
	var updateinputs2 = document.getElementById("FormsubmitUpdateEntry1");
	var updateinputs3 = document.getElementById("FormsubmitUpdateEntry3");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	updateinputs.style.display = "block";
	updateinputs2.style.display = "none";
	updateinputs3.style.display = "none";
	container1.style.display = "none";
	container2.style.display = "none";
    var depinput = document.getElementById("departmentinput");

	depinput.value = departmentNameglobal;

	    $.ajax({
	url: "libs/php/allLocation.php",
	type: "POST",
	dataType: "json",
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
				var node = document.getElementById("locationdropdown");
				    while (node.firstChild) {
          node.removeChild(node.lastChild);
          }
			for(var i =0;i< result['data'].length;i++) {
				var option = document.createElement("option");
				option.setAttribute("value",result['data'][i]['id']);
				option.innerText = result['data'][i]['name'];
				node.appendChild(option);
			}			

			}
	var locationselection = document.getElementById("locationdropdown");
	locationselection.value = locationid2global;
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});

	}
	else if(radiobtnoptionglobal == "location") {
var updateinputs = document.getElementById("FormsubmitUpdateEntry3");
	var updateinputs2 = document.getElementById("FormsubmitUpdateEntry1");
	var updateinputs3 = document.getElementById("FormsubmitUpdateEntry2");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var locationinput = document.getElementById("locationinput");

	locationinput.value = locationNameglobal;
	updateinputs.style.display = "block";
	updateinputs2.style.display = "none";
	updateinputs3.style.display = "none";
	container1.style.display = "none";
	container2.style.display = "none";

	}
}

function submitUpdateEntry() {
		var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var form1 = document.getElementById("FormsubmitUpdateEntry1");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
	container1.style.display = "flex";
	container2.style.display = "none";
	form1.style.display = "none";

	var fnameinput = document.getElementById("fnameinput");
	var lnameinput = document.getElementById("lnameinput");
	var jobtitleinput = document.getElementById("jobtitleinput");
	var emailinput = document.getElementById("emailinput");
	var departmentDropDown = document.getElementById("departmentDropDown");
    $.ajax({
	url: "libs/php/updateEntriesPersonnel.php",
	type: "POST",
	dataType: "json",
	data: {
		fname: fnameinput.value,
		lname: lnameinput.value,
		jobtitle: jobtitleinput.value,
		email: emailinput.value,
		department: departmentDropDown.value,
		personnelID: personnelIDglobal
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
                   toastr.success(result['status']['description']);
			}
			else {
				   toastr.error(result['status']['description']);
			}
		}
	},
	error:function(result, textStatus, xhr){
		 	toastr.error(textStatus);

	}
});

}

function submitUpdateEntry2() {
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var form1 = document.getElementById("FormsubmitUpdateEntry2");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
	container1.style.display = "flex";
	container2.style.display = "none";
	form1.style.display = "none";

	var departmentinput = document.getElementById("departmentinput");
	var location = document.getElementById("locationdropdown");
    $.ajax({
	url: "libs/php/updateDepartmentEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		depname: departmentinput.value,
		locationID: location.value,
		personnelID: personnelIDglobal
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
	      toastr.success(result['status']['description']);
			}
			else {
	toastr.error(result['status']['description']);
			}
		}
	},
	error:function(result, textStatus, xhr){
			 	toastr.error(textStatus);
	 
	}
});
}
function submitUpdateEntry3() {

	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var form1 = document.getElementById("FormsubmitUpdateEntry3");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
	container1.style.display = "flex";
	container2.style.display = "none";
	form1.style.display = "none";


		var locationName2 = document.getElementById("locationinput");
    $.ajax({
	url: "libs/php/updateLocationEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		locationName: locationName2.value,
				personnelID: personnelIDglobal


			},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
	      toastr.success(result['status']['description']);
			}
			else {
	toastr.error(result['status']['description']);
			}
		}
	},
	error:function(result, textStatus, xhr){
		 	toastr.error(textStatus);
		 
	}
});
}


function deleteEntry() {
$('.modal').modal('hide');

	if(radiobtnoptionglobal == "name"){
	    $.ajax({
	url: "libs/php/deletePersonnelEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		personnelID: personnelIDglobal
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {

				if(result['status']['description'] == "success") {
                   toastr.success(result['status']['description']);
                   	var container2 = document.getElementById("mycontainer2");
		container2.style.display = "none";
		  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
				}
				else {
				toastr.error(result['status']['description']);
				}
			}
			else {
				toastr.error(result['status']['description'])

			}
		}
	},
	error:function(result, textStatus, xhr){
		 				toastr.error(textStatus);

	}
});
	}
		else if(radiobtnoptionglobal == "department"){
	    $.ajax({
	url: "libs/php/deleteDepartmentEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		personnelID: personnelIDglobal
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
	if(result['status']['description'] == "success") {
                   toastr.success(result['status']['description']);
                   	var container2 = document.getElementById("mycontainer2");
		container2.style.display = "none";
		  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
				}
				else {
				toastr.error(result['status']['description']);
				}
			}
			else {
				toastr.error(result['status']['description'])

			}
		}
	},
	error:function(result, textStatus, xhr){
		 		 				toastr.error(textStatus);

	}
});
	}
			else if(radiobtnoptionglobal == "location"){
	    $.ajax({
	url: "libs/php/deleteLocationEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		personnelID: personnelIDglobal
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {

			if(result['status']['code'] == 200) {
	if(result['status']['description'] == "success") {
                   toastr.success(result['status']['description']);
                   	var container2 = document.getElementById("mycontainer2");
		container2.style.display = "none";
		  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
				}
				else {
				toastr.error(result['status']['description']);
				}
			}
			else {
				toastr.error(result['status']['description'])

			}
		}
	},
	error:function(result, textStatus, xhr){
		 		 				toastr.error(textStatus);

	}
});
	}
}

function submitCreatePersonnelEntry() {
	var form1 = document.getElementById("formCreate1");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	  var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
  createelement1.classList.remove("active");
  searchelement.classList.add("active");
  link2element.classList.remove("active");
  link3element.classList.remove("active");
  link1element.classList.remove("active");

	form1.style.display = "none";
	container1.style.display = "flex";
	container2.style.display = "none";


	var fnameinput = document.getElementById("fnameinput_create");
	var lnameinput = document.getElementById("lnameinput_create");
	var jobtitleinput = document.getElementById("jobtitleinput_create");
	var emailinput = document.getElementById("emailinput_create");
	var departmentDropDown = document.getElementById("departmentDropDown_create");
    $.ajax({
	url: "libs/php/insertPersonnelEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		fname: fnameinput.value,
		lname: lnameinput.value,
		jobtitle: jobtitleinput.value,
		email: emailinput.value,
		department: departmentDropDown.value
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
				if(result['status']['code'] == 200) {
                   toastr.success(result['status']['description']);
			}
			else {
				   toastr.error(result['status']['description']);
			}
		}
	},
	error:function(result, textStatus, xhr){
		 	  toastr.error(textStatus);

	}
});
}

function submitCreateDepartmentEntry() {
		var form1 = document.getElementById("formCreate2");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	  var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
  createelement1.classList.remove("active");
  searchelement.classList.add("active");
  link2element.classList.remove("active");
  link3element.classList.remove("active");
  link1element.classList.remove("active");
	form1.style.display = "none";
	container1.style.display = "flex";
	container2.style.display = "none";
	var departmentinput = document.getElementById("newdepartment_input");
	var locationDropDown = document.getElementById("selectLocation_select");
    $.ajax({
	url: "libs/php/insertDepartmentEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		newDepartment: departmentinput.value,
		locationID: locationDropDown.value
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
					if(result['status']['code'] == 200) {
                   toastr.success(result['status']['description']);
			}
			else {
				   toastr.error(result['status']['description']);
			}
		}
	},
	error:function(result, textStatus, xhr){
				 	  toastr.error(textStatus);
 
	}
});
}

function submitCreateLocationEntry() {
	var form1 = document.getElementById("formCreate3");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	  var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
  createelement1.classList.remove("active");
  searchelement.classList.add("active");
  link2element.classList.remove("active");
  link3element.classList.remove("active");
  link1element.classList.remove("active");
	form1.style.display = "none";
	container1.style.display = "flex";
	container2.style.display = "none";
	var locationinput = document.getElementById("newLocation_input");
    $.ajax({
	url: "libs/php/insertLocationEntries.php",
	type: "POST",
	dataType: "json",
	data: {
		newLocation: locationinput.value
	},
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
				if(result['status']['code'] == 200) {
                   toastr.success(result['status']['description']);
			}
			else {
				   toastr.error(result['status']['description']);
			}
		}
	},
	error:function(result, textStatus, xhr){
						 	  toastr.error(textStatus);
 
	}
});
}

function openCreatePersonnelForm() {
  var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");

  createelement1.classList.add("active");
  searchelement.classList.remove("active");
  link2element.classList.remove("active");
  link3element.classList.remove("active");
  link1element.classList.add("active");

	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var form1 = document.getElementById("formCreate1");
	var form2 = document.getElementById("formCreate2");
	var form3 = document.getElementById("formCreate3");
		var form4 = document.getElementById("FormsubmitUpdateEntry1");
	var form5 = document.getElementById("FormsubmitUpdateEntry2");
	var form6 = document.getElementById("FormsubmitUpdateEntry3");
	form4.style.display = "none";
	form5.style.display = "none";
	form6.style.display = "none";
	container1.style.display = "none";
	container2.style.display = "none";
	form1.style.display = "block";
	form2.style.display = "none";
	form3.style.display = "none";

	    $.ajax({
	url: "libs/php/allDepartments.php",
	type: "POST",
	dataType: "json",
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
				var node = document.getElementById("departmentDropDown_create");
				    while (node.firstChild) {
          node.removeChild(node.lastChild);
          }
			for(var i =0;i< result['data'].length;i++) {
				var option = document.createElement("option");
				option.setAttribute("value",result['data'][i]['id']);
				option.innerText = result['data'][i]['name'];
				node.appendChild(option);
			}			

			}
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});

}

function openCreateDepartmentForm() {
  var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");

  createelement1.classList.add("active");
  searchelement.classList.remove("active");
  link1element.classList.remove("active");
  link3element.classList.remove("active");
  link2element.classList.add("active");



	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var form1 = document.getElementById("formCreate1");
	var form2 = document.getElementById("formCreate2");
	var form3 = document.getElementById("formCreate3");
		var form4 = document.getElementById("FormsubmitUpdateEntry1");
	var form5 = document.getElementById("FormsubmitUpdateEntry2");
	var form6 = document.getElementById("FormsubmitUpdateEntry3");
	form4.style.display = "none";
	form5.style.display = "none";
	form6.style.display = "none";
	container1.style.display = "none";
	container2.style.display = "none";
	form1.style.display = "none";
	form2.style.display = "block";
	form3.style.display = "none";

		    $.ajax({
	url: "libs/php/allLocation.php",
	type: "POST",
	dataType: "json",
	success: function(result, textStatus, xhr){
		if (xhr.status === 200) {
			if(result['status']['code'] == 200) {
				var node = document.getElementById("selectLocation_select");
				    while (node.firstChild) {
          node.removeChild(node.lastChild);
          }
			for(var i =0;i< result['data'].length;i++) {
				var option = document.createElement("option");
				option.setAttribute("value",result['data'][i]['id']);
				option.innerText = result['data'][i]['name'];
				node.appendChild(option);
			}			

			}
		}
	},
	error:function(result, textStatus, xhr){
		 
	}
});
}

function openCreateLocationForm() {
	 var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");

  createelement1.classList.add("active");
  searchelement.classList.remove("active");
  link1element.classList.remove("active");
  link2element.classList.remove("active");
  link3element.classList.add("active");

	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
	var form1 = document.getElementById("formCreate1");
	var form2 = document.getElementById("formCreate2");
	var form3 = document.getElementById("formCreate3");
		var form4 = document.getElementById("FormsubmitUpdateEntry1");
	var form5 = document.getElementById("FormsubmitUpdateEntry2");
	var form6 = document.getElementById("FormsubmitUpdateEntry3");
	form4.style.display = "none";
	form5.style.display = "none";
	form6.style.display = "none";
	container1.style.display = "none";
	container2.style.display = "none";
	form1.style.display = "none";
	form2.style.display = "none";
	form3.style.display = "block";
}

function openCreateSearchForm(){
	  var searchelement = document.getElementById("searchnavID");
   var createelement1 = document.getElementById("createNavID");
  var link1element = document.getElementById("link1ID");
  var link2element = document.getElementById("link2ID");
  var link3element = document.getElementById("link3ID");
  var entrypara = document.getElementsByClassName("entryResultNumber");
  if ($(".entryResultNumber")[0]){
  entrypara[0].style.display="none";
}
  createelement1.classList.remove("active");
  link1element.classList.remove("active");
  link2element.classList.remove("active");
  link3element.classList.remove("active");
  searchelement.classList.add("active");
	var container1 = document.getElementById("mycontainer1");
	var container2 = document.getElementById("mycontainer2");
		container2.style.display = "none";
	var form1 = document.getElementById("formCreate1");
	var form2 = document.getElementById("formCreate2");
	var form3 = document.getElementById("formCreate3");


	container1.style.display = "flex";
	form1.style.display = "none";
	form2.style.display = "none";
	form3.style.display = "none";
		var form4 = document.getElementById("FormsubmitUpdateEntry1");
	var form5 = document.getElementById("FormsubmitUpdateEntry2");
	var form6 = document.getElementById("FormsubmitUpdateEntry3");
	form4.style.display = "none";
	form5.style.display = "none";
	form6.style.display = "none";

}

function onClickpersonnelRadio() {
var searchbar = document.getElementById("mysearchBar");
searchbar.placeholder = "Search personnel, location, department..";

}

function onClickdepartmentRadio() {
var searchbar = document.getElementById("mysearchBar");
searchbar.placeholder = "Search department";



}

function onClicklocationRadio() {
var searchbar = document.getElementById("mysearchBar");
searchbar.placeholder = "Search location";
}

