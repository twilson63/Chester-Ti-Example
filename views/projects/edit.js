(function(){
  var ProjectsEdit;
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
  ProjectsEdit = function ProjectsEdit() {
    return Chester.View.apply(this, arguments);
  };
  __extends(ProjectsEdit, Chester.View);
  ProjectsEdit.prototype.render = function render(options) {
    var detail_view, edit_project_view;
    this.project = options.project;
    // TODO: add your presentation code here.
    detail_view = this.parent.parent.container.sv.detailView;
    edit_project_view = Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    this.p_text_row(edit_project_view, 'Name', 'Edit Project', this.project.name);
    //@p_text_row(new_project_view, 'Description')
    this.p_button(edit_project_view, 'Update Project');
    detail_view.add(edit_project_view);
    this.parent.parent.current = edit_project_view;
    return true;
  };
  ProjectsEdit.prototype.p_button = function p_button(tb, name) {
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
          action: '_update',
          params: {
            project: {
              name: this.txName.value,
              id: this.project.id
            }
          }
        });
      }, this));
    row.add(btnCreate);
    return tb.appendRow(row);
  };
  ProjectsEdit.prototype.p_text_row = function p_text_row(tb, name, header, value) {
    var row, txField;
    row = this.p_create_row(name, header);
    txField = Ti.UI.createTextField({
      left: 150,
      right: 0,
      hintText: 'Required',
      value: value
    });
    this['tx' + name] = txField;
    row.add(txField);
    return tb.appendRow(row);
  };
  ProjectsEdit.prototype.p_text_area = function p_text_area(tb, name) {
    var row, txArea;
    row = this.p_create_row(name);
    txArea = Ti.UI.createTextArea({
      left: 150,
      right: 0,
      height: 300,
      hintText: 'Required'
    });
    row.height = 300;
    row.add(txArea);
    return tb.appendRow(row);
  };
  ProjectsEdit.prototype.p_create_row = function p_create_row(name, header) {
    return Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    });
  };
  // Register view to Patients Controller
  Chester._('app')._("ProjectsController").add(new ProjectsEdit('edit'));
})();
