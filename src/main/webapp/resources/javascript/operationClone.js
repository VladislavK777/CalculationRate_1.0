function cloneFieldReturnStation(id) {
  var context = document.getElementById(id);
  var id = context.querySelector("#idReturnStation").value;

  $.ajax({
    url: "add/cloneReturnStation/" + id,
    success: function(response) {
      var table = document.createElement("table");

      var div_head = document.createElement("div");
      div_head.id = "popup";
      div_head.style =
        "position: absolute; height: 100%; width: 100%; top: 0; left: 0; display: none;";
      var div_subdiv_head1 = document.createElement("div");
      div_subdiv_head1.id = "popup_bg";
      div_subdiv_head1.style =
        "background: rgba(0, 0, 0, 0); position: absolute; z-index: 1; height: 100%; width: 100%;";
      var div_subdiv_head2 = document.createElement("div");
      div_subdiv_head2.className = "form";
      var button = document.createElement("input");
      button.type = "button";
      button.className = "bot1";
      button.value = "Сохранить";

      div_subdiv_head2.appendChild(
        createInput("roadSetting", "Дорога", true, response.namesRoad)
      );
      div_subdiv_head2.appendChild(
        createInput(
          "stationList",
          "Список станций",
          false,
          response.idsStationString
        )
      );
      div_subdiv_head2.appendChild(
        createInput(
          "volume",
          "Группа объемов",
          false,
          response.volumeGroupsString
        )
      );
      div_subdiv_head2.appendChild(
        createInput(
          "station",
          "Станция возврата",
          true,
          response.idStationReturn + " " + response.nameStationReturn
        )
      );
      button.addEventListener("click", function() {
        addReturnStation(context.parentNode.parentNode.parentNode.id);
      });

      div_subdiv_head2.appendChild(table);

      div_subdiv_head2.appendChild(button);

      div_head.appendChild(div_subdiv_head1);
      div_head.appendChild(div_subdiv_head2);

      context.parentNode.parentNode.parentNode.appendChild(div_head);

      showPopup();

      $(document).ready(function() {
        $(popup_bg).click(function() {
          $(popup).remove();
        });
      });
    }
  });
}

function cloneFieldReturnException(id) {
  var context = document.getElementById(id);
  var id = context.querySelector("#idReturnException").value;

  $.ajax({
    url: "add/cloneReturnException/" + id,
    success: function(response) {
      var table = document.createElement("table");

      var div_head = document.createElement("div");
      div_head.id = "popup";
      div_head.style =
        "position: absolute; height: 100%; width: 100%; top: 0; left: 0; display: none;";
      var div_subdiv_head1 = document.createElement("div");
      div_subdiv_head1.id = "popup_bg";
      div_subdiv_head1.style =
        "background: rgba(0, 0, 0, 0); position: absolute; z-index: 1; height: 100%; width: 100%;";
      var div_subdiv_head2 = document.createElement("div");
      div_subdiv_head2.className = "form";
      var button = document.createElement("input");
      button.type = "button";
      button.className = "bot1";
      button.value = "Сохранить";

      var tr1 = document.createElement("tr");
      var td11 = document.createElement("td");
      td11.appendChild(
        createInput("roadSetting", "Дорога", true, response.namesRoad)
      );
      var td12 = document.createElement("td");
      td12.appendChild(
        createInput(
          "stationList",
          "Список станций",
          false,
          response.idsStationString
        )
      );
      var td13 = document.createElement("td");
      td13.appendChild(
        createInput(
          "volume",
          "Группа объемов",
          false,
          response.volumeGroupsString
        )
      );
      tr1.appendChild(td11);
      tr1.appendChild(td12);
      tr1.appendChild(td13);
      table.appendChild(tr1);
      var tr2 = document.createElement("tr");
      var td21 = document.createElement("td");
      td21.appendChild(
        createInput(
          "stationFrom",
          "Станция отправления",
          true,
          response.stationFrom.idStation +
            " " +
            response.stationFrom.nameStation
        )
      );
      var td22 = document.createElement("td");
      td22.appendChild(
        createInput(
          "stationTo",
          "Станция назначения",
          true,
          response.stationTo.idStation + " " + response.stationTo.nameStation
        )
      );
      var td23 = document.createElement("td");
      td23.appendChild(
        createInput(
          "cargo",
          "Груз",
          true,
          response.cargo.idCargo + " " + response.cargo.nameCargo
        )
      );
      tr2.appendChild(td21);
      tr2.appendChild(td22);
      tr2.appendChild(td23);
      table.appendChild(tr2);

      var tr3 = document.createElement("tr");
      var td31 = document.createElement("td");
      td31.appendChild(
        createInput(
          "cargoClass",
          "Класс груза",
          false,
          response.cargoTypeString
        )
      );
      var td32 = document.createElement("td");
      var field = createInput("typeRoute", "Тип рейса", false);
      var input = field.querySelector("#typeRoute");
      input.setAttribute("list", "list");
      input.onfocus = (function() {
              showList(input.id);
          });
      input.onblur = (function() {
              hiddenList();
          });
      td32.appendChild(field);
      var td33 = document.createElement("td");
      td33.appendChild(
        createInput("distance", "Расстояние", false, response.distance)
      );
      tr3.appendChild(td31);
      tr3.appendChild(td32);
      tr3.appendChild(td33);
      table.appendChild(tr3);

      var tr4 = document.createElement("tr");
      var td41 = document.createElement("td");
      td41.appendChild(
        createInput("countDays", "Дней", false, response.countDays)
      );
      var td42 = document.createElement("td");
      td42.appendChild(createInput("rate", "Ставка", false, response.rate));
      var td43 = document.createElement("td");
      td43.appendChild(createInput("tariff", "Тариф", false, response.tariff));
      tr4.appendChild(td41);
      tr4.appendChild(td42);
      tr4.appendChild(td43);
      table.appendChild(tr4);
      button.addEventListener("click", function() {
        addException(context.parentNode.parentNode.parentNode.id);
      });

      div_subdiv_head2.appendChild(table);

      div_subdiv_head2.appendChild(button);

      div_head.appendChild(div_subdiv_head1);
      div_head.appendChild(div_subdiv_head2);

      context.parentNode.parentNode.parentNode.appendChild(div_head);

      showPopup();

      $(document).ready(function() {
        $(popup_bg).click(function() {
          $(popup).remove();
        });
      });
    }
  });
}

