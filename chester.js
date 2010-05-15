(function(){
  var Application, Base, Chester, Controller, View, root;
  var __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  // Chester Framework
  // 0.3.0
  //
  // Classes:
  // Base
  // Application extends Base
  // Controller extends Base
  // View extends Base
  Base = function Base(name) {
    this.name = name;
    return this;
  };
  Base.prototype.children = [];
  Base.prototype.names = [];
  Base.prototype.find = function find(name) {
    return this.children[this.names.indexOf(name)];
  };
  Base.prototype._ = function _(name) {
    return this.find(name);
  };
  Base.prototype.add = function add(child) {
    child.parent = this;
    this.children[this.children.length] = child;
    this.names[this.names.length] = child.name;
    return this.names[this.names.length];
  };
  Application = function Application() {
    return Base.apply(this, arguments);
  };
  __extends(Application, Base);
  Application.prototype.version = "0.3.0";
  Application.prototype.run = function run(options) {
    var _a, _b;
    return this.find(options.controller)[options.action = (typeof (_b = options.action) !== "undefined" && _b !== null) ? options.action : '_index'](options.params = (typeof (_a = options.params) !== "undefined" && _a !== null) ? options.params : {});
  };
  Controller = function Controller() {
    return Base.apply(this, arguments);
  };
  __extends(Controller, Base);
  View = function View() {
    return Base.apply(this, arguments);
  };
  __extends(View, Base);
  View.prototype.render = function render() {
    return print("Not Implemented");
  };
  Chester = new Base();
  Chester.View = View;
  Chester.Controller = Controller;
  Chester.add(new Application('app'));
  Chester._('app').Models = new Base('Models');
  Chester._('app').Helpers = new Base('Helpers');
  root = (typeof exports !== "undefined" && exports !== null) ? exports : this;
  root.Chester = Chester;
})();
