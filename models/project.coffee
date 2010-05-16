class Project
  constructor: (name) ->
    @name: name
    @db: Ti.Database.open('project_app')
    @db.execute('CREATE TABLE IF NOT EXISTS PROJECTS  (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT)')
    Ti.API.info 'Opened Database!'
    
  _all: ->
    @projects: []
    # Get All Records
    rows: @db.execute('SELECT * FROM PROJECTS')
    @p_add_to_projects(rows) while (rows.isValidRow())
    rows.close()
    @projects
    
  _find_by_id: (id) ->
    # Get model record by id
    rows: @db.execute('SELECT * FROM PROJECTS WHERE ID = ?', id)
    @current_project: { name: rows.fieldByName('NAME'), id: rows.fieldByName('ID')}
    rows.close()
    @current_project
    
  _create: (project) ->
    @db.execute('INSERT INTO PROJECTS (NAME) VALUES (?)', project.name)
    { id: @db.lastInsertRowId, name: project.name }
    
  _update: (project) ->
    @db.execute('UPDATE PROJECTS SET NAME = ? WHERE ID = ?', project.name, project.id)
    @_find_by_id(project.id)
    
  _delete: (project) ->
    @db.execute('DELETE FROM PROJECTS WHERE ID = ?', project.id)
  
  p_add_to_projects: (rows) ->
    @projects[@projects.length]: { project: { name: rows.fieldByName('NAME'), id: rows.fieldByName('ID')}}
    rows.next()
    
    
  
Chester._('app').Models.add(new Project('Project'))