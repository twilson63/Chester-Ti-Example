class ProjectsContainer
  constructor: ->
    @window: Ti.UI.createWindow()
    
    @project_list: Ti.UI.createTableView()
    @sv: Ti.UI.iPad.createSplitWindow({
      detailView: Ti.UI.iPhone.createNavigationGroup({
        window: @window
      }),
      masterView: Ti.UI.iPhone.createNavigationGroup({
        window: @window
      })
    })
    @sv.masterView.add @project_list
    
root: exports ? this

root.ProjectContainer: ProjectsContainer

    