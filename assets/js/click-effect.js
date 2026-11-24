(function () {
  var CHAR = '/assets/img/click-char.png';
  var pre = new Image(); pre.src = CHAR;

  var style = document.createElement('style');
  style.textContent =
    '.pop-char{position:fixed;width:130px;height:130px;pointer-events:none;z-index:99999;' +
    'transform-origin:bottom center;animation:popin .8s cubic-bezier(.2,1.4,.4,1) forwards;}' +
    '@keyframes popin{' +
    '0%{opacity:0;transform:translate(-50%,10px) scale(.3) rotate(-12deg)}' +
    '65%{opacity:1;transform:translate(-50%,-80px) scale(1.1) rotate(6deg)}' +
    '100%{opacity:1;transform:translate(-50%,-80px) scale(1) rotate(0)}}';
  document.head.appendChild(style);

  function spawn(x, y) {
    var d = document.createElement('img');
    d.src = CHAR;
    d.className = 'pop-char';
    d.style.left = x + 'px';
    d.style.top = y + 'px';
    document.body.appendChild(d);
    setTimeout(function () {
      d.style.transition = 'opacity .35s';
      d.style.opacity = '0';
      setTimeout(function () { d.remove(); }, 400);
    }, 1600);
  }

  // 勾选任务时弹小人
  document.querySelectorAll('.task-item').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var r = btn.getBoundingClientRect();
      spawn(r.left + 20, r.top);
    });
  });

  // 点文章时弹小人 + 延迟跳转
  document.querySelectorAll('.post-list li a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      var r = a.getBoundingClientRect();
      spawn(r.left + Math.min(r.width / 2, 120), r.top + 8);
      var href = a.href;
      setTimeout(function () { window.location.href = href; }, 1500);
    });
  });
})();
