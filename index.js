//Start of Calculation Function

//Linux Server Constants
const num01 = parseInt();
const num02 = parseInt();
//Windows Server Constants
const num03 = parseInt();
const num04 = parseInt();
//Database Constants
const num05 = parseInt();
const num06 = parseInt();
//Workstation Constants
const num07 = parseInt();
const num08 = parseInt();
//24-Port Switch Constants
const num09 = parseInt();
const num10 = parseInt();
//48-Port Switch Constants
const num11 = parseInt();
const num12 = parseInt();
//Router Constants
const num13 = parseInt();
const num14 = parseInt();
//Access Point Constants
const num15 = parseInt();
const num16 = parseInt();
//Website Constants
const num17 = parseInt();
const num18 = parseInt();
//Other Constants
const num19 = parseInt();
const num20 = parseInt();

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


//Variables for 'Enter' key functionality
var inputField = document.getElementById("input-field");
var myButton = document.getElementById("calcButton");
//Upon hitting 'Enter' key, calculate button triggers 'click' event
inputField.addEventListener("keyup", function(event) {
  if (event.KeyboardEvent.key === 13) { // 13 is the "Enter" key code
    event.preventDefault(); // Cancel the default action, if needed
    myButton.click(); // Trigger the button element with a click
  }
});

//Working on making an auto-updating section for lincense recommendation.
let total = 0;
const fruitInput = document.getElementById('fruit');
const submitButton = document.getElementById('submit');
const totalDisplay = document.getElementById('total-fruit');

submitButton.addEventListener('click', () => {
  const fruit = fruitInput.value;
  total++;
  totalDisplay.textContent = total + " " + fruit + "s";
  fruitInput.value = '';
});


//Code working on changing values of 0 to light gray font color
/*const value = parseInt(number.textContent);

if (value === 0) {
  Number.style.color = "#d9d9d6";
}
*/
