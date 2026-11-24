(function () {
  var list = document.getElementById('task-list');
  if (!list) return;
  var items = list.querySelectorAll('.task-item');
  items.forEach(function (item) {
    var key = 'niki-task-' + item.getAttribute('data-key');
    try {
      if (localStorage.getItem(key) === '1') item.classList.add('checked');
    } catch (e) {}
    item.addEventListener('click', function () {
      item.classList.toggle('checked');
      try {
        localStorage.setItem(key, item.classList.contains('checked') ? '1' : '0');
      } catch (e) {}
    });
  });
})();
