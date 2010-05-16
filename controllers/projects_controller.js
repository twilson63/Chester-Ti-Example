(function(){
  var ProjectsController;
  var __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  ProjectsController = function ProjectsController() {
    return Chester.Controller.apply(this, arguments);
  };
  __extends(ProjectsController, Chester.Controller);
  ProjectsController.prototype._index = function _index(params) {
    params.projects = this.parent.Models._('Project')._all();
    return this.find('index').render(params);
  };
  ProjectsController.prototype._new = function _new(params) {
    return this.find('new').render(params);
  };
  ProjectsController.prototype._create = function _create(params) {
    params.project = this.parent.Models._('Project')._create(params.project);
    if (params.project.errors) {
      return this.find('new').render(params);
    } else {
      return this.find('show').render(params);
    }
  };
  ProjectsController.prototype._show = function _show(params) {
    params.project = this.parent.Models._('Project')._find_by_id(params.project.id);
    return this.find('show').render(params);
  };
  ProjectsController.prototype._edit = function _edit(params) {
    params.project = this.parent.Models._('Project')._find_by_id(params.project.id);
    return this.find('edit').render(params);
  };
  ProjectsController.prototype._update = function _update(params) {
    params.project = this.parent.Models._('Project')._update(params.project);
    if (params.project.errors) {
      return this.find('edit').render(params);
    } else {
      return this.find('show').render(params);
    }
  };
  ProjectsController.prototype._destroy = function _destroy(params) {
    params.project = this.parent.Models._('Project')._delete(params.project);
    if (params.project.errors) {
      return this.find('show').render(params);
    } else {
      params.projects = this.parent.Models._('Project')._all();
      return this.find('index').render(params);
    }
  };
  // Register Controller to application
  Chester._('app').add(new ProjectsController('ProjectsController'));
})();
