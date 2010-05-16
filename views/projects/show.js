(function(){
  var ProjectsShow;
  var __extends = function(child, parent) {
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
    detail_view.remove(options.clientWin);
    project_view = Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    this.p_add_row(project_view, options.project.name, 'Name');
    detail_view.add(project_view);
    this.clientWin = project_view;
    return true;
  };
  ProjectsShow.prototype.p_add_row = function p_add_row(tv, name, header) {
    return tv.appendRow(Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    }));
  };
  // Register view to Patients Controller
  Chester._('app')._("ProjectsController").add(new ProjectsShow('show'));
})();
