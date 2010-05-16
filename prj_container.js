(function(){
  var ProjectsContainer, root;
  var __slice = Array.prototype.slice, __bind = function(func, obj, args) {
    return function() {
      return func.apply(obj || {}, args ? args.concat(__slice.call(arguments, 0)) : arguments);
    };
  };
  ProjectsContainer = function ProjectsContainer() {
    this.window = Ti.UI.createWindow();
    this.project_list = Ti.UI.createTableView();
    this.sv = Ti.UI.iPad.createSplitWindow({
      detailView: Ti.UI.iPhone.createNavigationGroup({
        window: this.window
      }),
      masterView: Ti.UI.iPhone.createNavigationGroup({
        window: this.window,
        top: 40
      })
    });
    this.sv.masterView.add(this.project_list);
    this.sv.addEventListener('visible', __bind(function(e) {
        if (e.view === 'detail') {
          e.button.title = 'Projects';
          this.window.leftNavButton = e.button;
          return this.window.leftNavButton;
        } else if (e.view === 'master') {
          this.window.leftNavButton = null;
          return this.window.leftNavButton;
        }
      }, this));
    return this;
  };
  root = (typeof exports !== "undefined" && exports !== null) ? exports : this;
  root.ProjectContainer = ProjectsContainer;
})();
