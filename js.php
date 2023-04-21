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