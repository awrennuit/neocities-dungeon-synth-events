const $navToggle = document.querySelector('.nav-toggle');
const $mainNavigation = document.querySelector('.main-navigation');

function toggleNavigation() {
  if ($mainNavigation.classList.contains('main-navigation--visible')) {
    $navToggle.setAttribute('aria-expanded', 'false');
    $mainNavigation.classList.remove('main-navigation--visible');
  } else {
    $navToggle.setAttribute('aria-expanded', 'true');
    $mainNavigation.classList.add('main-navigation--visible');
  }
}

function showEvents(type) {
  if (type) {
    const $showElList = document.querySelectorAll(
      `.month-wrapper li[type="${type}"]`
    );
    const $hideElList = document.querySelectorAll(
      `.month-wrapper li:not([type="${type}"])`
    );
    const $activeBtn = document.querySelector(
      `.filter-wrapper button[type="${type}"]`
    );
    const $inactiveBtnList = document.querySelectorAll(
      `.filter-wrapper button:not([type="${type}"])`
    );

    $showElList.forEach(function ($el) {
      $el.style.display = 'list-item';
    });

    $hideElList.forEach(function ($el) {
      $el.style.display = 'none';
    });

    $activeBtn.classList.add('active');

    $inactiveBtnList.forEach(function ($el) {
      $el.classList.remove('active');
    });
  } else {
    const $allElList = document.querySelectorAll('.month-wrapper li');
    const $activeBtn = document.querySelector(
      '.filter-wrapper button[type="all"]'
    );
    const $inactiveBtnList = document.querySelectorAll(
      '.filter-wrapper button:not([type="all"])'
    );

    $allElList.forEach(function ($el) {
      $el.style.display = 'list-item';
    });

    $activeBtn.classList.add('active');

    $inactiveBtnList.forEach(function ($el) {
      $el.classList.remove('active');
    });
  }
}
