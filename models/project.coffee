class Project
  name: 'Project'
  constructor: ->
    @db: Ti.Database.open('project_app')
    @db.execute('CREATE TABLE IF NOT EXISTS PROJECTS  (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT)')
    
    
  _all: ->
    # Get All Records
    @db.execute('SELECT * FROM PROJECTS')
    
    
  _find_by_id: (id) ->
    # Get model record by id
    @db.execute('SELECT * FROM PROJECTS WHERE ID = ?', id)
    
  _create: (project) ->
    # create Record
    @db.execute('INSERT INTO PROJECTS (NAME) VALUES (?)', project.name)
    
  _update: (project) ->
    @db.execute('UPDATE PROJECTS SET NAME = ? WHERE ID = ?', project.name, project.id)
    
  _delete: (project) ->
    @db.execute('DELETE FROM PROJECTS WHERE ID = ?', project.id)
    
  
Chester._('app').Models.add(new Project('Project'))