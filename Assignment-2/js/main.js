/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __HUNG-CHE,CHEN__ Student ID: __115472169____ Date: _FEB._9_18_
*
*
********************************************************************************/
const urlName="https://nameless-plateau-79111.herokuapp.com/";


$(document).ready(function(){
    let employeesModel; 
    initializeEmployeesModel();
    userKeyIn();
    clickModal();


});
   
    function userKeyIn(){
        $("#employee-search").on("keyup", function() {
            //alert("enter filer");
            refreshEmployeeRows(getFilteredEmployeesModel($("#employee-search").val()));
        });
    }
   
   
    function initializeEmployeesModel(){
       // alert("1111 initializeEmp");
           // alert(" 1. !!  call  initializeEmpModel !!");
            $.ajax({
              url:urlName+"employees",
              type: "GET",
              contentType:"application/json"
              }).done((data)=>{ 
                
                employeesModel = _.take(data, 300);  //there are 300 employees!
                refreshEmployeeRows(employeesModel);
                
              }).fail((err)=>{
                //alert("wrong!!!!!");
                showGenericModal('Error', 'Unable to get Employees');
              });
          
    }

    function refreshEmployeeRows(employees){
       // alert("3. !! call  refreshEmp  !!");
        let template = _.template(
            '<% _.forEach(employees, function(employee) { %>' +
                '<div class="row body-row" data-id=<%- employee._id %>>' + 
                    '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' + 
                    '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' + 
                    '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' + 
                '</div>' +
            '<% }); %>');
        let tempResult = template({ 'employees': employees});
        let employeeTable = $("#employees-table").empty().append(tempResult);
        //alert("finish 3333   refresh!!!");
      }



    
   
    function getFilteredEmployeesModel(filterString){     
        let filter = _.filter(employeesModel, function(employee) {
            if(_.includes(employee.FirstName.toUpperCase(),filterString.toUpperCase())|| 
               _.includes(employee.LastName.toUpperCase(),filterString.toUpperCase())|| 
               _.includes(employee.Position.PositionName.toUpperCase(),filterString.toUpperCase())){
                
                return true;
            }else{
                return false;
            }
        });
        return filter;
    }

    
    function getEmployeeModelById(id){  
        let index=-1;
        let cloneDeep1;
        index=_.findIndex(employeesModel,['_id',id]);

        if (index!=-1){
            cloneDeep1=_.cloneDeep(employeesModel[index]);
        }else{
            return null;
        }
        return cloneDeep1;
    }


    function clickModal(){
    $(".bootstrap-header-table").on("click", ".body-row", function() {
        let empId = $(this).attr("data-id");
        let clickedEmp = getEmployeeModelById(empId);
        let modalTitle;
        //alert(empId);
        clickedEmp.HireDate = moment(clickedEmp.HireDate).format("LL"); 
        let mess =('<strong>Address: </strong>'+clickedEmp.AddressStreet+' '+clickedEmp.AddressCity+' '+clickedEmp.AddressState+' '+clickedEmp.AddressZip+'<br/>'
                    +'<strong> Phone Number: </strong>'+clickedEmp.PhoneNum+'<br/>'
                    +'<strong> Hire Date: </strong>'+clickedEmp.HireDate);
      
      
       modalTitle=clickedEmp.FirstName+" "+clickedEmp.LastName;
       showGenericModal(modalTitle,mess);
        
    });
    }

    function showGenericModal(title, message){
    
        $("#genericModal").modal ({
            backdrop: 'static', 
            keyboard: false, 
        });
        $(".modal-title").text(title);
        $(".modal-body").empty();
        $(".modal-body").append(message);
    }