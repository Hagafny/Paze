'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/university/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.uni-dashboard', {
                        url: '/university/dashboard',
                        templateUrl: 'partials/uni-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/uni-dashboard.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        //template: '<div ui-view class=""></div>',
                        templateUrl: 'partials/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css', 'js/controllers/mail.js',
                                        'js/services/mail-service.js',
                                        JQ_CONFIG.moment
                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.mail.list', {
                        url: '/{fold}',
                        templateUrl: 'partials/mail-list.html'
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'partials/mail-compose.html'
                    })
                    .state('app.mail.view', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'partials/mail-view.html'
                    }) 
                       
                    .state('app.uni-professors', {
                        url: '/university/professors',
                        templateUrl: 'partials/uni-professors.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/professors.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.uni-professor-add', {
                        url: '/university/professor-add',
                        templateUrl: 'partials/uni-professor-add.html'
                    })    
                    .state('app.uni-professor-edit', {
                        url: '/university/professor-edit',
                        templateUrl: 'partials/uni-professor-edit.html'
                    })
                    .state('app.uni-professor-profile', {
                        url: '/university/professor-profile',
                        templateUrl: 'partials/uni-professor-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.uni-students', {
                        url: '/university/students',
                        templateUrl: 'partials/uni-students.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/students.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.uni-student-add', {
                        url: '/university/student-add',
                        templateUrl: 'partials/uni-student-add.html'
                    })    
                    .state('app.uni-student-edit', {
                        url: '/university/student-edit',
                        templateUrl: 'partials/uni-student-edit.html'
                    })
                    .state('app.uni-student-profile', {
                        url: '/university/student-profile',
                        templateUrl: 'partials/uni-student-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.uni-courses', {
                        url: '/university/courses',
                        templateUrl: 'partials/uni-courses.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/courses.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.uni-course-add', {
                        url: '/university/course-add',
                        templateUrl: 'partials/uni-course-add.html'
                    })    
                    .state('app.uni-course-edit', {
                        url: '/university/course-edit',
                        templateUrl: 'partials/uni-course-edit.html'
                    })
                    .state('app.uni-course-info', {
                        url: '/university/course-info',
                        templateUrl: 'partials/uni-course-info.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })

                    .state('app.uni-library', {
                        url: '/university/library',
                        templateUrl: 'partials/uni-library.html',
                    })
                    .state('app.uni-library-add', {
                        url: '/university/library-add',
                        templateUrl: 'partials/uni-library-add.html'
                    })    
                    .state('app.uni-library-edit', {
                        url: '/university/library-edit',
                        templateUrl: 'partials/uni-library-edit.html'
                    })
                    .state('app.uni-departments', {
                        url: '/university/departments',
                        templateUrl: 'partials/uni-departments.html',
                    })
                    .state('app.uni-department-add', {
                        url: '/university/department-add',
                        templateUrl: 'partials/uni-department-add.html'
                    })    
                    .state('app.uni-department-edit', {
                        url: '/university/department-edit',
                        templateUrl: 'partials/uni-department-edit.html'
                    })
                    .state('app.uni-staffs', {
                        url: '/university/staffs',
                        templateUrl: 'partials/uni-staffs.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/uni-staffs.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.uni-staff-add', {
                        url: '/university/staff-add',
                        templateUrl: 'partials/uni-staff-add.html'
                    })    
                    .state('app.uni-staff-edit', {
                        url: '/university/staff-edit',
                        templateUrl: 'partials/uni-staff-edit.html'
                    })
                    .state('app.uni-staff-profile', {
                        url: '/university/staff-profile',
                        templateUrl: 'partials/uni-staff-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })  

                    .state('app.uni-events', {
                        url: '/university/events',
                        templateUrl: 'partials/uni-events.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/uni-events.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })

                    .state('app.uni-centres', {
                        url: '/university/centres',
                        templateUrl: 'partials/uni-centres.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('js/controllers/uni-centres.js');
                                }
                            ]
                        }
                    })

                    .state('app.uni-report-student', {
                        url: '/university/report-student',
                        templateUrl: 'partials/uni-report-student.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/uni-report-student.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.uni-report-university', {
                        url: '/university/report-university',
                        templateUrl: 'partials/uni-report-university.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/uni-report-university.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.uni-report-professors', {
                        url: '/university/report-sales',
                        templateUrl: 'partials/uni-report-professors.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/uni-report-professors.js']);
                                }
                            ]
                        }
                    })                  
                
            }
        ]
    );
