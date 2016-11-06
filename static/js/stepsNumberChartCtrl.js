angular.module('gemon').controller('StepsNumberChartCtrl', function ($scope, $http, user) {
    $http.get('/data/' + user.id).then(function(data) {
        $scope.buildNumberStepsGraph(data.data);
    });

    $scope.adaptGraphData = function(graphData) {
        var len = graphData.length;
        var dates = [];
        for (var i = 0; i < len; i++) {
            dates.push(graphData[i].date);
        }
        var stepVisitsArray = [];
        for (var i = 0; i < len; i++) {
            stepVisitsArray.push(graphData[i].stepVisits);
        }
        var reversedData = [];
        for (var i = 0; i < stepVisitsArray[0].length; i++) {
            var arr = [];
            for (var j = 0; j < stepVisitsArray.length; j++) {
                arr.push(stepVisitsArray[j][i]);
            }
            reversedData.push(arr);
        }

        var barChartData = {
            labels: dates,
            datasets: [{
                label: '1',
                backgroundColor: "rgb(139,0,0)",
                data: reversedData[0]
            }, {
                label: '2',
                backgroundColor: "rgb(184,134,11)",
                data: reversedData[1]
            }, {
                label: '3',
                backgroundColor: "rgb(0,128,128)",
                data: reversedData[2]
            }, {
                label: '4',
                backgroundColor: "rgb(220,20,60)",
                data: reversedData[3]
            }, {
                label: '5',
                backgroundColor: "rgb(47,79,79)",
                data: reversedData[4]
            }, {
                label: '6',
                backgroundColor: "rgb(255,140,0)",
                data: reversedData[5]
            }, {
                label: '7',
                backgroundColor: "rgb(0,191,255)",
                data: reversedData[6]
            }],
        };
        return barChartData;
    };

    $scope.buildNumberStepsGraph = function(graphData) {
        var barChartData = $scope.adaptGraphData(graphData);
        var ctx = document.getElementById("number-steps-graph").getContext("2d");
        if (typeof myBar != "undefined") {
            myBar.destroy();
        }
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                title:{
                    display:true,
                    text:"Steps/Session Histogram"
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
            }
        });
    };

    function adaptSessionDetailsData(graphData) {
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 5,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        };
        return data;
    }
});