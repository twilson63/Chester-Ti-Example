Ti.include 'chester.js'
Ti.include 'prj_container.js'

for m in ['models/project.js']
  Ti.include m

for c in ['controllers/projects_controller.js']
  Ti.include c
    
prj_views: 'views/projects/'  
for v in [prj_views + 'index.js', prj_views + 'new.js', prj_views + 'show.js']
  Ti.include v  
