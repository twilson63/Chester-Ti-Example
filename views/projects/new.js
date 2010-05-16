(function(){
  var ProjectsNew;
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
  ProjectsNew = function ProjectsNew() {
    return Chester.View.apply(this, arguments);
  };
  __extends(ProjectsNew, Chester.View);
  ProjectsNew.prototype.render = function render(options) {
    var detail_view, new_project_view;
    detail_view = this.parent.parent.container.sv.detailView;
    detail_view.remove(options.clientWin);
    new_project_view = Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    this.p_text_row(new_project_view, 'Name', 'New Project');
    this.p_text_row(new_project_view, 'Description');
    this.p_button(new_project_view, 'Create Project');
    detail_view.add(new_project_view);
    this.clientWin = new_project_view;
    return true;
  };
  ProjectsNew.prototype.p_button = function p_button(tb, name) {
    var btnCreate, row;
    row = this.p_create_row(name);
    btnCreate = Ti.UI.createButton({
      title: name,
      left: 150,
      width: 125,
      height: 40
    });
    btnCreate.addEventListener('click', __bind(function() {
        Ti.API.info('This Rocks');
        return this.parent.parent.run({
          controller: 'ProjectsController',
          action: '_create',
          params: {
            clientWin: this.clientWin
          }
        });
      }, this));
    row.add(btnCreate);
    return tb.add(row);
  };
  ProjectsNew.prototype.p_text_row = function p_text_row(tb, name, header) {
    var row, txField;
    row = this.p_create_row(name, header);
    txField = Ti.UI.createTextField({
      left: 150,
      right: 0,
      hintText: 'Required'
    });
    row.add(txField);
    return tb.appendRow(row);
  };
  ProjectsNew.prototype.p_text_area = function p_text_area(tb, name) {
    var row, txArea;
    row = this.p_create_row(name);
    txArea = Ti.UI.createTextArea({
      left: 150,
      right: 0,
      height: 300,
      hintText: 'Required'
    });
    row.add(txArea);
    return tb.appendRow(row);
  };
  ProjectsNew.prototype.p_create_row = function p_create_row(name, header) {
    return Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    });
  };
  // Register view to Patients Controller
  Chester._('app')._("ProjectsController").add(new ProjectsNew('new'));
})();
