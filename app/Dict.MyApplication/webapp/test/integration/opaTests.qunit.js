sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Dict/MyApplication/test/integration/FirstJourney',
		'Dict/MyApplication/test/integration/pages/CardsServiceList',
		'Dict/MyApplication/test/integration/pages/CardsServiceObjectPage'
    ],
    function(JourneyRunner, opaJourney, CardsServiceList, CardsServiceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Dict/MyApplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCardsServiceList: CardsServiceList,
					onTheCardsServiceObjectPage: CardsServiceObjectPage
                }
            },
            opaJourney.run
        );
    }
);