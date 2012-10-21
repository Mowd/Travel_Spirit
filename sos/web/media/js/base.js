var directionsDisplay;
var directionsService;
var map;
tra.county_mapping = {
    "台北市": {
        lat: "25.041088",
        lng: "121.557069",
        city: [
            "中正區",
            "大同區",
            "中山區",
            "松山區",
            "大安區",
            "萬華區",
            "信義區",
            "士林區",
            "北投區",
            "內湖區",
            "南港區",
            "文山區"
        ]
    },
    "新北市": {
        lat: "25.065493",
        lng: "121.657609",
        city: [
            "萬里區",
            "金山區",
            "板橋區",
            "汐止區",
            "深坑區",
            "石碇區",
            "瑞芳區",
            "平溪區",
            "雙溪區",
            "貢寮區",
            "新店區",
            "坪林區",
            "烏來區",
            "永和區",
            "中和區",
            "土城區",
            "三峽區",
            "樹林區",
            "鶯歌區",
            "三重區",
            "新莊區",
            "泰山區",
            "林口區",
            "蘆洲區",
            "五股區",
            "八里區",
            "淡水區",
            "三芝區",
            "石門區"
        ]
    },
    "基隆市": {
        lat: "25.132551",
        lng: "121.739566",
        city: [
            "仁愛區",
            "信義區",
            "中正區",
            "中山區",
            "安樂區",
            "暖暖區",
            "七堵區"
        ]
    },
    "桃園縣": {
        lat: "24.989189",
        lng: "121.313535",
        city: [
            "中壢市",
            "平鎮市",
            "龍潭鄉",
            "楊梅鎮",
            "新屋鄉",
            "觀音鄉",
            "桃園市",
            "龜山鄉",
            "八德市",
            "大溪鎮",
            "復興鄉",
            "大園鄉",
            "蘆竹鄉"
        ]
    },
    "新竹市": {
        lat: "24.801841",
        lng: "120.971628",
        city: [
            "北區",
            "東區",
            "香山區"
        ]
    },
    "新竹縣": {
        lat: "24.827141",
        lng: "121.012881",
        city: [
            "竹北市",
            "湖口鄉",
            "新豐鄉",
            "新埔鎮",
            "關西鎮",
            "芎林鄉",
            "寶山鄉",
            "竹東鎮",
            "五峰鄉",
            "橫山鄉",
            "尖石鄉",
            "北埔鄉",
            "峨眉鄉"
        ]
    },
    "苗栗縣": {
        lat: "24.561742",
        lng: "120.819086",
        city: [
            "竹南鎮",
            "頭份鎮",
            "三灣鄉",
            "南庄鄉",
            "獅潭鄉",
            "後龍鎮",
            "通霄鎮",
            "苑裡鎮",
            "苗栗市",
            "造橋鄉",
            "頭屋鄉",
            "公館鄉",
            "大湖鄉",
            "泰安鄉",
            "銅鑼鄉",
            "三義鄉",
            "西湖鄉",
            "卓蘭鎮"
        ]
    },
    "台中市": {
        lat: "24.150004",
        lng: "120.667949",
        city: [
            "中區",
            "東區",
            "南區",
            "西區",
            "北區",
            "北屯區",
            "西屯區",
            "南屯區",
            "太平區",
            "大里區",
            "霧峰區",
            "烏日區",
            "豐原區",
            "后里區",
            "石岡區",
            "東勢區",
            "和平區",
            "新社區",
            "潭子區",
            "大雅區",
            "神岡區",
            "大肚區",
            "沙鹿區",
            "龍井區",
            "梧棲區",
            "清水區",
            "大甲區",
            "外埔區",
            "大安區"
        ]
    },
    "彰化縣": {
        lat: "24.075462",
        lng: "120.538559",
        city: [
            "彰化市",
            "芬園鄉",
            "花壇鄉",
            "秀水鄉",
            "鹿港鎮",
            "福興鄉",
            "線西鄉",
            "和美鎮",
            "伸港鄉",
            "員林鎮",
            "社頭鄉",
            "永靖鄉",
            "埔心鄉",
            "溪湖鎮",
            "大村鄉",
            "埔鹽鄉",
            "田中鎮",
            "北斗鎮",
            "田尾鄉",
            "埤頭鄉",
            "溪州鄉",
            "竹塘鄉",
            "二林鎮",
            "大城鄉",
            "芳苑鄉",
            "二水鄉"
        ]
    },
    "南投縣": {
        lat: "23.966529",
        lng: "120.968056",
        city: [
            "南投市",
            "中寮鄉",
            "草屯鎮",
            "國姓鄉",
            "埔里鎮",
            "仁愛鄉",
            "名間鄉",
            "集集鎮",
            "水里鄉",
            "魚池鄉",
            "信義鄉",
            "竹山鎮",
            "鹿谷鄉"
        ]
    },
    "雲林縣": {
        lat: "23.706211",
        lng: "120.541949",
        city: [
            "南投市",
            "中寮鄉",
            "草屯鎮",
            "國姓鄉",
            "埔里鎮",
            "仁愛鄉",
            "名間鄉",
            "集集鎮",
            "水里鄉",
            "魚池鄉",
            "信義鄉",
            "竹山鎮",
            "鹿谷鄉"
        ]
    },
    "嘉義市": {
        lat: "23.483794",
        lng: "120.451269",
        city: [
            "東區",
            "西區"
        ]
    },
    "嘉義縣": {
        lat: "23.555466",
        lng: "120.434457",
        city: [
            "番路鄉",
            "梅山鄉",
            "竹崎鄉",
            "阿里山鄉",
            "中埔鄉",
            "大埔鄉",
            "水上鄉",
            "鹿草鄉",
            "太保市",
            "朴子市",
            "東石鄉",
            "六腳鄉",
            "新港鄉",
            "民雄鄉",
            "大林鎮",
            "溪口鄉",
            "義竹鄉",
            "布袋鎮"
        ]
    },
    "台南市": {
        lat: "22.992481",
        lng: "120.211802",
        city: [
            "中西區",
            "東區",
            "南區",
            "北區",
            "安平區",
            "安南區",
            "永康區",
            "歸仁區",
            "新化區",
            "左鎮區",
            "玉井區",
            "楠西區",
            "南化區",
            "仁德區",
            "關廟區",
            "龍崎區",
            "官田區",
            "麻豆區",
            "佳里區",
            "西港區",
            "七股區",
            "將軍區",
            "學甲區",
            "北門區",
            "新營區",
            "後壁區",
            "白河區",
            "東山區",
            "六甲區",
            "下營區",
            "柳營區",
            "鹽水區",
            "善化區",
            "新市區",
            "大內區",
            "山上區",
            "安定區"
        ]
    },
    "高雄市": {
        lat: "22.625222",
        lng: "120.309466",
        city: [
            "新興區",
            "前金區",
            "苓雅區",
            "鹽埕區",
            "鼓山區",
            "旗津區",
            "前鎮區",
            "三民區",
            "楠梓區",
            "小港區",
            "左營區",
            "東沙群島",
            "南沙群島",
            "仁武區",
            "大社區",
            "岡山區",
            "路竹區",
            "阿蓮區",
            "田寮區",
            "燕巢區",
            "橋頭區",
            "梓官區",
            "彌陀區",
            "永安區",
            "湖內區",
            "鳳山區",
            "大寮區",
            "林園區",
            "鳥松區",
            "大樹區",
            "旗山區",
            "美濃區",
            "六龜區",
            "內門區",
            "杉林區",
            "甲仙區",
            "桃源區",
            "那瑪夏區",
            "茂林區",
            "茄萣區"
        ]
    },
    "屏東縣": {
        lat: "22.676352",
        lng: "120.494785",
        city: [
            "屏東市",
            "三地門鄉",
            "霧台鄉",
            "瑪家鄉",
            "九如鄉",
            "里港鄉",
            "高樹鄉",
            "鹽埔鄉",
            "長治鄉",
            "麟洛鄉",
            "竹田鄉",
            "內埔鄉",
            "萬丹鄉",
            "潮州鎮",
            "泰武鄉",
            "來義鄉",
            "萬巒鄉",
            "崁頂鄉",
            "新埤鄉",
            "南州鄉",
            "林邊鄉",
            "東港鎮",
            "琉球鄉",
            "佳冬鄉",
            "新園鄉",
            "枋寮鄉",
            "枋山鄉",
            "春日鄉",
            "獅子鄉",
            "車城鄉",
            "牡丹鄉",
            "恆春鎮",
            "滿州鄉"
        ]
    },
    "宜蘭縣": {
        lat: "24.677769",
        lng: "121.774446",
        city: [
            "宜蘭市",
            "頭城鎮",
            "礁溪鄉",
            "壯圍鄉",
            "員山鄉",
            "羅東鎮",
            "三星鄉",
            "大同鄉",
            "五結鄉",
            "冬山鄉",
            "蘇澳鎮",
            "南澳鄉",
            "釣魚台"
        ]
    },
    "花蓮縣": {
        lat: "23.982136",
        lng: "121.597173",
        city: [
            "花蓮市",
            "新城鄉",
            "秀林鄉",
            "吉安鄉",
            "壽豐鄉",
            "鳳林鎮",
            "光復鄉",
            "豐濱鄉",
            "瑞穗鄉",
            "萬榮鄉",
            "玉里鎮",
            "卓溪鄉",
            "富里鄉"
        ]
    },
    "台東縣": {
        lat: "22.754733",
        lng: "121.141477",
        city: [
            "台東市",
            "綠島鄉",
            "蘭嶼鄉",
            "延平鄉",
            "卑南鄉",
            "鹿野鄉",
            "關山鎮",
            "海端鄉",
            "池上鄉",
            "東河鄉",
            "成功鎮",
            "長濱鄉",
            "太麻里鄉",
            "金峰鄉",
            "大武鄉",
            "達仁鄉"
        ]
    },
    "澎湖縣": {
        lat: "23.568432",
        lng: "119.581676",
        city: [
            "馬公市",
            "西嶼鄉",
            "望安鄉",
            "七美鄉",
            "白沙鄉",
            "湖西鄉"
        ]
    },
    "金門縣": {
        lat: "23.568594",
        lng: "119.581815",
        city: [
            "金沙鎮",
            "金湖鎮",
            "金寧鄉",
            "金城鎮",
            "烈嶼鄉",
            "烏坵鄉"
        ]
    },
    "連江縣": {
        lat: "26.153743",
        lng: "119.947615",
        city: [
            "南竿鄉",
            "北竿鄉",
            "莒光鄉",
            "東引鄉"
        ]
    }
};

