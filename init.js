(function(){
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, c, m, prj_views, v;
  Ti.include('chester.js');
  Ti.include('prj_container.js');
  _b = ['models/project.js'];
  for (_a = 0, _c = _b.length; _a < _c; _a++) {
    m = _b[_a];
    Ti.include(m);
  }
  _e = ['controllers/projects_controller.js'];
  for (_d = 0, _f = _e.length; _d < _f; _d++) {
    c = _e[_d];
    Ti.include(c);
  }
  prj_views = 'views/projects/';
  _h = [prj_views + 'index.js', prj_views + 'new.js', prj_views + 'show.js', prj_views + 'edit.js'];
  for (_g = 0, _i = _h.length; _g < _i; _g++) {
    v = _h[_g];
    Ti.include(v);
  }
})();
