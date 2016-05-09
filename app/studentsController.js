define(['./dataLayerService', 'underscore'], function (dataLayerService, underscore) {
    var studentsController = function ($scope, dataLayerService) {
        $scope.students = dataLayerService.getStudents();
        $scope.studentGridOptions = {
            data: $scope.students,
            columnDefs: [{ field: 'id', displayName: 'ID', width: 40 },
                { field: 'first_name', displayName: 'First Name', width: 120 },
                { field: 'last_name', displayName: 'Last Name', width: 120 },
                { field: 'gender', displayName: 'Gender', width: 90 },
                { field: 'email', displayName: 'Email', width: 200 }]
        }
    };
    studentsController.$inject = ['$scope', 'dataLayerService'];
    return studentsController;
});