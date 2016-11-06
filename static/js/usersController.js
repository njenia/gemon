angular.module('gemon').controller('UsersCtrl', function ($scope, $http, user) {
    $scope.user = user;
});



function buildSessionDetailsGraph(graphData) {
    var sessionDetailsData = adaptSessionDetailsData(graphData);
    var ctx = document.getElementById("bar").getContext("2d");
    if (typeof myBar != "undefined") {
        myBar.destroy();
    }
    window.myBar = new Chart(ctx, {
        type: 'line',
        data: sessionDetailsData,
/*        options: {
            title:{
                display:true,
                text:"Session Details"
            },
            tooltips: {
                mode: 'label'
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }*/
    });
}