//=====================================
//
// index page
//
//=====================================

tra.detectScrollBottom = function() {
    $(window).scroll(function(e) {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
            tra.loadMorePlace();
        }
    });
};

tra.loadMorePlace = function() {
  var li_list = [];
  var keyword = $(".index-attr").attr("keyword");
  var lat = $(".index-attr").attr("lat");
  var lng = $(".index-attr").attr("lng");
  var page = $(".index-attr").attr("page");
  $(".index-attr").attr("page", parseInt(page) + 1);
  var data = "page=" + page;
  if(keyword != "") {
    data += "&search=" + encodeURIComponent(keyword);
  }
  if(lat != "") {
    data += "&lat=" + lat + "&lng=" + lng;
  }
  $.ajax({
    url: tra.site_root + "util/get_popular_places/",
    type: "GET",
    data: data,
    success: function(res) {
      res = JSON.parse(res);
      for(var i=0; i<res.length; i++) {
          li_list.push(
            '<li class="span4">',
            '  <a href="' + tra.site_root + 'place/' + res[i]['place_id'] + '/">',
            '  <div class="thumbnail">',
            '    <img src="' + res[i]['image'] + '" alt="' + res[i]['snippet'] + '" style="height: 200px">',
            '    <h3>' + res[i]['title'] + '</h3>',
            '  </div>',
            '  </a>',
            '</li>'
          );
      }
      $(".place-ul").append(li_list.join("\n"));
    }
  });
};

