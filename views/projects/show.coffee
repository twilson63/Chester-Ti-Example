class ProjectsShow extends Chester.View
  render: (options) ->
    detail_view: @parent.parent.container.sv.detailView
    
    project_view: Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    })
    @p_add_row(project_view, options.project.name, 'Name')
    @p_button(project_view, 'Edit')
    @project: options.project
    @parent.parent.current: project_view
    detail_view.add(project_view)
    true
    
  p_button: (tb, name) ->
    row: @p_create_row('')
    btnCreate: Ti.UI.createButton({
      title: name,
      left: 150,
      width: 125,
      height: 40
    })

    btnCreate.addEventListener('click', =>
      @parent.parent.container.sv.detailView.remove(@parent.parent.current)
      @parent.parent.run({ 
        controller: 'ProjectsController',
        action: '_edit',
        params: { project: @project }

      })
    )
    row.add(btnCreate)
    tb.appendRow(row)

  
  p_add_row: (tv, name, header) ->
    tv.appendRow(Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    }))
  
  p_create_row: (name, header) ->
    Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    })

  
    
  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsShow('show'))