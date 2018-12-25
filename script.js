var a = document.getElementsByTagName("a")[1];
var sort = document.getElementsByClassName("sort")[0];
var k = true;
var script;
var items = [];

function openSort() {
    if (k === true) {
        sort.style.visibility = "visible";
        k = false;
    }
    else {
        sort.style.visibility = "hidden";
        k = true;
    }
}

var mainDiv = document.getElementsByClassName("main-content")[0];
mainDiv.style.zIndex = "100";



var divModal = document.createElement('div');
divModal.style.position = "fixed";
divModal.style.visibility = "hidden"
divModal.style.width = "60%";
divModal.style.border = "1px solid black";
divModal.style.backgroundColor = "white";
divModal.style.left = "20%";
divModal.style.top = "40px";
divModal.style.display = "flex";
divModal.style.flexDirection = "column";
divModal.style.alignItems = "flex-start";
divModal.style.justifyContent = "flex-start";
divModal.style.zIndex = "999";



mainDiv.appendChild(divModal);

var inputText = document.getElementsByClassName("serch")[0];
var inputButton = document.getElementsByTagName("button")[0];
var inputCheckboxBuy = document.getElementsByTagName("input")[1];
var inputCheckboxSell = document.getElementsByTagName("input")[2];

var minCost = document.getElementsByTagName("input")[3];
var maxCost = document.getElementsByTagName("input")[4];

var minRoom = document.getElementsByTagName("input")[5];
var maxRoom = document.getElementsByTagName("input")[6];

var minBathroom = document.getElementsByTagName("input")[7];
var maxBathroom = document.getElementsByTagName("input")[8];

var minBadhroom = document.getElementsByTagName("input")[9];
var maxBadhroom = document.getElementsByTagName("input")[10];


var e = document.getElementById("elementId");
var value;
var text;
var town1;

var check = undefined;
var help = 0;
var shetForCheckbox1 = 0;
var shetForCheckbox2 = 0;

function activeCheckbox() {
    help++;
}

function whichCheckbox1() {
    shetForCheckbox1++;
    if (shetForCheckbox1 % 2 == 1) {
        check = "buy";
    }
}

function whichCheckbox2() {
    shetForCheckbox2++;
    if (shetForCheckbox2 % 2 == 1) {
        check = "rent";
    }
}

a.addEventListener("click", openSort);

inputCheckboxBuy.addEventListener("click", activeCheckbox);
inputCheckboxBuy.addEventListener("click", whichCheckbox1);

inputCheckboxSell.addEventListener("click", activeCheckbox);
inputCheckboxSell.addEventListener("click", whichCheckbox2);

inputButton.addEventListener("click", serch);

function serch() {
    //IsOpen = 0;
    items = [];
    divModal.style.visibility = "hidden";
    if (k === true) {
        if (help % 2 === 0) {
            alert("Вы не выбрали тип поиска или же выбрали оба(Купить/Продать)");
        }
        else {
            e.options[e.selectedIndex].value;
            text = e.options[e.selectedIndex].text;

            if (text === "Выбрать страну") {
                alert("Выберите страну для поиска");
            }
            else {
                switch (text) {
                    case "Australia":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "au";
                        call(check, text, town);
                        break;
                    case "Brasil":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "br";
                        call(check, text, town);
                        break;
                    case "Deutschland":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "de";
                        call(check, text, town);
                        break;
                    case "España":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "es";
                        call(check, text, town);
                        break;
                    case "France":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "fr";
                        call(check, text, town);
                        break;
                    case "India":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "in";
                        call(check, text, town);
                        break;
                    case "Italia":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "it";
                        call(check, text, town);
                        break;
                    case "Mexico":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "mx";
                        call(check, text, town);
                        break;
                    case "UK":
                        town = inputText.value;
                        console.log(town);
                        console.log(text);
                        console.log(check);
                        text = "uk";
                        call(check, text, town);
                        break;
                }
            }
        }
    }
    if (k === false) {
        console.log("false");
        if (help % 2 === 0) {
            alert("Вы не выбрали тип поиска или же выбрали оба(Купить/Продать)");
        }
        else {
            e.options[e.selectedIndex].value;
            text = e.options[e.selectedIndex].text;

            if (text === "Выбрать страну") {
                alert("Выберите страну для поиска");
            }
            else {
                if (+minCost.value > +maxCost.value || +minRoom.value > +maxRoom.value || +minBathroom.value > +maxBathroom.value || +minBadhroom.value > +maxBadhroom.value) {
                    alert("Введён некоректный диапозон значений");
                }
                else {
                    switch (text) {
                        case "Australia":
                            town = inputText.value;
                            text = "au";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "Brasil":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "br";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "Deutschland":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "de";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "España":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "es";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "France":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "fr";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "India":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "in";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "Italia":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "it";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "Mexico":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "mx";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                        case "UK":
                            town = inputText.value;
                            console.log(town);
                            console.log(text);
                            console.log(check);
                            text = "uk";
                            callSort(check, text, town, +minCost.value, +maxCost.value, +minRoom.value, +maxRoom.value, +minBathroom.value, +maxBathroom.value, +minBadhroom.value, +maxBadhroom.value);
                            break;
                    }
                }
            }
        }
    }
}


