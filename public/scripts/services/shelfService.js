myApp.service('shelfService', function($http){
  console.log('in shelfService');

  var sv = this;

sv.sendLogIn = function(data){
  console.log('in sendlogin', data);
};

sv.sendRegister = function(data){
  console.log('in sendRegister', data);
};

});
