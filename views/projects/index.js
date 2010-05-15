(function(){
  var ProjectsIndex;
  var __extends = function(child, parent) {
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
    var master_view, project_list;
    Ti.API.info('In Index View');
    // remove current project list
    master_view = this.parent.parent.container.sv.masterView;
    project_list = this.parent.parent.container.project_list;
    //master_view.remove project_list
    // Create New Project List
    project_list = Ti.UI.createTableView({
      top: 40
    });
    // Add Projects to list
    while ((options.projects.isValidRow())) {
      this.p_add_row(options.projects, project_list);
    }
    return master_view.add(project_list);
  };
  ProjectsIndex.prototype.p_add_row = function p_add_row(rows, view) {
    var view_row;
    view_row = Ti.UI.createTableViewRow({
      title: rows.fieldByName('NAME'),
      project_id: rows.fieldByName('ID')
    });
    view.add(view_row);
    return rows.next();
  };
  // Register view to Patients Controller
  Chester._('app')._("ProjectsController").add(new ProjectsIndex('index'));
})();
