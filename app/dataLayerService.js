let dataLayerService = function () {
    this.getStudents = () => {
        return students;
    };
    this.getTeachers = () => {
        return teachers;
    };
};

var students = [{
    "id": 1,
    "gender": "Female",
    "first_name": "Pamela",
    "last_name": "Perry",
    "email": "pperry0@twitter.com"
}, {
        "id": 2,
        "gender": "Male",
        "first_name": "Gary",
        "last_name": "Weaver",
        "email": "gweaver1@amazonaws.com"
    }, {
        "id": 3,
        "gender": "Female",
        "first_name": "Stephanie",
        "last_name": "Ward",
        "email": "sward2@google.ca"
    }, {
        "id": 4,
        "gender": "Female",
        "first_name": "Deborah",
        "last_name": "Harvey",
        "email": "dharvey3@multiply.com"
    }, {
        "id": 5,
        "gender": "Female",
        "first_name": "Margaret",
        "last_name": "Dixon",
        "email": "mdixon4@odnoklassniki.ru"
    }, {
        "id": 6,
        "gender": "Male",
        "first_name": "Bobby",
        "last_name": "Ortiz",
        "email": "bortiz5@themeforest.net"
    }, {
        "id": 7,
        "gender": "Female",
        "first_name": "Deborah",
        "last_name": "Payne",
        "email": "dpayne6@delicious.com"
    }, {
        "id": 8,
        "gender": "Male",
        "first_name": "Jason",
        "last_name": "Richardson",
        "email": "jrichardson7@unc.edu"
    }, {
        "id": 9,
        "gender": "Female",
        "first_name": "Patricia",
        "last_name": "George",
        "email": "pgeorge8@hc360.com"
    }, {
        "id": 10,
        "gender": "Male",
        "first_name": "Daniel",
        "last_name": "Smith",
        "email": "dsmith9@earthlink.net"
    }];

var teachers = [{
    "id": 1,
    "gender": "Male",
    "first_name": "Ernest",
    "last_name": "Garza"
}, {
        "id": 2,
        "gender": "Male",
        "first_name": "Eugene",
        "last_name": "Hunter"
    }, {
        "id": 3,
        "gender": "Female",
        "first_name": "Carlos",
        "last_name": "Perry"
    }, {
        "id": 4,
        "gender": "Female",
        "first_name": "Gerald",
        "last_name": "Woods"
    }, {
        "id": 5,
        "gender": "Male",
        "first_name": "Aaron",
        "last_name": "Wright"
    },{
        "id": 6,
        "gender": "Female",
        "first_name": "Eugene",
        "last_name": "Hunter"
    }, {
        "id": 7,
        "gender": "Male",
        "first_name": "Carlos",
        "last_name": "Perry"
    }, {
        "id": 8,
        "gender": "Female",
        "first_name": "Gerald",
        "last_name": "Woods"
    }, {
        "id": 9,
        "gender": "Female",
        "first_name": "Aaron",
        "last_name": "Wright"
    }];
    
export default dataLayerService;