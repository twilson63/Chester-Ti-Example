class ProjectsIndex extends Chester.View
  render: (options) ->
    Ti.API.info('In Index View')
    # remove current project list
    master_view: @parent.parent.container.sv.masterView
    project_list: @parent.parent.container.project_list
    #master_view.remove project_list
    
    # Create New Project List
    project_list: Ti.UI.createTableView({ top: 40 })
    # Add Projects to list
    @p_add_row(options.projects, project_list) while (options.projects.isValidRow())
        
    master_view.add(project_list)
    

  p_add_row: (rows, view) ->
    view_row: Ti.UI.createTableViewRow {
      title: rows.fieldByName('NAME'),
      project_id: rows.fieldByName('ID')
    }
    view.add(view_row)
    rows.next()
    
  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsIndex('index'))