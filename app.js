(function(){
  // Load all files
  Ti.include('init.js');
  // Create Main Wi# Create Container View
  Chester._('app').container = new ProjectContainer();
  // Run App
  Chester._('app').run({
    controller: 'ProjectsController',
    action: '_index',
    params: {
      start: 1
    }
  });
  // Open Window
  Chester._('app').container.sv.open();
})();
