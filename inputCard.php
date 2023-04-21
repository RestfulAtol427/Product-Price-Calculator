
<?php
echo '<div id="input-card">
		<div id="inputHeading">
  	 	<h1> Nagios XI Node Calculator</h1>
		</div>'; /* <!-- end inputHeading-->
			
		for node hints: number of wizard available for what node type and device examples
		list supported manufacturers for switches and servers

		Suggestion from josh: Output card could have documentation preview for quicklinks to fill space
		what kind of hardware will the customer need for x solution is a common question from partners)

		One day we could add an industry drop down which will bring up links to case study previews based on industry<br>

		Contact Us button will have to cycle out for partners vs resellers vs customers
				
		include a descriptor for enterprise level
			
			
	*/ 
echo'<div>
		<p class="disclaimer"> <b>Hint:</b> The Services modules assume each service runs a default of one check every 5 minutes. A standard provisioned Unlimited Node instance of XI can handle roughly 2,000 nodes with 10,000-20,000 checks running on a 5 minute interval.</p>
	 </div> 
	<table id="my-table">
		<thead id="nodeTableHead">
			<tr id="nodeTableHeadRow">
				<th>Common Node Types</th>
				<th></th>
				<th>Number of Nodes</th>
				<th>Services per Node</th>
				<th>Total Serverices of Node Type</th>
			 </tr>
		 </thead>
		<tbody id="nodeTableBody">
		<!--linux server-->
		<tr id="linuxServerRow">
			<td id="linuxServerType">Linux Servers</td>
			<td class="tooltip" ><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Linux Servers tips</span></td>
			<td id="linuxServerHost"><input id="n01" type="number" value="0" min="0"></td>
			<td id="linuxServerService"><input id="s01" type="number" value="10" min="0"></td>
			<td id="linuxServerServiceTotal"><span id="resultLinuxServer">Services: </span></td>
		</tr>
		<!--windows server-->
		<tr id="windowsServerRow">
			<td id="windowsServerType">Windows Servers</td>
			<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Windows Servers tips</span></td>
			<td id="windowsServerHost"><input id="n02" type="number" value="0" min="0"></td>
			<td id="windowsServerService"><input id="s02" type="number" value="10" min="0"></td>
			<td id="windowsServerServiceTotal"><span id="resultWindowsServer">Services: </span></td>
		</tr>
		<!--databases-->
		<tr id="databaseRow">
			<td id="databaseType">Databases</td>
			<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Databases tips</span></td>
			<td id="databaseHost"><input id="n03" type="number" value="0" min="0"></td>
			<td id="databaseService"><input id="s03" type="number" value="10" min="0"></td>
			<td id="databaseServiceTotal"><span id="resultdatabase">Services: </span></td>
		</tr>
		<!--workstations-->
		<tr id="workstationRow">
			<td id="workstationType">Workstations</td>
			<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Workstations tips</span></td>
			<td id="workstationHost"><input id="n04" type="number" value="0" min="0"></td>
			<td id="workstationService"><input id="s04" type="number" value="10" min="0"></td>
			<td id="workstationServiceTotal"><span id="resultWorkstation">Services: </span></td>
		</tr>
		<!--24-port switches-->
		<tr id="24portRow">
			<td id="24portType">24-Port Switches</td>
			<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">24-Port Switches tips</span></td>
			<td id="24portHost"><input id="n05" type="number" value="0" min="0"></td>
			<td id="24portService"><input id="s05" type="number" value="50" min="0"></td>
			<td id="24portServiceTotal"><span id="result24Port">Services: </span></td>
		</tr>
		<!--48-port switches-->
					<tr id="48portRow">
						<td id="48portType">48-Port Switches</td>
						<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">48-Port Switches tips</span></td>
						<td id="48portHost"><input id="n06" type="number" value="0" min="0"></td>
						<td id="48portService"><input id="s06" type="number" value="100" min="0"></td>
						<td id="48portServiceTotal"><span id="result48Port">Services: </span></td>
					</tr>
					<!--routers-->
					<tr id="routerRow">
						<td id="routerType">Routers</td>
						<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Routers tips</span></td>
						<td id="routerHost"><input id="n07" type="number" value="0" min="0"></td>
						<td id="routerService"><input id="s07" type="number" value="10" min="0"></td>
						<td id="routerServiceTotal"><span id="resultRouter">Services: </span></td>
					</tr>
					<!--access points-->
					<tr id="accessPointRow">
						<td id="accessPointType">Access Points</td>
						<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Access Points tips</span></td>
						<td id="accessPointHost"><input id="n08" type="number" value="0" min="0"></td>
						<td id="accessPointService"><input id="s08" type="number" value="10" min="0"></td>
						<td id="accessPointServiceTotal"><span id="resultAccessPoint">Services: </span></td>
					</tr>
					<!--websites-->
					<tr id="websiteRow">
						<td id="websiteType">Websites</td>
						<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Website Tips</span></td>
						<td id="websiteHost"><input id="n09" type="number" value="0" min="0"></td>
						<td id="websiteService"><input id="s09" type="number" value="10" min="0"></td>
						<td id="websiteServiceTotal"><span id="resultWebsite">Services: </span></td>
					</tr>
					<!--others-->
					<tr id="otherRow">
						<td id="otherType">Other Devices</td>
						<td class="tooltip"><img src="Media/Images/help.png" alt="more info"><span class="tooltiptext">Other Device tips</span></td>
						<td id="otherHost"><input id="n10" type="number" value="0" min="0"></td>
						<td id="otherService"><input id="s10" type="number" value="10" min="0"></td>
						<td id="otherServiceTotal"><span id="resultOther">Services: </span></td>  
					</tr>
				</tbody>
			</table>

			<!--Enterprise Add-on Section-->
			<div id="enterpriseRadioSelect">
				<legend>Upgrade to Enterprise Edition? 
					<div class="tooltip">
						<img src="Media/Images/help.png" alt="more info">
						<span class="tooltiptext">The Enterprise Upgrade provides you with features that are designed to aid in large-scale configuration, forecasting, and scheduled reporting.</span> 
					</div>
				</legend>
			
				<input type="radio" id="enterpriseChosen" name="enterpriseUpgrade" value="enterpriseChosen" />
				<label for="enterpriseChosen">Upgrade</label>
				<input type="radio" id="standardChosen" name="enterpriseUpgrade" value="standardChosen" />
				<label for="standardChosen">Standard</label>
				
			</div>
			<div id="calcResetSection">
				<button class="button" id="calcButton" onclick="calculateProduct()">Calculate</button>
				<button class="button" id="reset-button">Reset All</button>
			</div>
		</div> <!--end input-card -->
		
		'?>