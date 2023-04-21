<?php echo'
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
		</div> <!--end output card-->' ?>