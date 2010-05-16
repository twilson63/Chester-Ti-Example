class ProjectsContainer
  constructor: ->
    @window: Ti.UI.createWindow()
    
    @project_list: Ti.UI.createTableView()
    @sv: Ti.UI.iPad.createSplitWindow({
      detailView: Ti.UI.iPhone.createNavigationGroup({
        window: @window
      }),
      masterView: Ti.UI.iPhone.createNavigationGroup({
        window: @window,
        top: 40
      })
    })
    @sv.masterView.add @project_list
    
    @sv.addEventListener('visible', (e) =>
      if e.view is 'detail'
        e.button.title: 'Projects'
        @window.leftNavButton: e.button
        
      else if e.view is 'master'
        @window.leftNavButton: null
    )
    
    
root: exports ? this

root.ProjectContainer: ProjectsContainer

    