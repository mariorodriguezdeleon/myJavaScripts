$(function () {
    $.ajax({
        url: "/sites/client1/_api/web/lists/GetByTitle('Requests')/items",
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose"
        },
    }).success(function (data) {
        var listItemInfo = '';

        $.each(data.d.results, function (key, value){
            listItemInfo += "<strong>Title: </strong>" + value.Title + "<strong>Description: </strong>" + value.Description + "</br>"
        });

        $("#divHelloWorld").html(listItemInfo);
    });
});