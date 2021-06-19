var orgTree = [
  ["0", "Index", "", "", "Description 1"],
  ["0-0", "App", "", "", "Description 21"],
  ["0-1", "CyfFooter ", "", "", "Description 22"],
  ["0-2", "ScrollToTop", "", "", "Description 23"],
  ["0-3", "GreenHeaders", "", "", ""],
  ["0-4", "RodalAccount", "", "", ""],
  ["0-5", "CookieDoc", "", "", ""],
  ["0-6", "TermsDoc", "", "", ""],
  ["0-7", "PrivacyDoc", "", "", ""],
  ["0-8", "FaqDoc", "", "", ""],
  ["0-9", "ContactDoc", "", "", ""],
  ["0-10", "Profile", "", "", ""],
  ["0-11", "Interest", "", "", ""],
  ["0-12", "Capsize", "", "", ""],
  ["0-13", "Capsize", "", "", ""],
  ["0-14", "ReportContent", "", "", ""],
  ["0-15", "Pricing", "", "", ""],
  ["0-16", "ProfileRodalList", "", "", ""],

  ["0-0-0", "List", "", "", ""],
  ["0-0-1", "CookieMessage", "", "", ""],
  ["0-0-2", "LandscapeCheck", "", "", ""],

  ["0-0-0-0", "CyfPlaceholderTile", "", "", ""],
  ["0-0-0-1", "SearchInput", "", "", ""],
  ["0-0-0-2", "IslandImage", "", "", ""],
  ["0-0-0-3", "ListWindow", "", "", ""],
  ["0-0-0-4", "UserListInfo", "", "", ""],
  ["0-0-0-5", "CyfRodal", "", "", ""],
  ["0-0-0-6", "RodalList", "", "", ""],
  ["0-0-0-7", "CyfRodalDropdown", "", "", ""],
  ["0-0-0-8", "CannotEditRodal", "", "", ""],

  ["0-0-0-4-0", "LikeButton", "", "", ""],
  ["0-0-0-4-1", "FlagButton", "", "", ""],
  ["0-0-0-4-2", "BookmarkButton", "", "", ""],
  ["0-0-0-4-3", "ShareButton", "", "", ""],
  ["0-0-0-4-4", "RemoveListRodal", "", "", ""],
];

window.onload = function () {
  numberOfFieldsVar();
  createContent();
};

var numberOfFields = 0;
var fieldLength1Store = [];
var fieldLength2Store = [];
var fieldLength3Store = [];
var fieldLength4Store = [];
var fieldLength5Store = [];
var fieldLength6Store = [];
var buttonLength1Store = [];
var buttonLength2Store = [];
var buttonLength3Store = [];
var buttonLength4Store = [];
var buttonLength5Store = [];
var buttonLength6Store = [];

function numberOfFieldsVar() {
  for (i = 0; i < orgTree.length; i++) {
    var idString = orgTree[i][0];
    if ((idString.match(/-/g) || []).length > numberOfFields) {
      numberOfFields = (idString.match(/-/g) || []).length;
    }

    var num = (idString.match(/-/g) || []).length;

    if (num == 0) {
      fieldLength1Store.push("field" + orgTree[i][0]);
      buttonLength1Store.push("btn" + orgTree[i][0]);
    } else if (num == 1) {
      var res = orgTree[i][0].split("-");
      fieldLength2Store.push("field" + res[0] + "-" + res[1]);
      buttonLength2Store.push("btn" + res[0] + "-" + res[1]);
    } else if (num == 2) {
      var res = orgTree[i][0].split("-");
      fieldLength3Store.push("field" + res[0] + "-" + res[1] + "-" + res[2]);
      buttonLength3Store.push("btn" + res[0] + "-" + res[1] + "-" + res[2]);
    } else if (num == 3) {
      var res = orgTree[i][0].split("-");
      fieldLength4Store.push(
        "field" + res[0] + "-" + res[1] + "-" + res[2] + "-" + res[3]
      );
      buttonLength4Store.push(
        "btn" + res[0] + "-" + res[1] + "-" + res[2] + "-" + res[3]
      );
    } else if (num == 4) {
      var res = orgTree[i][0].split("-");
      fieldLength5Store.push(
        "field" +
          res[0] +
          "-" +
          res[1] +
          "-" +
          res[2] +
          "-" +
          res[3] +
          "-" +
          res[4]
      );
      buttonLength5Store.push(
        "btn" +
          res[0] +
          "-" +
          res[1] +
          "-" +
          res[2] +
          "-" +
          res[3] +
          "-" +
          res[4]
      );
    } else if (num == 5) {
      var res = orgTree[i][0].split("-");
      fieldLength6Store.push(
        "field" +
          res[0] +
          "-" +
          res[1] +
          "-" +
          res[2] +
          "-" +
          res[3] +
          "-" +
          res[4] +
          "-" +
          res[5]
      );
      buttonLength6Store.push(
        "btn" +
          res[0] +
          "-" +
          res[1] +
          "-" +
          res[2] +
          "-" +
          res[3] +
          "-" +
          res[4] +
          "-" +
          res[5]
      );
    }
  }
  //alert(buttonLength3Store.join('\n'));
  numberOfFields++;
}

