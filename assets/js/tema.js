/*
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['Áreas', 'Supeitos', 'Casos ativos', 'Casos recuperados', 'Casos fatais'],
      ['Centro Oeste', 11, 11, 11, 11],
      ['Central', 11, 11, 11, 11],
      ['Alto Paranaína', 11, 11, 11, 11],
      ['Norte de Minas', 11, 11, 11, 11],
      ['Zona da Mata', 11, 11, 11, 11], 
      ['Triângulo Mineiro', 11, 11, 11, 11],
      ['Noroeste de MInas', 11, 11, 11, 11],
    ]);

    let options = {
      title: 'Dados dos casos de Corona vírus no estado'
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }*/