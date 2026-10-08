// ?lang=tr|en ile dil seçimi; yoksa tarayıcı dili. JS kapalıysa iki dil de görünür (noscript).
(function () {
  var p = new URLSearchParams(location.search).get('lang');
  var l = p === 'en' || p === 'tr' ? p : (navigator.language || 'tr').slice(0, 2) === 'tr' ? 'tr' : 'en';
  document.documentElement.lang = l;
  var s = document.createElement('style');
  s.textContent = '[data-lang="' + l + '"]{display:block}';
  document.head.appendChild(s);
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang a').forEach(function (a) {
      if (a.getAttribute('data-l') === l) a.classList.add('on');
    });
    var t = document.querySelector('meta[name="title-' + l + '"]');
    if (t) document.title = t.content;
  });
})();
