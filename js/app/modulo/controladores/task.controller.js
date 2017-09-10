(function(){
    'use strict';

    angular
        .module('moduloTaskCtrls')
        .controller('taskCtrl', taskCtrl)

    taskCtrl.$inject = ['taskFtry'];

    function taskCtrl(taskFtry){
        
        var taskCtrl = this;
        taskCtrl.newTask = taskCtrl.newTask;
        console.log('tasks taskFtry', taskFtry.tasks);
        taskCtrl.tasks = taskFtry.tasks;

        taskCtrl.remove = remove;
        taskCtrl.add = add;
        taskCtrl.check = check;


        init();

        function init(){
            taskCtrl.tasks;
            console.log('tasks taskCtrl', taskCtrl.tasks);
        }

        function remove(obj){
            console.log('remove ctrl',obj);
            taskFtry.remove(obj);
        }

        function add(obj){
            console.log(obj);
            var obj = {name: taskCtrl.newTask }
            taskFtry.add(obj);
            taskCtrl.newTask = '';
        }

        function check(obj){
            console.log(obj);
            if (obj.isCheck == null || obj.isCheck == false) {
                obj.isCheck = true;
            } else if (obj.isCheck == true) {
                obj.isCheck = false;
            }
        }

    }
}());