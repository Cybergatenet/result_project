const labels = [
    'January',
    'February',
    'March'
  ];

  const backgroundColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
  ];
  const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)'
];

  const data = {
    labels: labels,
    datasets: [{
      label: 'First Year dataset',
      backgroundColor: backgroundColor,
    //   borderColor: borderColor,
      data: [20, 30, 45],
    }]
  };

  const config = {
    type: 'polarArea', // line, polarArea, bar
    data: data,
    options: {
        responsive: true,
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

//   ################ Second Graph ###################
const title = [
    'Students',
    'ABSU',
    'NASU',
    'Part-Time',
    'Post-Graduate'
  ];

const bgColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(86, 206, 255, 1)',
    'rgba(162, 162, 162, 1)',
    'rgba(160, 206, 150, 1)'
];

  const info = {
    labels: title,
    datasets: [{
      label: 'Academic Statistics',
      backgroundColor: bgColor,
      data: [20, 30, 45, 50, 15],
    }]
  };

  const stat = {
    type: 'bar', // line, polarArea, bar
    data: info,
    options: {
        responsive: true,
    }
  };

const statistics = new Chart(
    document.getElementById('statistics'),
    stat
  );