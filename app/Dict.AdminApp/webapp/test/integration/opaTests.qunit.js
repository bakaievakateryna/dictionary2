sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Dict/AdminApp/test/integration/FirstJourney',
		'Dict/AdminApp/test/integration/pages/TeacherServiceList',
		'Dict/AdminApp/test/integration/pages/TeacherServiceObjectPage'
    ],
    function(JourneyRunner, opaJourney, TeacherServiceList, TeacherServiceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Dict/AdminApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTeacherServiceList: TeacherServiceList,
					onTheTeacherServiceObjectPage: TeacherServiceObjectPage
                }
            },
            opaJourney.run
        );
    }
);