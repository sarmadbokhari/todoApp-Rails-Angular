angular
  .module('app')
  .factory('Todo', function($resource){
    var Todo = $resource('http://10.10.10.10:3000/api/v1/todos/:id.json', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });

    return Todo;
  });
