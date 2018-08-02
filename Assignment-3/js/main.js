/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __HUNG-CHE,CHEN__ Student ID: __115472169____ Date: _FEB._21_18_
*
*
********************************************************************************/
const urlName = "https://nameless-plateau-79111.herokuapp.com/";
var viewModel = {
    teams:ko.observableArray([]),
    employees:ko.observableArray([]),
    projects:ko.observableArray([])    
};


/*===================Dom-document ready=======================
=============================================================*/
$(document).ready(()=>{
    
initializeTeams()
.then(initializeEmployees)
.then(initializeProjects)
.then(()=>{
    //alert("@@finish inialize@@");
    ko.applyBindings(viewModel);
    $("select.multiple").multipleSelect({filter:true});
    $("select.single").multipleSelect({single:true,filter:true});
   
})
.catch((err)=>{
    alert("wrong!!!!!");
    showGenericModal("Error",err);
});
});

/*=================Dom-document ready End======================




/*==============initialize Teams/Emps/Projects=================
=============================================================*/
function initializeTeams() {
    
    return new Promise((resolve, reject)=> {
        $.ajax({
            url: urlName + "teams-raw",
            type: "GET",
            contentType: "application/json"
        }).done((data) => {
            viewModel.teams = ko.mapping.fromJS(data);
            resolve();
        }).fail((err) => {
            //alert("wrong!!!!!");
            reject("Error loading the 'team' data");

        });
    });
}

function initializeEmployees() {

    return new Promise((resolve, reject)=> {
        $.ajax({
            url: urlName + "employees",
            type: "GET",
            contentType: "application/json"
        }).done((data) => {
            viewModel.employees = ko.mapping.fromJS(data);
            resolve();
        }).fail((err) => {
            reject("Error loading the 'employee' data");

        });
    });
}

function initializeProjects() {
    return new Promise((resolve, reject)=> {
        $.ajax({
            url: urlName + "projects",
            type: "GET",
            contentType: "application/json"
        }).done((data) => {
            viewModel.projects = ko.mapping.fromJS(data);
          //  alert("all Initialize done!!");
            resolve();
        }).fail((err) => {
            reject("Error loading the 'project' data");
        });
    });
}


/*==============initialize Teams/Emps/Projects End=============*/




/*======================saveTeam function=====================
=============================================================*/
function saveTeam(){
   // alert("@@ saveTeam invoked @@");
    let currentTeam=this;
    
    $.ajax({
        url:urlName+"team/"+currentTeam._id(),
        type:"PUT",
        data: JSON.stringify({
            "Projects":currentTeam.Projects(),
            "Employees":currentTeam.Employees(),
            "TeamLead":currentTeam.TeamLead()
        }),
        contentType:"application/json"
        
    }).done((data)=>{
      showGenericModal("Success",currentTeam.TeamName()+" Updated Successfully");
        
    }).fail((err)=>{
        showGenericModal("Error",err);
    })

}




/*============================Modal===========================
=============================================================*/


function showGenericModal(title, message) {

    $("#genericModal").modal({
        backdrop: 'static',
        keyboard: false,
    });
    $(".modal-title").text(title);
    $(".modal-body").empty();
    $(".modal-body").append(message);
}
/*============================Modal End==========================*/