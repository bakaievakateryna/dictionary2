sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Dict/UI/test/integration/FirstJourney',
		'Dict/UI/test/integration/pages/CardsServiceList',
		'Dict/UI/test/integration/pages/CardsServiceObjectPage'
    ],
    function(JourneyRunner, opaJourney, CardsServiceList, CardsServiceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Dict/UI') + '/index.html'
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