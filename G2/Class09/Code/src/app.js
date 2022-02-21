$(document).ready(function () {
    //initially we add information as title and text. We add them to the elements on the first page.
    $("#header").text("Weather Alert App");
    $("#greetingResult").text('Welcome to the most accurate weather app!');
    //since the about info is static data, it is a good practice to keep it in the code and use
    //object, since it is kind of a package. It is not a good practice to be fixed in the HTML!
    let aboutInfo = {
        creator: "SEDC Team",
        yearOfCreation: 2021,
        rank: "First place award"
    };

    let weatherData;
    const tempParam = "temp";
    const humParam = "humidity";
    const ascOrder = "asc";
    const descOrder = " desc";
    //Since we have different responsibilities in our app, it is good to group the data and the functionalities.
    //We use kind of services for that, represented as object.
    //The helperService has methods such as manipulating data.
    let helperService = {
        getDateFromSeconds: function(timeInSeconds){
            return new Date(timeInSeconds * 1000);
        },
        convertKelvinToCelsius: function(tempInKelvin){
            return tempInKelvin - 273.15;
        },
        aggregateStatistics: function (responseData) {
            debugger
            //we need to find min and max. We can set them to the first member of the array and then compare
            //each member with the set min and max. If needed, they will change.
            // let tempSum = 0;
            // let humiditySum = 0;
            // let highestTemp = responseData.list[0];
            // let lowestTemp = responseData.list[0];
            // let highestHumidity = responseData.list[0].main.humidity;
            // let lowestHumidity = responseData.list[0].main.humidity;
            // for (let item of responseData.list) {
            //     tempSum += item.main.temp;
            //     humiditySum += item.main.humidity;
            //     //We compare each member with the current mins and maxs and if needed it will change.
            //     if (highestTemp.main.temp_max < item.main.temp_max) {
            //         highestTemp = item;
            //     }
            //     if (highestHumidity < item.main.humidity) {
            //         highestHumidity = item.main.humidity;
            //     }
            //     if (lowestHumidity > item.main.humidity) {
            //         lowestHumidity = item.main.humidity
            //     }
            //     if (lowestTemp.main.temp_min > item.main.temp_min) {
            //         lowestTemp = item
            //     }
            // }

            let resultObject = {
                tempSum: 0,
                humiditySum: 0,
                lowestTemp: responseData.list[0],
                highestTemp: responseData.list[0],
                lowestHumidity: responseData.list[0].main.humidity,
                highestHumidity: responseData.list[0].main.humidity
            };
            responseData.list.reduce(function(result, item){
                debugger
                result.tempSum += item.main.temp;
                result.humiditySum += item.main.humidity;
                if(result.highestTemp.main.temp_max < item.main.temp_max){
                    result.highestTemp = item;
                }
                if(result.lowestTemp.main.temp_min > item.main.temp_min){
                    result.lowestTemp = item;
                }
                if(result.highestHumidity < item.main.humidity){
                    result.highestHumidity = item.main.humidity;
                }
                if(result.lowestHumidity > item.main.humidity){
                    result.lowestHumidity = item.main.humidity;
                }

                return result;
            }, resultObject);
            //we return the needed data as a  package. The best way is to have an object with named properties.
            //Each property can also be an object.
            // return {
            //     temperature: {
            //         highest: highestTemp.main.temp_max,
            //         lowest: lowestTemp.main.temp_min,
            //         average: tempSum / responseData.list.length
            //     },
            //     humidity: {
            //         highest: highestHumidity,
            //         lowest: lowestHumidity,
            //         average: humiditySum / responseData.list.length
            //     },
            //     coldestTime: lowestTemp.dt,
            //     warmestTime: highestTemp.dt
            // }
            return {
                temperature: {
                    highest: resultObject.highestTemp.main.temp_max,
                    lowest: resultObject.lowestTemp.main.temp_min,
                    average: resultObject.tempSum / responseData.list.length
                },
                humidity: {
                    highest: resultObject.highestHumidity,
                    lowest: resultObject.lowestHumidity,
                    average: resultObject.humiditySum / responseData.list.length
                },
                coldestTime: resultObject.lowestTemp.dt,
                warmestTime: resultObject.highestTemp.dt
            }

        },
        sortHourlyData: function(sortParam, sortOrder){
            //to-do check negative scenarios, valid values for the params..
            if(sortParam != tempParam && sortParam != humParam){
                alert("Invalid sort param");
                return;
            }
            if(sortOrder != ascOrder && sortOrder != descOrder){
                alert("Invalid sort order");
                return;
            }
            
            if(sortParam == tempParam){
                if(sortOrder == ascOrder){
                    weatherData.list.sort((item1, item2) => item1.main.temp - item2.main.temp);
                    //refresh table
                    uiService.loadHourlyData(weatherData);
                    uiService.toggleElement($("#sortTempAsc"), false);
                    uiService.toggleElement($("#sortTempDesc"), true);
                }
                else{
                    //desc
                    weatherData.list.sort((item1, item2) => item2.main.temp - item1.main.temp);
                    //refresh table
                    uiService.loadHourlyData(weatherData);
                    uiService.toggleElement($("#sortTempAsc"), true);
                    uiService.toggleElement($("#sortTempDesc"), false);
                }
            }
            else{
                //humidity
                if(sortOrder == ascOrder){
                    weatherData.list.sort((item1, item2) => item1.main.humidity - item2.main.humidity);
                    //refresh table
                    uiService.loadHourlyData(weatherData);
                    uiService.toggleElement($("#sortHumAsc"), false);
                    uiService.toggleElement($("#sortHumDesc"), true);
                }
                else{
                    //desc
                    weatherData.list.sort((item1, item2) => item2.main.humidity - item1.main.humidity);
                    //refresh table
                    uiService.loadHourlyData(weatherData);
                    uiService.toggleElement($("#sortHumAsc"), true);
                    uiService.toggleElement($("#sortHumDesc"), false);
                }
            }
        },
        registerSortEventListeners: function(){
            $("#sortTempAsc").click(function(){
                helperService.sortHourlyData(tempParam,ascOrder); //sortHourlyData("temp","asc");
            });
            $("#sortTempDesc").click(function(){
                helperService.sortHourlyData(tempParam,descOrder); //sortHourlyData("temp","desc");
            });
            $("#sortHumAsc").click(function(){
                helperService.sortHourlyData(humParam,ascOrder); //sortHourlyData("humidity","asc");
            });
            $("#sortHumDesc").click(function(){
                helperService.sortHourlyData(humParam,descOrder); //sortHourlyData("humidity","desc");
            });
        }
    }


    //The uiService is responsible for rendering and manipulating the HTML.
    let uiService = {
        showAboutInfo: function () {
            $('#aboutResult').html(`<h2>This application is created by ${aboutInfo.creator}, in ${aboutInfo.yearOfCreation} year</h2>.
            <p>It has the following award <b>${aboutInfo.rank}</b>.</p>`)
        },
        showStatistics: function (aggregatedStatisticsData) {
            $("#statisticsResult").html("");
            $("#statisticsResult").html(`<div class="container">
            <div class="row">
            <h3 class="col-sm-4">AVG TEMP: ${helperService.convertKelvinToCelsius(aggregatedStatisticsData.temperature.average).toFixed(2)} C</h3>
            <h3 class="col-sm-4">AVG HUMIDITY: ${aggregatedStatisticsData.humidity.average}</h3>
            </div>
            <div class="row">
            <h3 class="col-sm-4">HIGHEST TEMP: ${helperService.convertKelvinToCelsius(aggregatedStatisticsData.temperature.highest).toFixed(2)} C</h3>
            <h3 class="col-sm-4">WARMEST TIME: ${helperService.getDateFromSeconds(aggregatedStatisticsData.warmestTime).toGMTString()}</h3>
            <h3 class="col-sm-4">HIGHEST HUMIDITY: ${aggregatedStatisticsData.humidity.highest}</h3>
            </div>
            <div class="row">
            <h3 class="col-sm-4">LOWEST TEMP: ${helperService.convertKelvinToCelsius(aggregatedStatisticsData.temperature.lowest).toFixed(2)} C</h3>
            <h3 class="col-sm-4">COLDEST TIME: ${helperService.getDateFromSeconds(aggregatedStatisticsData.coldestTime).toGMTString()}</h3>
            <h3 class="col-sm-4">LOWEST HUMIDITY: ${aggregatedStatisticsData.humidity.lowest}</h3>
            </div>
            </div>`)
        },
        loadHourlyData: function(data){
            $("#hourlyTableResult").html("");
            $("#hourlyTableResult").append(`<div class="row">
            <div class='col-sm-2'>Icon</div>
            <div class='col-sm-2'>Description</div>
            <div class='col-sm-2'>Date and time</div>
            <div class='col-sm-2'>Temp <button class='btn' id='sortTempAsc'>ASC</button><button class='btn' id='sortTempDesc'>DESC</button></div>
            <div class='col-sm-2'>Humidity <button class='btn' id='sortHumAsc'>ASC</button><button class='btn' id='sortHumDesc'>DESC</button></div>
            <div class='col-sm-2'>Wind speed</div>
            </div>`);

            data.list.forEach(item => {
                $("#hourlyTableResult").append(`<div class="row">
                <div class='col-sm-2'><img src="http://openweathermap.org/img/w/${item.weather[0].icon}.png"></div>
                <div class='col-sm-2'>${item.weather[0].description}</div>
                <div class='col-sm-2'>${helperService.getDateFromSeconds(item.dt).toGMTString()}</div>
                <div class='col-sm-2'>${helperService.convertKelvinToCelsius(item.main.temp).toFixed(2)} C</div>
                <div class='col-sm-2'>${item.main.humidity}</div>
                <div class='col-sm-2'>${item.wind.speed} m/s</div>
                </div>`);
            })
            //in this method, we generate the sort buttons
            helperService.registerSortEventListeners();
        },
        toggleElement: function(element, showElement){
            if(showElement){
                element.css("display", "block");
            }
            else{
                element.css("display", "none");
            }
        }
    }

    //The weatherService is responsible for accessing weather data.
    //Api key and base url are fixed data, we can keep them as properties. it has one method for
    //making AJAX calls.
    let weatherApiService = {
        apiKey: "f369d0b7d1652d9e091fe8121aa44ede",
        apiBaseUrl: "https://api.openweathermap.org/data/2.5/forecast",
        getCurrentWeatherData: function (city) {
            uiService.toggleElement($("#loader"), true);
            $.ajax({
                url: `${this.apiBaseUrl}?q=${city}&units=metrics&APPID=${this.apiKey}`,
                success: function (response) {
                    debugger
                    uiService.toggleElement($("#loader"), false);
                    console.log("Request succeeded");
                    console.log(response);
                    //in order to be able to access the response outside success function, we assign it
                    // to a new, global variable, weatherData. Because weatherData is global, it can be used through all services.
                    weatherData = response;
                    //after we get the response, we need to do some data aggregations. We call the appropriate service and method.
                    let aggregatedStatistics = helperService.aggregateStatistics(response);
                    console.log(aggregatedStatistics);
                    //after we get the aggregated data, we need to show it on the UI with appropriate HTML, so we send it
                    //to our service and its method.
                    uiService.showStatistics(aggregatedStatistics);

                    //load hourly data
                    uiService.loadHourlyData(response);
                },
                error: function (errorResponse) {
                    uiService.toggleElement($("#loader"), false);
                    console.log("An error occurred!");
                    console.log(errorResponse);
                }
            })
        }
    }

    //Navigation service is responsible for the navigation in our app. That is why it is keeping info 
    //for the navigation items and navigation functionalities.
    let navigationService = {
        navItems: $(".nav-item"),
        navSearchInput: $("#citySearchInput"),
        navSearchButton: $("#citySearchBtn"),
        pages: $("#pages").children(),
        activateNavItem: function (navItem) {
            //the parameter item is passed as a jquery object. But, when we traverse an array of elements in 
            //Jquery they are DOM elements. To work with them as JQuery objects we must put them in $().

            //we must set one elem as active, so we remove the class from all other elements.
            for (let item of this.navItems) {
                $(item).removeClass("active");
            }
            navItem.addClass("active");
        },
        showPage: function (pageIndex) {

            //we must show one page, so we hide all the other pages. At first we hide them all, then show what is needed.
            for (let page of this.pages) {
                //$(page).css("display", "none");
                $(page).hide();
            }
            //$(this.pages[pageIndex]).css("display", "block");
            $(this.pages[pageIndex]).show();
        },
        registerEventListeners: function () {
            debugger;
            for (let i = 0; i < this.navItems.length; i++) {
                $(this.navItems[i]).click(function () {
                    //this (keyword this) is not the object (navigation service), it is the element the event happened on. We put it
                    //in $(), to pass it as JQuery object.
                    navigationService.activateNavItem($(this)) //this -> element
                    navigationService.showPage(i);
                })
            }
            this.navSearchButton.click(function () {
                if (!navigationService.navSearchInput.val()) {
                    alert("You must enter city!")
                    return;
                }
                debugger;
                weatherApiService.getCurrentWeatherData(navigationService.navSearchInput.val().toLowerCase());

            })
        }
    }
    //initially, we must get data for a default city, to be shown on the first page.
    weatherApiService.getCurrentWeatherData("skopje");
    //initially, we fill the about info. It will be shown when we get to the About page.
    uiService.showAboutInfo();
    //when the document is ready we must set the event listeners to our elements.
    navigationService.registerEventListeners();

});