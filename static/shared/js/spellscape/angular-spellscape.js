//Angular Application with GetText Dependency

/*
var app=angular.module("flowApp",['gettext']);

app.run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('en');
});
*/


flowApp.controller('dataProcessControl',function data_process_control($scope,gettextCatalog){

    $scope.$on('$viewContentLoaded', function() {
      var json={};
      var json=JSON.parse(localStorage.getItem(localStorage.key(0)))
      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
       var json=JSON.parse(localStorage.getItem(localStorage.key(i)))
	   json[localStorage.key(i)]=json.translated_text
       }
 	  gettextCatalog.setStrings(json.language,json);
    });

	$scope.languages = {
	    current: gettextCatalog.currentLanguage,
	    available: {
	    'fr': 'French',
	    'en': 'English'
	    }
	};

	$scope.$watch('languages.current', function (lang) {
	    if (!lang) {
	        return;
	    }
	    gettextCatalog.setCurrentLanguage(lang);
	});

	//Procedure to update language
	$scope.updateLanguage = function(mapVal) {
	console.log($scope.languages.current)
		gettextCatalog.setStrings($scope.languages.current, mapVal);
		//angular.element('select').scope().updateLanguage({"About":"à propos123345"})
	};

    $scope.setCurrentLanguage=function(lang){
      gettextCatalog.setCurrentLanguage(lang)
    }
	//To get current page language
	$scope.getCurrentLanguage = function(){
		console.log(gettextCatalog.currentLanguage);
	}

});


