$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users
    var tableBody = $("#tableBody");
    var count = (tableBody.find('tr').length)+1; // Count the tr tags within the tableBody tag

    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        var username = $("#username").val();
        var deleteButton = '<button id="deleteButton" type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button>'; //Html Tag Button

        //2. create a new element


        //3. somehow add them to userListBody
        tableBody.append("<tr><td>" + count + "</td><td>"+ username + "</td><td>" + deleteButton + "</td></tr>");

        //4. update number of current users
        count++;

        //5. clear entries from the form
        $("#username").val(" ");
        //6. maybe do something else... :-)



        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        $(this).parentNode.parentNode.remove(); //Delete function doesnt work. I havent found a way to get to the correct element
        //2. update number of current users

        //your code follows here


    });

    //maybe some code follows here

});