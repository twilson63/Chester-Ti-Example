class ProjectsEdit extends Chester.View
  render: (options) ->
    @project: options.project
    # TODO: add your presentation code here.
    detail_view: @parent.parent.container.sv.detailView

    edit_project_view: Ti.UI.createTableView({
      top: 40,
      style: Titanium.UI.iPhone.TableViewStyle.GROUPED
    })

    @p_text_row(edit_project_view, 'Name', 'Edit Project', @project.name)
    #@p_text_row(new_project_view, 'Description')
    @p_button(edit_project_view, 'Update Project')

    detail_view.add(edit_project_view)
    @parent.parent.current: edit_project_view
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
        action: '_update',
        params: { project: { name: @txName.value, id: @project.id }}

      })
    )
    row.add(btnCreate)
    tb.appendRow(row)

  p_text_row: (tb, name, header, value) ->
    row: @p_create_row(name, header)

    txField: Ti.UI.createTextField({
      left: 150,
      right: 0,
      hintText: 'Required',
      value: value
    })
    this['tx' + name]: txField

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
    row.height: 300
    row.add(txArea)
    tb.appendRow(row)

  p_create_row: (name, header) ->
    Ti.UI.createTableViewRow({
      title: name,
      header: header || ''
    })

  # Register view to Patients Controller
Chester._('app')._("ProjectsController").add(new ProjectsEdit('edit'))