tra.setSearchPlaceSubmitCallback = function() {
  $(".search-form").submit(function() {
    tra.detectScrollBottom();
    var keyword = $(".search-query").val();
    $(".active").removeClass("active");
    if($(".search-tip").text() != "景點搜尋結果：") {
      $(".nav:eq(0)").append('<li class="active search-tip"><a href="#">景點搜尋結果：</a></li>');
      $(".container:eq(2)").fadeTo("fast", 0.00, function(){ //fade
        $(this).slideUp("400", function() { //slide up
          $(this).remove(); //then remove from the DOM
        });
      });
    }
    $(".search-tip").addClass("active");
    $(".index-attr").attr("page", "1");
    $(".index-attr").attr("keyword", keyword);
    $(".place-ul").html("");
    tra.loadMorePlace();
    return false;
  });
};

tra.displayCountyMenu = function() {
  var county_list = [];
  for(var i in tra.county_mapping) {
    county_list.push(
      '<li><a class="county-item" tabindex="-1" href="#" lat="' + tra.county_mapping[i]['lat'] + '" lng="' + tra.county_mapping[i]['lng'] + '">' + i + '</a></li>'
    );
  }
  $(".county-menu").append(county_list.join("\n"));
};

tra.setCountySelectCallback = function() {
  $(".county-item").click(function () {
    $(".dropdown-toggle").html($(this).text() + ' <b class="caret"></b>');
    tra.detectScrollBottom();
    $(".active").removeClass("active");
    if($(".search-tip").text() != "景點搜尋結果：") {
      $(".nav:eq(0)").append('<li class="active search-tip"><a href="#">景點搜尋結果：</a></li>');
      $(".container:eq(2)").fadeTo("fast", 0.00, function(){ //fade
        $(this).slideUp("400", function() { //slide up
          $(this).remove(); //then remove from the DOM
        });
      });
    }
    $(".search-tip").addClass("active");
    $(".index-attr").attr("keyword", "");
    $(".index-attr").attr("lat", $(this).attr("lat"));
    $(".index-attr").attr("lng", $(this).attr("lng"));
    $(".index-attr").attr("page", "1");
    $(".place-ul").html("");
    tra.loadMorePlace();
  });
};

