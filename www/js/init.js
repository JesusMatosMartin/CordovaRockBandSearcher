
function onDeviceReady() { 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById("submitButton").onclick = function() {
      clearItems();
      doQuery(inputFilter.value);

      var tabs = document.getElementById("tabs-swipe");
      var tabsInstance = M.Tabs.getInstance(tabs);
      tabsInstance.select("tab2");

      inputFilter.value = "";
    };

    $(".carousel")[0].style = "height: 100%; overflow-y: scroll";
}
