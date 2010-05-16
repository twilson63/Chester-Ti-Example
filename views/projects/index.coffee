class ProjectsIndex extends Chester.View
  render: (options) ->
    # remove current project list
    master_view: @parent.parent.container.sv.masterView
    detail_view: @parent.parent.container.sv.detailView
    #project_list: @parent.parent.container.project_list
    #master_view.remove project_list
    
    # Create New Project List
    @project_list: Ti.UI.createTableView({ top: 40 })
    # Add Projects to list
    scroll_view: @p_project_summary()
    @parent.parent.current: scroll_view


    @project_list.appendRow(Ti.UI.createTableViewRow({
      title: '... Create New Project ...',
      project_id: -1
    }))    
    
    for obj in options.projects
      @p_add_row(obj.project, @project_list) 
    
    master_view.add(@project_list)
    
    @project_list.addEventListener('click', (e) =>
      @parent.parent.container.sv.detailView.remove(@parent.parent.current)
      if e.source.project_id is -1
        @parent.parent.run({
          controller: 'ProjectsController',
          action: '_new',
          params: {  }
        })
      else
        @parent.parent.run({
          controller: 'ProjectsController',
          action: '_show',
          params: { project_id: e.source.project_id }
        })
        
      true
    )
    
    detail_view.add(scroll_view)
    true

  add_project: (project) ->
    @p_add_row(project, @project_list)
  
  p_add_row: (project, view) ->
    view_row: Ti.UI.createTableViewRow {
      title: project.name,
      project_id: project.id
    }
    view.appendRow(view_row)
  
  p_project_summary: ->
    welcome: Ti.UI.createScrollView({ backgroundColor: '#fff', top: 40 })
    welcome.add(Ti.UI.createLabel({ text: 'Welcome to Projects', center: { x: 0, y: 0},  color: '#000' }))
    welcome
    
    
  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsIndex('index'))