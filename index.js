//Start of Calculation Function

function calculateProduct() {
  //linux server calcs
  var n01 = parseInt(document.getElementById('n01').value);
  var s01 = parseInt(document.getElementById('s01').value);
  var linuxServerProduct = n01 * s01;
  //windows server calcs
  var n02 = parseInt(document.getElementById('n02').value);
  var s02 = parseInt(document.getElementById('s02').value);
  var windowsServerProduct = n02 * s02;
  //database calcs
  var n03 = parseInt(document.getElementById('n03').value);
  var s03 = parseInt(document.getElementById('s03').value);
  var databaseProduct = n03 * s03;
  //workstation calcs
  var n04 = parseInt(document.getElementById('n04').value);
  var s04 = parseInt(document.getElementById('s04').value);
  var workstationProduct = n04 * s04;
  //24-port switch calcs
  var n05 = parseInt(document.getElementById('n05').value);
  var s05 = parseInt(document.getElementById('s05').value);
  var port24Product = n05 * s05;
  //48-port switch calcs
  var n06 = parseInt(document.getElementById('n06').value);
  var s06 = parseInt(document.getElementById('s06').value);
  var port48Product = n06 * s06;
  //router calcs
  var n07 = parseInt(document.getElementById('n07').value);
  var s07 = parseInt(document.getElementById('s07').value);
  var routerProduct = n07 * s07;
  //access point calcs
  var n08 = parseInt(document.getElementById('n08').value);
  var s08 = parseInt(document.getElementById('s08').value);
  var accessPointProduct = n08 * s08;
  //website calcs
  var n09 = parseInt(document.getElementById('n09').value);
  var s09 = parseInt(document.getElementById('s09').value);
  var websiteProduct = n09 * s09;
  //other calcs
  var n10 = parseInt(document.getElementById('n10').value);
  var s10 = parseInt(document.getElementById('s10').value);
  var otherProduct = n10 * s10;
  //total calc

  var totalServices = linuxServerProduct + windowsServerProduct + databaseProduct + workstationProduct + port24Product + port48Product + routerProduct + accessPointProduct + websiteProduct + otherProduct;
  var totalNodes = n01 + n02 + n03+ n04 + n05 + n06 + n07 + n08 + n09 + n10;

  

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


