'use strict';

const ctx = document.getElementById('myChart').getContext('2d');

let myChartObj = {
  type: 'bar',
  data: {
      labels: ['Cat', 'Dog', 'Bird', 'Green', 'Purple', 'Orange'], // goat names
      datasets: [{
          label: '# of Legs', // # votes and # views
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 0, 0, 1)',
              'blue',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 0, 0, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      },
      {
        label: '# of Eyes', // # votes and # views
        data: [5, 10, 15, 20, 25, 30], // the actual view or votes
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
}


const myChart = new Chart(ctx, myChartObj);
