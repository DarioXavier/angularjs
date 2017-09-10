(function(){
    'use strict';

    angular
        .module('moduloTaskCtrls')
        .controller('taskCtrl', taskCtrl)

    taskCtrl.$inject = ['taskFtry'];

    function taskCtrl(taskFtry){
        
        var taskCtrl = this;
        taskCtrl.newTaskName = taskCtrl.newTaskName;
        taskCtrl.tasks = taskFtry.tasks;
        taskCtrl.oldTask = undefined;
        taskCtrl.isAdd = true;

        taskCtrl.remove = remove;
        taskCtrl.add = add;
        taskCtrl.check = check;
        taskCtrl.edit = edit;


        init();

        function init(){
            taskCtrl.tasks;
            console.log('tasks taskCtrl', taskCtrl.tasks);
        }

        function remove(obj){
            console.log('remove taskCtrl',obj);
            taskFtry.remove(obj);
        }

        function add(){
            //nuevo
            if (taskCtrl.newTaskName != undefined && taskCtrl.newTaskName != '' && taskCtrl.isAdd == true) {
                var newtask = {name: taskCtrl.newTaskName }
                console.log('add taskCtrl', newtask);
                taskFtry.add(newtask);
                taskCtrl.newTaskName = undefined;
            //editar
            } else { 
                var newtask = {name: taskCtrl.newTaskName}
                console.log('edit taskCtrl', newtask);
                taskFtry.edit(taskCtrl.oldTask, newtask);
                taskCtrl.newTaskName = undefined;
            }
            taskCtrl.isAdd = true;
        }

        function check(obj){
            console.log('check taskCtrl', obj);
            if (obj.isCheck == null || obj.isCheck == false) {
                obj.isCheck = true;
            } else if (obj.isCheck == true) {
                obj.isCheck = false;
            }
        }

        function edit(obj){
            taskCtrl.isAdd = false;
            taskCtrl.newTaskName = obj.name;
            taskCtrl.oldTask = obj;
        }

    }
}());