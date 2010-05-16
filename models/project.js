(function(){
  var Project;
  Project = function Project(name) {
    this.name = name;
    this.db = Ti.Database.open('project_app');
    this.db.execute('CREATE TABLE IF NOT EXISTS PROJECTS  (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT)');
    Ti.API.info('Opened Database!');
    return this;
  };
  Project.prototype._all = function _all() {
    var rows;
    this.projects = [];
    // Get All Records
    rows = this.db.execute('SELECT * FROM PROJECTS');
    while ((rows.isValidRow())) {
      this.p_add_to_projects(rows);
    }
    rows.close();
    return this.projects;
  };
  Project.prototype._find_by_id = function _find_by_id(id) {
    var rows;
    // Get model record by id
    rows = this.db.execute('SELECT * FROM PROJECTS WHERE ID = ?', id);
    this.current_project = {
      name: rows.fieldByName('NAME'),
      id: rows.fieldByName('ID')
    };
    rows.close();
    return this.current_project;
  };
  Project.prototype._create = function _create(project) {
    this.db.execute('INSERT INTO PROJECTS (NAME) VALUES (?)', project.name);
    return {
      id: this.db.lastInsertRowId,
      name: project.name
    };
  };
  Project.prototype._update = function _update(project) {
    this.db.execute('UPDATE PROJECTS SET NAME = ? WHERE ID = ?', project.name, project.id);
    return this._find_by_id(project.id);
  };
  Project.prototype._delete = function _delete(project) {
    return this.db.execute('DELETE FROM PROJECTS WHERE ID = ?', project.id);
  };
  Project.prototype.p_add_to_projects = function p_add_to_projects(rows) {
    this.projects[this.projects.length] = {
      project: {
        name: rows.fieldByName('NAME'),
        id: rows.fieldByName('ID')
      }
    };
    return rows.next();
  };
  Chester._('app').Models.add(new Project('Project'));
})();
