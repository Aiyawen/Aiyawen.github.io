(function () {
  function render(d) {
    var t = document.getElementById('weather-temp');
    var s = document.getElementById('weather-desc');
    if (!t || !s || !d) return;
    t.textContent = d.temp + '\u00b0';
    s.textContent = d.city + ' \u00b7 ' + d.weather + ' \u00b7 ' + d.time;
  }
  fetch('/assets/data/weather.json?t=' + Date.now())
    .then(function (r) { return r.json(); })
    .then(render)
    .catch(function () {});
})();
