class ProjectsController extends Chester.Controller
  _index: (params) ->
    params.projects: @parent.Models._('Project')._all()
    @find('index').render params
    
  _new: (params) ->
    @find('new').render params
    
  _create: (params) ->
    Ti.API.info 'Create Called'
    params.project: @parent.Models._('Project')._create params.project
    if params.project.errors
      Ti.API.info 'Render New'
      @find('new').render params
    else
      Ti.API.info 'Render Show'
      @find('show').render params

  _show: (params) ->
    params.project: @parent.Models._('Project')._find_by_id(params.project.id)
    @find('show').render params
    
  _edit: (params) ->
    params.project: @parent.Models._('Project')._find_by_id(params.project.id)
    @find('edit').render params
    
  _update: (params) ->
    params.project: @parent.Models._('Project')._update(params.project)
    if params.project.errors
      @find('edit').render params
    else
      @find('show').render params
  
  _destroy: (params) ->
    params.project: @parent.Models._('Project')._delete(params.project)
    if params.project.errors
      @find('show').render params
    else
      params.projects: @parent.Models._('Project')._all()
      @find('index').render params
    
  
# Register Controller to application
Chester._('app').add(new ProjectsController('ProjectsController'))