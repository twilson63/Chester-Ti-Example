(function(){
  var Project;
  Project = function Project() {
    this.db = Ti.Database.open('project_app');
    this.db.execute('CREATE TABLE IF NOT EXISTS PROJECTS  (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT)');
    return this;
  };
  Project.prototype.name = 'Project';
  Project.prototype._all = function _all() {
    // Get All Records
    return this.db.execute('SELECT * FROM PROJECTS');
  };
  Project.prototype._find_by_id = function _find_by_id(id) {
    // Get model record by id
    return this.db.execute('SELECT * FROM PROJECTS WHERE ID = ?', id);
  };
  Project.prototype._create = function _create(project) {
    // create Record
    return this.db.execute('INSERT INTO PROJECTS (NAME) VALUES (?)', project.name);
  };
  Project.prototype._update = function _update(project) {
    return this.db.execute('UPDATE PROJECTS SET NAME = ? WHERE ID = ?', project.name, project.id);
  };
  Project.prototype._delete = function _delete(project) {
    return this.db.execute('DELETE FROM PROJECTS WHERE ID = ?', project.id);
  };
  Chester._('app').Models.add(new Project('Project'));
})();
