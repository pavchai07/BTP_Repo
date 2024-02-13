sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'managerordersui/test/integration/FirstJourney',
		'managerordersui/test/integration/pages/SalesOrdersList',
		'managerordersui/test/integration/pages/SalesOrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrdersList, SalesOrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('managerordersui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrdersList: SalesOrdersList,
					onTheSalesOrdersObjectPage: SalesOrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);