//=====================================
//
// lucky page
//
//=====================================

tra.displayResultMap = function() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var taiwan = new google.maps.LatLng(23.941154, 120.991305);
    var mapOptions = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: taiwan
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    directionsDisplay.setMap(map);
};

tra.calcRoute = function() {
  var tmp = place_name.indexOf(place_start);
  place_name.splice(tmp, 1);
  var tmp = place_name.indexOf(place_end);
  place_name.splice(tmp, 1);

  for(var i in waypoint) {
    if(waypoint[i][0] == start_latlng[0] && waypoint[i][1] == start_latlng[1])
      waypoint.splice(i, 1)
  }
  for(var i in waypoint) {
    if(waypoint[i][0] == end_latlng[0] && waypoint[i][1] == end_latlng[1])
      waypoint.splice(i, 1)
  }

  var waypts = [];
  for (var i = 0; i < waypoint.length; i++) {
      waypts.push({
          location: new google.maps.LatLng(waypoint[i][0], waypoint[i][1]),
          stopover: true
      });
  }

  var request = {
      origin: new google.maps.LatLng(start_latlng[0], start_latlng[1]),
      destination: new google.maps.LatLng(end_latlng[0], end_latlng[1]),
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
  };

  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById("directions_panel");
      summaryPanel.innerHTML = "<h3>路程規劃</h3>";
      //summaryPanel.innerHTML = "";
      // For each route, display summary information.
      
      var place_order = [];
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i+1;
        var current_place = typeof(place_name[route.waypoint_order[i - 1]]) == "undefined" ? place_start : place_name[route.waypoint_order[i - 1]];
        var next_place = typeof(place_name[route.waypoint_order[i]]) == "undefined" ? place_end : place_name[route.waypoint_order[i]];
        place_order.push(current_place);
        summaryPanel.innerHTML += "<b>路程 " + routeSegment + "</b><br />";
        //summaryPanel.innerHTML += route.legs[i].start_address + " to ";
        summaryPanel.innerHTML += current_place + " 到 ";
        summaryPanel.innerHTML += next_place + "<br />";
        summaryPanel.innerHTML += route.legs[i].distance.text + "<br /><br />";
      }

      place_order.push(place_end);
      summaryPanel.innerHTML += "<h3>圖標</h3>";
      for(var i=0; i<place_order.length; i++) {
        summaryPanel.innerHTML += '<img src="http://www.googlemapsmarkers.com/v1/' + String.fromCharCode(65 + i) + '/00CC00/"> ' + place_order[i] + '<br><br>';
      }
    }
  });
};

//=====================================
//
// place page
//
//=====================================

tra.displayPlaceMap = function() {
  var lat = $(".place-attr").attr("lat");
  var lng = $(".place-attr").attr("lng");
  var title = $(".place-attr").attr("title");
  var center = new google.maps.LatLng(lat, lng);
  var mapOptions = {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: center
  }
  map = new google.maps.Map(document.getElementById("place_map"), mapOptions);

  var marker = new google.maps.Marker({
      position: center,
      map: map,
      title: title
  });
};

tra.setAddPlaceClickCallback = function() {
  $(".add-place").click(function () {
    var place_id = $(".place-attr").attr("place_id");
    $(this).button('loading');
    $.ajax({
      url: tra.site_root + "util/add_place/" + place_id + "/",
      type: "GET",
      success: function(res) {
        $(".add-place").text("已加入");
      }
    });
  });
};

//=====================================
//
// route page
//
//=====================================

tra.setDeletePlaceClickCallback = function() {
  $(".delete-place").click(function() {
    var place_id = $(this).attr("place_id");
    var place_name = $(this).parent().parent().parent().find("h3").text();
    $.ajax({
      url: tra.site_root + "util/delete_place/" + place_id + "/",
      type: "GET",
      success: function(res) {
        
      }
    });
    $(this).parent().parent().parent().fadeTo("fast", 0.00, function(){ //fade
      $(this).slideUp("400", function() { //slide up
        $(this).remove(); //then remove from the DOM
      });
    });
    $("option[value=" + place_name + "]").remove();
  });
};

tra.setStartRouteClickCallback = function() {
  $(".start-route").click(function() {
    var place_start = $("select[name=place_start] option:selected").text();
    var place_end = $("select[name=place_end] option:selected").text();
    var start_latlng = $("select[name=place_start] option:selected").val();
    var end_latlng = $("select[name=place_end] option:selected").val();
    location.href = tra.site_root + 'result/?place_start=' + encodeURIComponent(place_start) + '&place_end=' + encodeURIComponent(place_end) + '&start_latlng=' + start_latlng + '&end_latlng=' + end_latlng;
  });
};