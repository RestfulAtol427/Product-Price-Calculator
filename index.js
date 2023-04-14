//Start of Calculation Function

//Linux Server Constants

function calculateProduct() {
  //linux server calcs
  const num01 = parseInt(document.getElementById('num01').value);
  const num02 = parseInt(document.getElementById('num02').value);
  const linuxServerProduct = num01 * num02;
  //windows server calcs
  const num03 = parseInt(document.getElementById('num03').value);
  const num04 = parseInt(document.getElementById('num04').value);
  const windowsServerProduct = num03 * num04;
  //database calcs
  const num05 = parseInt(document.getElementById('num05').value);
  const num06 = parseInt(document.getElementById('num06').value);
  const databaseProduct = num05 * num06;
  //workstation calcs
  const num07 = parseInt(document.getElementById('num07').value);
  const num08 = parseInt(document.getElementById('num08').value);
  const workstationProduct = num07 * num08;
  //24-port switch calcs
  const num09 = parseInt(document.getElementById('num09').value);
  const num10 = parseInt(document.getElementById('num10').value);
  const port24Product = num09 * num10;
  //48-port switch calcs
  const num11 = parseInt(document.getElementById('num11').value);
  const num12 = parseInt(document.getElementById('num12').value);
  const port48Product = num11 * num12;
  //router calcs
  const num13 = parseInt(document.getElementById('num13').value);
  const num14 = parseInt(document.getElementById('num14').value);
  const routerProduct = num13 * num14;
  //access point calcs
  const num15 = parseInt(document.getElementById('num15').value);
  const num16 = parseInt(document.getElementById('num16').value);
  const accessPointProduct = num15 * num16;
  //website calcs
  const num17 = parseInt(document.getElementById('num17').value);
  const num18 = parseInt(document.getElementById('num18').value);
  const websiteProduct = num17 * num18;
  //other calcs
  const num19 = parseInt(document.getElementById('num19').value);
  const num20 = parseInt(document.getElementById('num20').value);
  const otherProduct = num19 * num20;
  //total calc
  const totalServices = linuxServerProduct + windowsServerProduct + databaseProduct + workstationProduct + port24Product + port48Product + routerProduct + accessPointProduct + websiteProduct + otherProduct;
  const totalNodes = num01 + num03 + num05+ num07 + num09 + num11 + num13 + num15 + num17 + num19;

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
}

