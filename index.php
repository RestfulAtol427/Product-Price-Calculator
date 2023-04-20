<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
    <title>Nagios XI Node Calculator</title>
   <!-- <header positionn="fixed"> Nagios XI: Node Estimation</header> -->
  </head>

  <body>
	<div id="card-box">
	<?php include "inputCard.php" ?>
	
		<div id= "output-card">
			<h2>Nagios Recommended License Level: </h2>
			<div class="disclaimer">
				<p>This is an estimation for licensing and should only be used as a guide. There are many variables which effect license levels (such as active and passive checks or check interval).</p>
			</div> <!-- end disclaimer-->
			<p>Based on inputs, the recommended license level is: 	</p>
			<h3>
				<span id="enterprisePlan">Choose license level</span> / 
				<span id="nodeRecommend">input nodes</span>
			</h3>

			<!--total services output-->
			<div>
				<p>Total Services to Monitor: <span id="totalServicesResult"></span></p>
				<p id="totalNodesP">Total Nodes required: <span id="totalNodesResult"></span></p>
			</div>

			<div id="link-buttons"> 
				<a class="button" id="buyButton" href="https://www.nagios.com/products/nagios-xi/buy/" target="_blank">
					Buy XI now
				</a>
				<a class="button" id="contactButton" href="https://www.nagios.com/contact/" target="_blank">
					Contact Us
				</a>
				<a class="button" id="trialButton" href="https://www.nagios.com/downloads/nagios-xi/" target="_blank">
					Free Trial
				</a>
			</div> <!--end link buttons-->
		</div> <!--end output card-->
	</div> <!--end card-box-->


	<!--Embedded Javascript-->
	<script>

		/* assignInputIDs('input-card'); */

		function updateText() { //For Auto Updateding the Enterprise Plan output

			const enterpriseChosen = document.getElementById('enterpriseChosen');
			const standardChosen = document.getElementById('standardChosen');
			const enterpriseSpan = document.getElementById('enterprisePlan');
		
			if (enterpriseChosen.checked) {
			enterpriseSpan.innerText = 'Enterprise level';
			} else if (standardChosen.checked) {
			enterpriseSpan.innerText = 'Standard level';
			} else {
			enterpriseSpan.innerText = 'Choose License Level';
			}
		}
		
		const enterpriseChosen = document.getElementById('enterpriseChosen');
		const standardChosen = document.getElementById('standardChosen');
		enterpriseChosen.addEventListener('change', updateText);
		standardChosen.addEventListener('change', updateText);

		var customerInputs = document.querySelectorAll('input[type="number"]');
		var calcButton = document.getElementById("calcButton");

		customerInputs.forEach(function(input) { //'Enter' key funtionality
			input.addEventListener("keyup", function(event) {
				if (event.keyCode === 13) {
					calcButton.click();
				}
			});
		});

		const resetButton = document.getElementById("reset-button");

		resetButton.addEventListener("click", function() { //Reset values button
			const inputs = document.querySelectorAll("input[type='number']");
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].value = inputs[i].defaultValue;
			}
		});


	</script>
  </body>
</html>