function cloneFieldBeginningException(id) {
  var context = document.getElementById(id);
  var id = context.querySelector("#idBeginningException").value;

  $.ajax({
    url: "add/cloneBeginningException/" + id,
    success: function(response) {
      var table = document.createElement("table");

      var div_head = document.createElement("div");
      div_head.id = "popup";
      div_head.style =
        "position: absolute; height: 100%; width: 100%; top: 0; left: 0; display: none;";
      var div_subdiv_head1 = document.createElement("div");
      div_subdiv_head1.id = "popup_bg";
      div_subdiv_head1.style =
        "background: rgba(0, 0, 0, 0); position: absolute; z-index: 1; height: 100%; width: 100%;";
      var div_subdiv_head2 = document.createElement("div");
      div_subdiv_head2.className = "form";
      var button = document.createElement("input");
      button.type = "button";
      button.className = "bot1";
      button.value = "Сохранить";

      var tr1 = document.createElement("tr");
      var td11 = document.createElement("td");
      td11.appendChild(
        createInput("roadSetting", "Дорога", true, response.namesRoad)
      );
      var td12 = document.createElement("td");
      td12.appendChild(
        createInput(
          "stationList",
          "Список станций",
          false,
          response.idsStationString
        )
      );
      var td13 = document.createElement("td");
      td13.appendChild(
        createInput(
          "volume",
          "Группа объемов",
          false,
          response.volumeGroupsString
        )
      );
      tr1.appendChild(td11);
      tr1.appendChild(td12);
      tr1.appendChild(td13);
      table.appendChild(tr1);
      var tr2 = document.createElement("tr");
      var td21 = document.createElement("td");
      td21.appendChild(
        createInput(
          "stationFrom",
          "Станция отправления",
          true,
          response.stationFrom.idStation +
            " " +
            response.stationFrom.nameStation
        )
      );
      var td22 = document.createElement("td");
      td22.appendChild(
        createInput(
          "stationTo",
          "Станция назначения",
          true,
          response.stationTo.idStation + " " + response.stationTo.nameStation
        )
      );
      var td23 = document.createElement("td");
      td23.appendChild(
        createInput(
          "cargo",
          "Груз",
          true,
          response.cargo.idCargo + " " + response.cargo.nameCargo
        )
      );
      tr2.appendChild(td21);
      tr2.appendChild(td22);
      tr2.appendChild(td23);
      table.appendChild(tr2);

      var tr3 = document.createElement("tr");
      var td31 = document.createElement("td");
      td31.appendChild(
        createInput(
          "cargoClass",
          "Класс груза",
          false,
          response.cargoTypeString
        )
      );
      var td32 = document.createElement("td");
      var field = createInput("typeRoute", "Тип рейса", false);
      var input = field.querySelector("#typeRoute");
      input.setAttribute("list", "list");
      input.onfocus = (function() {
              showList(input.id);
          });
      input.onblur = (function() {
             hiddenList();
          });
      td32.appendChild(field);
      var td33 = document.createElement("td");
      td33.appendChild(
        createInput("distance", "Расстояние", false, response.distance)
      );
      tr3.appendChild(td31);
      tr3.appendChild(td32);
      tr3.appendChild(td33);
      table.appendChild(tr3);

      var tr4 = document.createElement("tr");
      var td41 = document.createElement("td");
      td41.appendChild(
        createInput("countDays", "Дней", false, response.countDays)
      );
      var td42 = document.createElement("td");
      td42.appendChild(createInput("rate", "Ставка", false, response.rate));
      var td43 = document.createElement("td");
      td43.appendChild(createInput("tariff", "Тариф", false, response.tariff));
      tr4.appendChild(td41);
      tr4.appendChild(td42);
      tr4.appendChild(td43);
      table.appendChild(tr4);
      button.addEventListener("click", function() {
        addException(context.parentNode.parentNode.parentNode.id);
      });

      div_subdiv_head2.appendChild(table);

      div_subdiv_head2.appendChild(button);

      div_head.appendChild(div_subdiv_head1);
      div_head.appendChild(div_subdiv_head2);

      context.parentNode.parentNode.parentNode.appendChild(div_head);

      showPopup();

      $(document).ready(function() {
        $(popup_bg).click(function() {
          $(popup).remove();
        });
      });
    }
  });
}