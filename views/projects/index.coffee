class ProjectsIndex extends Chester.View
  render: (options) ->
    # remove current project list
    master_view: @parent.parent.container.sv.masterView
    detail_view: @parent.parent.container.sv.detailView
    #project_list: @parent.parent.container.project_list
    #master_view.remove project_list
    
    # Create New Project List
    project_list: Ti.UI.createTableView({ top: 40 })
    # Add Projects to list
    scroll_view: @p_project_summary()
    
    #@p_add_row(options.projects, project_list) while (options.projects.isValidRow())
    project_list.appendRow(Ti.UI.createTableViewRow({
      title: 'Create New Project',
      project_id: -1,
      scroll_view: scroll_view
    }))    
    
    
    master_view.add(project_list)
    project_list.addEventListener('click', (e) =>
      if e.source.project_id is -1
        @parent.parent.run({
          controller: 'ProjectsController',
          action: '_new',
          params: { clientWin: e.source.scroll_view }
        })
      true
    )
    
    detail_view.add(scroll_view)
    true

  p_add_row: (rows, view) ->
    view_row: Ti.UI.createTableViewRow {
      title: rows.fieldByName('NAME'),
      project_id: rows.fieldByName('ID')
    }
    view.add(view_row)
    rows.next()
  
  p_project_summary: ->
    welcome: Ti.UI.createScrollView({ backgroundColor: '#fff', top: 40 })
    welcome.add(Ti.UI.createLabel({ text: 'Welcome to Projects', center: { x: 0, y: 0},  color: '#000' }))
    welcome
    
    
  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsIndex('index'))