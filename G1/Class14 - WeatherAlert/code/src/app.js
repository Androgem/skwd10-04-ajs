const navService = {
  navItems: document.getElementsByClassName('nav-link'),
  navSearch: document.getElementById('citySearchInput'),
  searchButton: document.getElementById('citySearchButton'),
  pages: document.getElementById('pages').children,
  activateItem: function (item) {
    for (let navItem of this.navItems) {
      navItem.classList.remove('active');
    }
    item.classList.add('active');
  },
  showPage(page) {
    for (pageElement of this.pages) {
      pageElement.style.display = 'none';
    }
    page.style.display = 'block';
  },
  registerNavListeners() {
    for (let i = 0; i < this.navItems.length; i++) {
      this.navItems[i].addEventListener('click', function () {
        navService.activateItem(this);
        navService.showPage(navService.pages[i]);
      });
    }
    this.searchButton.addEventListener('click', function (e) {
      e.preventDefault();
      uiService.tbody.innerHTML = '';
      weatherService.city = navService.navSearch.value;
      weatherService.getWeather();
    });
  },
};

const weatherService = {
  city: 'Bitola',
  units: 'metric',
  appId: '7fafdc57595b548b898107e7e1791b19',
  apiUrl: 'https://api.openweathermap.org/',
  getWeather: function () {
    fetch(
      `${this.apiUrl}/data/2.5/forecast?q=${this.city}&units=${this.units}&APPID=${this.appId}`
    )
      .then((res) => res.json())
      .then((res) => {
        uiService.renderStatistics(res);
        res.list.forEach((res) => {
          uiService.generateTable(res);
        });
      })
      .catch((err) => console.log(err));
  },
  aggregateStatistics: function (weather) {
    let tempSum = 0;
    let tempHighest = weather.list[0].main.temp;
    let tempLowest = weather.list[0].main.temp;

    let humiditySum = 0;
    let humidityHighest = weather.list[0].main.humidity;
    let humidityLowest = weather.list[0].main.humidity;

    weather.list.forEach((hour) => {
      tempSum += hour.main.temp;
      humiditySum += hour.main.humidity;

      if (hour.main.temp > tempHighest) tempHighest = hour;
      if (hour.main.temp < tempLowest) tempLowest = hour;
      if (hour.main.humidity > humidityHighest) humidityHighest = hour;
      if (hour.main.humidity < humidityLowest) humidityLowest = hour;
    });

    return {
      temperature: {
        highest: tempHighest.main.temp,
        lowest: tempLowest.main.temp,
        average: tempSum / weather.list.length,
      },
      humidity: {
        highest: humidityHighest.main.humidity,
        lowest: humidityLowest.main.humidity,
        average: humiditySum / weather.list.length,
      },
      warmestTime: new Date(tempHighest.dt * 1000),
      coldestTime: new Date(tempLowest.dt * 1000),
    };
  },
};

const uiService = {
  statisticsResult: document.getElementById('statisticsResult'),
  tbody: document.getElementById('tbody'),
  generateGrid: function (data) {
    const row = document.createElement('div');
    const col = document.createElement('div');
    row.classList.add('row');
    col.classList.add('col');
    col.innerHTML = data;
    row.appendChild(col);
    return row;
  },
  generateTable: function (data) {
    const tr = document.createElement('tr');
    this.tbody.appendChild(tr);
    tr.innerHTML = this.fillTable(data);
  },
  fillTable: function (time) {
    const url = 'http://openweathermap.org/img/w/';
    return `
    <td> <img src="${url + time.weather[0].icon}.png"> </td>
    <td>${time.weather[0].description}</td>
    <td>${time.dt_txt}</td>
    <td>${time.main.temp}</td>
    <td>${time.main.humidity}</td>
    <td>${time.wind.speed}</td>
    `;
  },
  renderStatistics: function (weatherData) {
    this.clearElement(this.statisticsResult);
    const statistics = weatherService.aggregateStatistics(weatherData);
    this.statisticsResult.appendChild(
      this.generateGrid(`City: ${weatherData.city.name}`)
    );

    this.statisticsResult.appendChild(
      this.generateGrid(
        `Temperature highest: ${statistics.temperature.highest}`
      )
    );

    this.statisticsResult.appendChild(
      this.generateGrid(`Temperature lowest: ${statistics.temperature.lowest}`)
    );

    this.statisticsResult.appendChild(
      this.generateGrid(
        `Temperature average: ${statistics.temperature.average}`
      )
    );

    this.statisticsResult.appendChild(
      this.generateGrid(`Humidity highest: ${statistics.humidity.highest}`)
    );

    this.statisticsResult.appendChild(
      this.generateGrid(`Humidity lowest: ${statistics.humidity.lowest}`)
    );

    this.statisticsResult.appendChild(
      this.generateGrid(`Humidity average: ${statistics.humidity.average}`)
    );

    this.statisticsResult.appendChild(
      this.generateGrid(
        `Wormest time of the days ahead: ${statistics.warmestTime}`
      )
    );

    this.statisticsResult.appendChild(
      this.generateGrid(
        `Coldest time of the days ahead: ${statistics.coldestTime}`
      )
    );
  },
  clearElement(element) {
    element.innerHTML = '';
  },
};

weatherService.getWeather();
navService.registerNavListeners();
