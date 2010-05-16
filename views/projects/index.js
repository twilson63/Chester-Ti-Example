(function(){
  var ProjectsIndex;
  var __slice = Array.prototype.slice, __bind = function(func, obj, args) {
    return function() {
      return func.apply(obj || {}, args ? args.concat(__slice.call(arguments, 0)) : arguments);
    };
  }, __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  ProjectsIndex = function ProjectsIndex() {
    return Chester.View.apply(this, arguments);
  };
  __extends(ProjectsIndex, Chester.View);
  ProjectsIndex.prototype.render = function render(options) {
    var _a, _b, _c, detail_view, master_view, obj, scroll_view;
    // remove current project list
    master_view = this.parent.parent.container.sv.masterView;
    detail_view = this.parent.parent.container.sv.detailView;
    //project_list: @parent.parent.container.project_list
    //master_view.remove project_list
    // Create New Project List
    this.project_list = Ti.UI.createTableView({
      top: 40
    });
    // Add Projects to list
    scroll_view = this.p_project_summary();
    this.parent.parent.current = scroll_view;
    this.project_list.appendRow(Ti.UI.createTableViewRow({
      title: '... Create New Project ...',
      project_id: -1
    }));
    _b = options.projects;
    for (_a = 0, _c = _b.length; _a < _c; _a++) {
      obj = _b[_a];
      this.p_add_row(obj.project, this.project_list);
    }
    master_view.add(this.project_list);
    this.project_list.addEventListener('click', __bind(function(e) {
        this.parent.parent.container.sv.detailView.remove(this.parent.parent.current);
        e.source.project_id === -1 ? this.parent.parent.run({
          controller: 'ProjectsController',
          action: '_new',
          params: {}
        }) : this.parent.parent.run({
          controller: 'ProjectsController',
          action: '_show',
          params: {
            project_id: e.source.project_id
          }
        });
        return true;
      }, this));
    detail_view.add(scroll_view);
    return true;
  };
  ProjectsIndex.prototype.add_project = function add_project(project) {
    return this.p_add_row(project, this.project_list);
  };
  ProjectsIndex.prototype.p_add_row = function p_add_row(project, view) {
    var view_row;
    view_row = Ti.UI.createTableViewRow({
      title: project.name,
      project_id: project.id
    });
    return view.appendRow(view_row);
  };
  ProjectsIndex.prototype.p_project_summary = function p_project_summary() {
    var welcome;
    welcome = Ti.UI.createScrollView({
      backgroundColor: '#fff',
      top: 40
    });
    welcome.add(Ti.UI.createLabel({
      text: 'Welcome to Projects',
      center: {
        x: 0,
        y: 0
      },
      color: '#000'
    }));
    return welcome;
  };
  // Register view to Patients Controller
  Chester._('app')._("ProjectsController").add(new ProjectsIndex('index'));
})();
