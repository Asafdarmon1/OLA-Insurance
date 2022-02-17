// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var Severe = 0
var High = 0
var Mid = 0
var Low = 0
$.ajax({
    url: "/getPieData",
    type: "POST",
    success: function(response) {
        $.each(response, (index, row) => {
            switch (row.Severity) {
                case "Low":
                    Low++
                    break;
                case "High":
                    High++
                    break;
                case "Mid":
                    Mid++
                    break;
                case "Severe":
                    Severe++
                    break;
            }

        })
        var myPieChart = new Chart(ctx, {

            type: 'doughnut',
            data: {
                labels: ["Low", "Medium", "High", "Severe"],
                datasets: [{
                    data: [Low, Mid, High, Severe],
                    backgroundColor: ['green', '#808080', 'orange', 'red'],
                    hoverBackgroundColor: ['lightgreen', '#C0C0C0', '#f6c700', '#ffcccb'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        });

    },
    error: function(xhr, status, errmsg) { // XHR - XMLHttpRequest 
        alert(xhr.responseText);
    }




})