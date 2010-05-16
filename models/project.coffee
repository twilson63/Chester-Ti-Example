class Project
  constructor: (name) ->
    @name: name
    @db: Ti.Database.open('project_app')
    @db.execute('CREATE TABLE IF NOT EXISTS PROJECTS  (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT)')
    Ti.API.info 'Opened Database!'
    
  _all: ->
    # Get All Records
    @db.execute('SELECT * FROM PROJECTS')
    
  _find_by_id: (id) ->
    # Get model record by id
    @db.execute('SELECT * FROM PROJECTS WHERE ID = ?', id)
    
  _create: (project) ->
    @db.execute('INSERT INTO PROJECTS (NAME) VALUES (?)', project.name)
    Ti.API.info 'Added Project'
    project
    #results: @db.execute('SELECT * FROM PROJECTS WHERE ID = ?', id)
    #Ti.API.info results
    
  _update: (project) ->
    @db.execute('UPDATE PROJECTS SET NAME = ? WHERE ID = ?', project.name, project.id)
    
  _delete: (project) ->
    @db.execute('DELETE FROM PROJECTS WHERE ID = ?', project.id)
    
  
Chester._('app').Models.add(new Project('Project'))