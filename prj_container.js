(function(){
  var ProjectsContainer, root;
  ProjectsContainer = function ProjectsContainer() {
    this.window = Ti.UI.createWindow();
    this.project_list = Ti.UI.createTableView();
    this.sv = Ti.UI.iPad.createSplitWindow({
      detailView: Ti.UI.iPhone.createNavigationGroup({
        window: this.window
      }),
      masterView: Ti.UI.iPhone.createNavigationGroup({
        window: this.window
      })
    });
    this.sv.masterView.add(this.project_list);
    return this;
  };
  root = (typeof exports !== "undefined" && exports !== null) ? exports : this;
  root.ProjectContainer = ProjectsContainer;
})();