function createContent() {
  var div = document.createElement("div");
  div.id = "test";
  var htmlString = "";
  var fieldTemp = "";
  var buttonLengthStoreTemp = "";
  var fieldID = "";
  var buttonLengthStoreID = "";
  var btnParentID = "";
  var btnID = "";
  var btnString = "";
  var fieldString = "";
  var btnName = "";

  //Loop through Orgtree array
  for (i = 0; i < orgTree.length; i++) {
    //Create field
    fieldID = orgTree[i][0];
    fieldTemp = "field" + fieldID;

    fieldString =
      '<fieldset id="' +
      fieldTemp +
      '" style="visibility: hidden; display:none"><div class="contentWrap"><legend><h1><a href="' +
      orgTree[i][3] +
      '">' +
      orgTree[i][1] +
      '</a></h1></legend><p class="textBox"><em>' +
      orgTree[i][2] +
      '</em><h4 class="idNumber">' +
      orgTree[i][0] +
      "</h4>" +
      orgTree[i][4] +
      '</p></div><div class="centreBtn"><div class="btnWrap">';

    htmlString += fieldString;

    //Find correct btnLengthStore
    buttonLengthStoreID = (fieldID.match(/-/g) || []).length + 2;
    var z = "buttonLength" + buttonLengthStoreID + "Store";
    buttonLengthStoreTemp = window[z];

    for (j = 0; j < buttonLengthStoreTemp.length; j++) {
      btnID = buttonLengthStoreTemp[j].replace(/btn/g, "");
      btnParentID = btnID.substr(0, btnID.lastIndexOf("-"));
      if (btnParentID == fieldID) {
        var btnClickArr = btnID.replace(/-/g, ",");

        //find btn name
        for (jj = orgTree.length - 1; jj >= 0; jj--) {
          if (orgTree[jj][0] == btnID) {
            btnName = orgTree[jj][1];
            jj = -1;
          }
        }

        btnString =
          '<span class="unselectedBtn"><input type="button" id="' +
          buttonLengthStoreTemp[j] +
          '" class="unselectedBtn" value="' +
          btnName +
          '" onClick="btnClick([' +
          btnClickArr +
          '])"></span>';

        htmlString += btnString;
      }
    }
    htmlString += "</div></div></fieldset>";
  }
  //alert(htmlString);
  div.innerHTML = htmlString;
  document.getElementById("htmlStuff").appendChild(div);
}

function getSearchData() {
  var dataString = "";
  if (document.getElementById("btnPerson").className === "unselectedBtn2") {
    for (i = 0; i < orgTree.length; i++) {
      if (i < orgTree.length - 1) {
        dataString += orgTree[i][1] + ", ";
      } else {
        dataString += orgTree[i][1];
      }
    }
  } else {
    for (i = 0; i < orgTree.length; i++) {
      if (i < orgTree.length - 1) {
        dataString += orgTree[i][2] + ", ";
      } else {
        dataString += orgTree[i][2];
      }
    }
  }
  return dataString;
}

function goTo(name) {
  //find match in orgTree array
  var orgID = "";
  var clickAction;

  if (document.getElementById("btnPerson").className === "selectedBtn2") {
    for (jj = orgTree.length - 1; jj >= 0; jj--) {
      if (orgTree[jj][2] == name) {
        orgID = orgTree[jj][0];
        jj = -1;
      }
    }
  } else {
    for (jj = orgTree.length - 1; jj >= 0; jj--) {
      if (orgTree[jj][1] == name) {
        orgID = orgTree[jj][0];
        jj = -1;
      }
    }
  }

  //click the appropriate buttons in succession
  var i = (orgID.match(/-/g) || []).length + 1;
  var orgIDArray = orgID.split("-");
  var clickString;

  for (z = 0; z < i; z++) {
    if (z == 0) {
      clickString = orgIDArray[0];
    } else {
      clickString += "-" + orgIDArray[z];
    }
    clickAction = document.getElementById("btn" + clickString);
    clickAction.click();
  }
}

