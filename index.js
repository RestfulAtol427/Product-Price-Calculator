//Start of Calculation Function

function calculateProduct() {
  //linux server calcs
  var num01 = parseInt(document.getElementById('num01').value);
  var num02 = parseInt(document.getElementById('num02').value);
  var linuxServerProduct = num01 * num02;
  //windows server calcs
  var num03 = parseInt(document.getElementById('num03').value);
  var num04 = parseInt(document.getElementById('num04').value);
  var windowsServerProduct = num03 * num04;
  //database calcs
  var num05 = parseInt(document.getElementById('num05').value);
  var num06 = parseInt(document.getElementById('num06').value);
  var databaseProduct = num05 * num06;
  //workstation calcs
  var num07 = parseInt(document.getElementById('num07').value);
  var num08 = parseInt(document.getElementById('num08').value);
  var workstationProduct = num07 * num08;
  //24-port switch calcs
  var num09 = parseInt(document.getElementById('num09').value);
  var num10 = parseInt(document.getElementById('num10').value);
  var port24Product = num09 * num10;
  //48-port switch calcs
  var num11 = parseInt(document.getElementById('num11').value);
  var num12 = parseInt(document.getElementById('num12').value);
  var port48Product = num11 * num12;
  //router calcs
  var num13 = parseInt(document.getElementById('num13').value);
  var num14 = parseInt(document.getElementById('num14').value);
  var routerProduct = num13 * num14;
  //access point calcs
  var num15 = parseInt(document.getElementById('num15').value);
  var num16 = parseInt(document.getElementById('num16').value);
  var accessPointProduct = num15 * num16;
  //website calcs
  var num17 = parseInt(document.getElementById('num17').value);
  var num18 = parseInt(document.getElementById('num18').value);
  var websiteProduct = num17 * num18;
  //other calcs
  var num19 = parseInt(document.getElementById('num19').value);
  var num20 = parseInt(document.getElementById('num20').value);
  var otherProduct = num19 * num20;
  //total calc

  var totalServices = linuxServerProduct + windowsServerProduct + databaseProduct + workstationProduct + port24Product + port48Product + routerProduct + accessPointProduct + websiteProduct + otherProduct;
  var totalNodes = num01 + num03 + num05+ num07 + num09 + num11 + num13 + num15 + num17 + num19;

  

  //All Node Results
  document.getElementById('resultLinuxServer').textContent = `Services: ${linuxServerProduct}`;
  document.getElementById('resultWindowsServer').textContent = `Services: ${windowsServerProduct}`;
  document.getElementById('resultdatabase').textContent = `Services: ${databaseProduct}`;
  document.getElementById('resultWorkstation').textContent = `Services: ${workstationProduct}`;
  document.getElementById('result24Port').textContent = `Services: ${port24Product}`;
  document.getElementById('result48Port').textContent = `Services: ${port48Product}`;
  document.getElementById('resultRouter').textContent = `Services: ${routerProduct}`;
  document.getElementById('resultAccessPoint').textContent = `Services: ${accessPointProduct}`;
  document.getElementById('resultWebsite').textContent = `Services: ${websiteProduct}`;
  document.getElementById('resultOther').textContent = `Services: ${otherProduct}`;
  //total results
  document.getElementById('totalServicesResult').textContent = `${totalServices}`;
  document.getElementById('totalNodesResult').textContent = `${totalNodes}`;


  var totalServices = parseInt(document.getElementById('totalServicesResult').textContent);
  var totalNodes = parseInt(document.getElementById('totalNodesResult').textContent);
  var spanOut = document.getElementById('nodeRecommend');

  if (totalNodes >= 2000 || totalServices >=15000) {
    spanOut.textContent = "Multiple Licenses or a Sitewide Package"
  } else if (totalNodes > 0 && totalNodes < 100) {  
    spanOut.textContent = "100 Node License";
  } else if (totalNodes >= 100 && totalNodes < 200) {
    spanOut.textContent = "200 Node License";
  } else if (totalNodes >= 200 && totalNodes < 300) {
    spanOut.textContent = "300 Node License";
  } else if (totalNodes >= 300 && totalNodes < 400) {
    spanOut.textContent = "400 Node License";
  } else if (totalNodes >= 400 && totalNodes < 500) {
    spanOut.textContent = "500 Node License";
  } else if (totalNodes >= 500 && totalNodes < 1000) {
    spanOut.textContent = "1000 Node License";
  } else if (totalNodes >= 1000 && totalNodes < 2000) {
    spanOut.textContent = "Unlimited Node License"
  }  else {
    spanOut.textContent = "error"
  }

}


