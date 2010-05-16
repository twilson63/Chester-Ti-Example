class ProjectsNew extends Chester.View
  render: (options) ->
    detail_view: @parent.parent.container.sv.detailView
    detail_view.remove(options.clientWin)
    
    new_project_view: Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    })
    
    @p_text_row(new_project_view, 'Name', 'New Project')
    @p_text_row(new_project_view, 'Description')
    @p_button(new_project_view, 'Create Project')
    
    detail_view.add(new_project_view)
    @clientWin: new_project_view
    true

  p_button: (tb, name) ->
    row: @p_create_row(name)
    btnCreate: Ti.UI.createButton({
      title: name,
      left: 150,
      width: 125,
      height: 40
    })
    btnCreate.addEventListener('click', =>
      Ti.API.info 'This Rocks'
      @parent.parent.run({ 
        controller: 'ProjectsController',
        action: '_create',
        params: { clientWin: @clientWin}
          
      })
    )
    row.add(btnCreate)
    tb.add(row)
    
  p_text_row: (tb, name, header) ->
    row: @p_create_row(name, header)
    
    txField: Ti.UI.createTextField({
      left: 150,
      right: 0,
      hintText: 'Required'
    })
    
    row.add(txField)
    tb.appendRow(row)
  
  p_text_area: (tb, name) ->
    row: @p_create_row(name)
    
    txArea: Ti.UI.createTextArea({
      left: 150,
      right: 0,
      height: 300,
      hintText: 'Required'
    })
    
    row.add(txArea)
    tb.appendRow(row)
    
  p_create_row: (name, header) ->
    Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    })
  
    
  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsNew('new'))