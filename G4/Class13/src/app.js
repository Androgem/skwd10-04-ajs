let navService = {
    navItems: document.getElementsByClassName("nav-link"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,
    activateItem: function(item){
        for(let navItem of this.navItems) {
            navItem.classList.remove("active");
        }
        item.classList.remove("active");
    },
    showPage(page){
        for(let pageElement of this.pages){
            pageElement.style.display = "none";
        }
        page.style.display = "block";
    },
    registerNavListeners(){
        for(let i = 0; i < this.navItems.length; i++){
            this.navItems[i].addEventListener("click", function(){
                navService.activateItem(this);
                navService.showPage(navService.pages[i]);
            })
        }
        this.searchBtn.addEventListener("click", function(e){
            // da se vratime ovde
        })
    }
}

let weatherService = {
    apiKey: "74e59f6374abe0d9b758877616ae444c",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    getData: function(){
        fetch(`${this.apiUrl}?q=${this.city}&units=metrics&APPID=${this.apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(weatherResult) {
            console.log('The request succeeeded!');
            console.log(weatherResult);
            // uiService.loadStatistics(weatherResult);
            // uiService.loadHourlyTable(weatherResult);
        })
        .catch(function(error){
            console.log('The request failed!');
            console.log(error);
        })
    },
    aggregateStatistics: function(data){
        let temperatureSum = 0;
        let highestTemp = data.list[0];
        let lowestTemp = data.list[0];
        let humiditySum = 0;
        let highestHumidity = data.list[0];
        let lowestHumidity = data.list[0];
        for(let reading of data.list) {
            temperatureSum += reading.main.temp;
            humiditySum += reading.main.humidity;
            if(highestTemp.main.temp < reading.main.temp) highestTemp = reading;
            if(lowestTemp.main.temp > reading.main.temp) lowestTemp = reading;
            if(highestHumidity.main.humidity < reading.main.humidity) highestHumidity = reading;
            if(lowestHumidity.main.humidity > reading.main.humidity) lowestHumidity = reading;
        }
        return {
            temperature:{
                highest: highestTemp.main.temp,
                average: temperatureSum/data.list.length,
                lowest: lowestTemp.main.temp
            },
            humidity:{
                highest: highestHumidity.main.humidity,
                average: humiditySum/data.list.length,
                lowest: lowestHumidity.main.humidity
            },
            warmestTime: helperService.unixTimeStampToDate(highestTemp.dt),
            coldestTime: helperService.unixTimeStampToDate(lowestTemp.dt)            
        }
    }
}

let uiService = {
    statisticsResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),
    appendColumn: function(){

    },
    crateStatisticsRow: function() {

    },
    loadStatistics: function() {

    },
    createHourlyRow: function() {

    },
    loadHourlyTable: function() {
        
    }
}

let helperService = {
    unixTimeStampToDate: function(unixTimeStamp){
        return new Date(unixTimeStamp * 1000);
    }
}

navService.registerNavListeners();
weatherService.getData();