function call(check, text, town) {
    switch (text) {
        case "au":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.com.au/api?encoding=json&pretty=1&action=search_listings&country=au&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "br":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.com.br/api?encoding=json&pretty=1&action=search_listings&country=br&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "de":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.de/api?encoding=json&pretty=1&action=search_listings&country=de&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "es":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.es/api?encoding=json&pretty=1&action=search_listings&country=es&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "fr":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.fr/api?encoding=json&pretty=1&action=search_listings&country=fr&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "in":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.in/api?encoding=json&pretty=1&action=search_listings&country=in&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "it":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.it/api?encoding=json&pretty=1&action=search_listings&country=it&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "mx":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.mx/api?encoding=json&pretty=1&action=search_listings&country=mx&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "uk":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;

    }
}
function callSort(check, text, town, minCost, maxCost, minRoom, maxRoom, minBathroom, maxBathroom, minBadhroom, maxBadhroom) {
    switch (text) {
        case "au":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.com.au/api?encoding=json&pretty=1&action=search_listings&country=au&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "br":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.com.br/api?encoding=json&pretty=1&action=search_listings&country=br&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "de":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.de/api?encoding=json&pretty=1&action=search_listings&country=de&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "es":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.es/api?encoding=json&pretty=1&action=search_listings&country=es&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "fr":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.fr/api?encoding=json&pretty=1&action=search_listings&country=fr&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "in":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.is/api?encoding=json&pretty=1&action=search_listings&country=in&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "it":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.it/api?encoding=json&pretty=1&action=search_listings&country=it&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "mx":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.com.mx/api?encoding=json&pretty=1&action=search_listings&country=mx&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        case "uk":
            script = document.createElement('SCRIPT');
            script.src = "https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=" + check + "&place_name=" + town.toLowerCase() + "&price_min=" + minCost + "&price_max=" + maxCost + "&room_min=" + minRoom + "&room_max" + maxRoom + "&bedroom_min=" + minBadhroom + "&bedroom_max=" + maxBadhroom + "&bathroom_min=" + minBathroom + "&bathroom_max=" + maxBathroom + "&callback=callbackFunc1";
            document.getElementsByTagName("head")[0].appendChild(script);
            break;

    }
}

var items1 = [];

function callbackFunc1(result) {
    items = result.response.listings;
    items1 = result.response;

    if (+items1.application_response_code > 199 || +items1.application_response_code < 100 || items1.listings.length === 0) {
        alert("Ничего не найдено");
    }
    else {
        loadApartament(items);
    }
}

var IsOpen = 0;

