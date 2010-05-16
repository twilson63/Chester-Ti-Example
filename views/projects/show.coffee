class ProjectsShow extends Chester.View
  render: (options) ->
    detail_view: @parent.parent.container.sv.detailView
    detail_view.remove(options.clientWin)
    
    project_view: Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    })
    @p_add_row(project_view, options.project.name, 'Name')
    detail_view.add(project_view)
    @clientWin: project_view
    true
    

  p_add_row: (tv, name, header) ->
    tv.appendRow(Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    }))
    
  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsShow('show'))