// ## JavaScript Functions
function makeButtonSelected(button) {
  var element = document.getElementById(button);
  if (typeof element != "undefined" && element != null) {
    if (document.getElementById(button).className === "unselectedBtn") {
      document.getElementById(button).className = "selectedBtn";
    }
  } else {
    //alert(button + " does not exist");
  }
}

function makeButtonUnselected(button) {
  var element = document.getElementById(button);
  if (typeof element != "undefined" && element != null) {
    if (document.getElementById(button).className === "selectedBtn") {
      document.getElementById(button).className = "unselectedBtn";
    }
  } else {
    //alert(button + " does not exist");
  }
}

function closeButtonsWithLength(num) {
  var store = "buttonLength" + num + "Store";
  for (i = 0; i < window[store].length; i++) {
    makeButtonUnselected(window[store][i]);
  }
}

function makeFieldVisible(field) {
  var element = document.getElementById(field);
  if (typeof element != "undefined" && element != null) {
    document.getElementById(field).style.visibility = "visible";
    document.getElementById(field).style.display = "block";
  } else {
    //alert(field + " does not exist");
  }
}

function makeFieldInvisible(field) {
  var element = document.getElementById(field);
  if (typeof element != "undefined" && element != null) {
    document.getElementById(field).style.visibility = "hidden";
    document.getElementById(field).style.display = "none";
  } else {
    //alert(field + " does not exist");
  }
}

function closeFieldsWithLength(num) {
  while (num <= numberOfFields) {
    var store = "fieldLength" + num + "Store";
    if (window[store]) {
      for (i = 0; i < window[store].length; i++) {
        makeFieldInvisible(window[store][i]);
      }
    }
    num++;
  }
}

function doesFieldExist(field, array) {
  var num = array.length;
  var store = "fieldLength" + num + "Store";
  if (window[store]) {
    for (var i = 0; i < window[store].length; i++) {
      if (window[store][i] === field) return true;
    }
  }
  return false;
}

function btnClick(array) {
  var button = "btn";
  var field = "field";

  for (i = 0; i < array.length; i++) {
    field += array[i].toString();
    button += array[i].toString();
    if (i != array.length - 1) {
      field += "-".toString();
      button += "-".toString();
    }
  }

  closeFieldsWithLength(array.length);
  closeButtonsWithLength(array.length);

  if (doesFieldExist(field, array)) {
    makeFieldVisible(field);
  }
  makeButtonSelected(button);
  goToByScroll(field);
}

function btnClick2() {}

function goToByScroll(id) {
  $("html,body").animate(
    {
      scrollTop: $("#" + escapeSelector(id)).offset().top,
    },
    "normal"
  );
}
function escapeSelector(s) {
  return s.replace(/(:|\.|\[|\])/g, "\\$1");
}
function showInputID(inputID) {
  document.getElementById(inputID).style.visibility = "visible";
  document.getElementById(inputID).style.display = "inline-block";
}

function hideInputID(inputID) {
  document.getElementById(inputID).style.visibility = "hidden";
  document.getElementById(inputID).style.display = "none";
}

//ANGULARJS

(function () {
  "use strict";
  angular
    .module("MyApp", ["ngMaterial", "ngMessages", "material.svgAssetsCache"])
    .controller("DemoCtrl", DemoCtrl);

  function DemoCtrl($timeout, $q, $log, $scope) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled = false;

    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Add " + state + " to the following link!");
    }

    // ******************************
    // Internal methods
    // ******************************
    $scope.ButtonClick = function () {
      if (document.getElementById("btnPerson").className === "unselectedBtn2") {
        document.getElementById("btnPerson").className = "selectedBtn2";
        document.getElementById("btnArea").className = "unselectedBtn2";
      } else {
        document.getElementById("btnPerson").className = "unselectedBtn2";
        document.getElementById("btnArea").className = "selectedBtn2";
      }
      self.states = loadAll();
      self.querySearch = querySearch;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange = searchTextChange;
      self.newState = newState;
    };
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
      var results = query
          ? self.states.filter(createFilterFor(query))
          : self.states,
        deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(
          function () {
            deferred.resolve(results);
          },
          Math.random() * 1000,
          false
        );
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info("Text changed to " + text);
    }

    function selectedItemChange(item) {
      $log.info("Item changed to " + JSON.stringify(item));
      //alert(JSON.stringify(item));
      goTo(item.display);
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = getSearchData();
      return allStates.split(/, +/g).map(function (state) {
        return {
          value: state.toLowerCase(),
          display: state,
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return state.value.indexOf(lowercaseQuery) === 0;
      };
    }
  }
})();
//-------