function loadApartament(items) {
    console.log(0);
    if (IsOpen > 0) {
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
    } else {
        IsOpen = 1;
    }
    mainDiv.appendChild(divModal);

    for (var i in items) {
        var newDiv = document.createElement("div");
        newDiv.style.width = "100%";
        newDiv.style.height = "auto";
        newDiv.style.border = "1px solid black";
        newDiv.style.backgroundColor = "white";
        newDiv.style.borderRadius = "10px";
        newDiv.style.marginBottom = "20px";

        var img = document.createElement("img");
        img.style.width = "40%";
        img.style.borderRadius = "10px 0px 0px 10px";
        img.style.marginBottom = "0.5px";
        img.style.marginTop = "0.5px";

        var divCost = document.createElement("div");
        var cost = document.createElement("p");
        var costText = document.createTextNode(items[i].price + "$");

        var titl = document.createElement("p");
        var titlText = document.createTextNode(items[i].title);

        var info = document.createElement("p");
        var infoText = document.createTextNode(items[i].summary);

        info.appendChild(infoText);
        info.style.fontSize = "14px";
        info.style.marginTop = "5px";
        info.style.color = "#A9A9A9";


        titl.appendChild(titlText);
        titl.style.fontWeight = "bold";
        titl.style.fontFamily = "Arial";

        cost.appendChild(costText);
        cost.style.fontFamily = "Arial";
        cost.style.fontSize = "14px";
        cost.style.color = "white";
        cost.style.backgroundColor = "#696969";

        divCost.style.display = "flex";
        divCost.style.flexDirection = "column";
        divCost.style.alignItems = "flex-start";
        divCost.style.marginLeft = "20px";
        divCost.style.marginTop = "5px";

        divCost.appendChild(cost);
        divCost.appendChild(titl);
        divCost.appendChild(info);


        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "flex-start";
        newDiv.style.alignItems = "flex-start";

        var imgHeart = document.createElement("img");
        newDiv.appendChild(imgHeart);
        imgHeart.style.marginTop = "172px";
        imgHeart.style.marginRight = "2px";
        imgHeart.style.width = "7%";
        imgHeart.src = "heartBlack.png";



        var a = document.createElement("a");
        var aText = document.createTextNode("Просмотреть подробную информацию...");

        a.appendChild(aText);
        a.style.marginTop = "110px";
        divCost.appendChild(a);

        imgHeart.setAttribute('data-image-id', i);
        imgHeart.addEventListener("click", function () {
            heartColor(this);
        })
        a.setAttribute('data-image-id', i);

        a.addEventListener("click", function () {
            modalOpen(this);
        })



        img.src = items[i].img_url;
        newDiv.appendChild(img);
        newDiv.appendChild(divCost);
        newDiv.appendChild(imgHeart);

        mainDiv.appendChild(newDiv);
    }
}


var use = true;
var arr = [];



function heartColor(a) {
    var key = a.getAttribute("data-image-id");
    if (use === true) {
        a.src = "heartRed.png";
        use = false;

        var img = document.createElement("img");

        img.src = items[key].img_url;
        arr.concat(localValueImg);
        arr.push(img.src);
        localStorage.setItem("arrImg", JSON.stringify(arr));



    }
    else {
        a.src = "heartBlack.png";
        use = true;
    }
}

var modalIsOpen = 0;

