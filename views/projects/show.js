(function(){
  var ProjectsShow;
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
  ProjectsShow = function ProjectsShow() {
    return Chester.View.apply(this, arguments);
  };
  __extends(ProjectsShow, Chester.View);
  ProjectsShow.prototype.render = function render(options) {
    var detail_view, project_view;
    detail_view = this.parent.parent.container.sv.detailView;
    project_view = Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    this.p_add_row(project_view, options.project.name, 'Name');
    this.p_button(project_view, 'Edit');
    this.project = options.project;
    this.parent.parent.current = project_view;
    detail_view.add(project_view);
    return true;
  };
  ProjectsShow.prototype.p_button = function p_button(tb, name) {
    var btnCreate, row;
    row = this.p_create_row('');
    btnCreate = Ti.UI.createButton({
      title: name,
      left: 150,
      width: 125,
      height: 40
    });
    btnCreate.addEventListener('click', __bind(function() {
        this.parent.parent.container.sv.detailView.remove(this.parent.parent.current);
        return this.parent.parent.run({
          controller: 'ProjectsController',
          action: '_edit',
          params: {
            project: this.project
          }
        });
      }, this));
    row.add(btnCreate);
    return tb.appendRow(row);
  };
  ProjectsShow.prototype.p_add_row = function p_add_row(tv, name, header) {
    return tv.appendRow(Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    }));
  };
  ProjectsShow.prototype.p_create_row = function p_create_row(name, header) {
    return Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    });
  };
  // Register view to Patients Controller
  Chester._('app')._("ProjectsController").add(new ProjectsShow('show'));
})();
