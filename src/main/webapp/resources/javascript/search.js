function search(name) {
  var suggestionText;
  if (name.indexOf("station") != -1) {
    suggestionText = window.sessionStorage.getItem("stationSearch");
  } else if (name.indexOf("road") != -1) {
    suggestionText = window.sessionStorage.getItem("roadSearch");
  } else {
    suggestionText = window.sessionStorage.getItem("cargoSearch");
  }

  var setting = false;
  if (name.indexOf("Setting") != -1) {
    setting = true;
  }

  var suggestion = true;
  var field = document.getElementById(name);
  var placeholder = "";
  var roadIds = "";
  var classInactive = "sf_inactive";
  var classActive = "sf_active";
  var classText = "sf_text";
  var classSuggestion = "sf_suggestion";
  this.safari =
    parseInt(navigator.productSub) >= 20020000 &&
    navigator.vendor.indexOf("Apple Computer") != -1;
  if (field && !safari) {
    field.c = field.className;
    field.className = field.c + " " + classInactive;
    field.onfocus = function() {
      this.className = this.c + " " + classActive;
      if (setting) {
        field.value = "";
      }
    };
    field.onblur = function() {
      this.className =
        this.value != ""
          ? this.c + " " + classText
          : this.c + " " + classInactive;
      this.value = this.value != "" ? this.value : "";
      if (setting) {
        field.value = placeholder.trim();
      }
      clearList();
    };
    if (suggestion) {
      var selectedIndex = 0;

      field.setAttribute("autocomplete", "off");
      var div = document.createElement("div");
      var list = document.createElement("ul");
      list.style.display = "none";
      div.className = classSuggestion;
      list.style.width = field.offsetWidth + "px";
      list.style.fontSize = "14px";
      div.appendChild(list);
      field.parentNode.appendChild(div);

      field.onkeypress = function(e) {
        var key = getKeyCode(e);

        if (key == 13) {
          selectList();
          selectedIndex = 0;
          return false;
        }
      };

      field.onkeyup = function(e) {
        var key = getKeyCode(e);

        switch (key) {
          case 13:
            return false;
            break;
          case 27:
            field.value = "";
            selectedIndex = 0;
            clearList();
            break;
          case 38:
            navList("up");
            break;
          case 40:
            navList("down");
            break;
          default:
            startList();
            break;
        }
      };

      function startList() {
        var arr = getListItems(field.value);
        if (field.value.length > 0) {
          createList(arr);
        } else {
          clearList();
        }
      }

      function getListItems(value) {
        var arr = new Array();
        var src = suggestionText;
        var arrSrc = src.split(",");
        arrSrc.forEach(function(item) {
          if (item.toLowerCase().indexOf(value.toLowerCase()) != -1) {
            arr.push(item);
          }
        });
        return arr;
      }

      function createList(response) {
        resetList();
        if (response.length > 0) {
          var limit = response.length > 10 ? 11 : response.length;
          for (i = 0; i < limit; i++) {
            li = document.createElement("li");
            a = document.createElement("a");
            a.href = "javascript:void(0);";
            a.i = i + 1;
            a.innerHTML = response[i];
            li.i = i + 1;
            li.onmouseover = function() {
              navListItem(this.i);
            };
            a.onmousedown = function() {
              selectedIndex = this.i;
              selectList(this.i);
              return false;
            };
            li.appendChild(a);
            list.setAttribute("tabindex", "-1");
            list.appendChild(li);
          }
          list.style.display = "block";
        } else {
          clearList();
        }
      }

      function resetList() {
        var li = list.getElementsByTagName("li");
        var len = li.length;
        for (var i = 0; i < len; i++) {
          list.removeChild(li[0]);
        }
      }

      function navList(dir) {
        selectedIndex += dir == "down" ? 1 : -1;
        li = list.getElementsByTagName("li");
        if (selectedIndex < 1) selectedIndex = li.length;
        if (selectedIndex > li.length) selectedIndex = 1;
        navListItem(selectedIndex);
      }

      function navListItem(index) {
        selectedIndex = index;
        li = list.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
          li[i].className = i == selectedIndex - 1 ? "selected" : "";
        }
      }

      function selectList() {
        li = list.getElementsByTagName("li");
        a = li[selectedIndex - 1].getElementsByTagName("a")[0];
        if (setting) {
          placeholder = placeholder + a.innerHTML.match(/\D*\s/)[0].trim() + ",";
          roadIds = roadIds + a.innerHTML.replace(/[^\d]/g, "") + ",";
          field.value = "";
          field.placeholder = placeholder;
          window.sessionStorage.setItem("roadIds", roadIds.trim());
        } else {
          field.value = a.innerHTML;
        }
        clearList();
      }
    }
  }

  function clearList() {
    if (list) {
      list.style.display = "none";
      selectedIndex = 0;
    }
  }

  function getKeyCode(e) {
    var code;
    if (!e) var e = window.event;
    if (e.keyCode) code = e.keyCode;
    return code;
  }
}