function modalOpen(b) {
    if (modalIsOpen > 0) {
        while (divModal.firstChild) {
            divModal.removeChild(divModal.firstChild);
        }
    } else {
        modalIsOpen = 1;
    }

    var key = b.getAttribute("data-image-id");
    console.log(key);
    divModal.style.visibility = "visible";

    var conteiner = document.createElement("div");
    conteiner.style.display = "flex";
    conteiner.style.alignItems = "flex-start";


    var imgModal = document.createElement("img");
    imgModal.src = items[key].img_url;
    imgModal.style.width = "70%";



    var div1Modal = document.createElement("div");
    var nameModal = document.createElement("p");
    var textName = document.createTextNode(items[key].title);
    nameModal.appendChild(textName);
    nameModal.style.fontWeight = "bold";
    nameModal.style.fontSize = "24px";
    nameModal.style.fontFamily = "Arial";

    div1Modal.appendChild(nameModal);
    div1Modal.style.marginLeft = "20px";
    div1Modal.style.display = "flex";
    div1Modal.style.flexDirection = "column";

    var spisok = document.createElement("ul");


    for (var i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.style.fontSize = "18px";
        if (i === 0) {
            var price = document.createElement("p");
            var priceText = document.createTextNode("Price: " + items[key].price_formatted);
            price.appendChild(priceText);
            li.appendChild(price);
            spisok.appendChild(li);
        }
        if (i === 1) {
            var bath = document.createElement("p");
            var bathText = document.createTextNode("Bathroom: " + items[key].bathroom_number);
            bath.appendChild(bathText);
            li.appendChild(bath);
            spisok.appendChild(li);
        }

        if (i === 2) {
            var bed = document.createElement("p");
            var bedText = document.createTextNode("Bedroom: " + items[key].bedroom_number);
            bed.appendChild(bedText);
            li.appendChild(bed);
            spisok.appendChild(li);
        }

        if (i === 3) {
            var type = document.createElement("p");
            var typeText = document.createTextNode("Type: " + items[key].property_type);
            type.appendChild(typeText);
            li.appendChild(type);
            spisok.appendChild(li);
        }
    }
    var mapModal = document.createElement("div");
    mapModal.style.width = "100%";
    mapModal.style.height = "300px";

    var exit = document.createElement("img");
    exit.src = "krest.png";
    exit.style.width = "3%";
    exit.style.position = "absolute";
    exit.style.backgroundColor = "#A9A9A9";
    exit.style.left = "96%";

    div1Modal.appendChild(spisok);

    conteiner.appendChild(imgModal);
    conteiner.appendChild(div1Modal);
    conteiner.appendChild(exit);

    conteiner.style.display = "flex";

    divModal.appendChild(exit);
    divModal.appendChild(conteiner);
    divModal.appendChild(mapModal);
    initMap(items[key].latitude, items[key].longitude);

    exit.addEventListener("mousemove", function () { exit.style.width = "3.5%"; });
    exit.addEventListener("mouseout", function () { exit.style.width = "3%"; });
    exit.addEventListener("click", function () { divModal.style.visibility = "hidden"; });


    function initMap(latid, long) {
        var myLatlng = new google.maps.LatLng(latid, long);
        var mapOptions = {
            zoom: 15,
            center: myLatlng
        }
        var myMap = new google.maps.Map(mapModal, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: myMap
        });
    }
}

var likeAppart = document.getElementsByTagName("a")[0];
var divLikeAp = document.createElement("div");


divLikeAp.style.position = "absolute";
divLikeAp.style.visibility = "hidden";
divLikeAp.style.width = "60%";
divLikeAp.style.height = "auto";
divLikeAp.style.border = "1px solid black";
divLikeAp.style.backgroundColor = "gray";
divLikeAp.style.left = "20%";
divLikeAp.style.top = "40px";
divLikeAp.style.display = "flex";
divLikeAp.style.flexDirection = "column";
divLikeAp.style.alignItems = "flex-start";
divLikeAp.style.justifyContent = "flex-start";
divLikeAp.style.zIndex = "999";
divLikeAp.style.padding = "15px";
divLikeAp.style.overflowY = "scroll";


mainDiv.appendChild(divLikeAp);

var d = true;
var localValueImg;
likeAppart.onclick = function () {
    if (d === true) {
        divLikeAp.style.visibility = "visible";
        d = false;

        localValueImg = JSON.parse(localStorage.getItem("arrImg"));

        for (var i in localValueImg) {
            var img1 = document.createElement("img");
            img1.src = localValueImg[i];
            divLikeAp.appendChild(img1);

            var newD = document.createElement("div");
            newD.style.width = "100%";
            newD.style.height = "auto";

            newD.style.backgroundColor = "white";
            newD.style.borderRadius = "10px";
            newD.style.marginBottom = "20px";

            img1.style.width = "40%";
            img1.style.borderRadius = "10px 0px 0px 10px";
            img1.style.marginBottom = "0.5px";
            img1.style.marginTop = "0.5px";

            newD.appendChild(img1);
            divLikeAp.appendChild(newD);
        }

    }

    else {
        divLikeAp.style.visibility = "hidden";
        d = true;
    }
}