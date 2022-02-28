// https://api.openweathermap.org/data/2.5/forecast?q=Bitola&units=metric&&APPID=7fafdc57595b548b898107e7e1791b19

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
  },
};

navService.registerNavListeners();
