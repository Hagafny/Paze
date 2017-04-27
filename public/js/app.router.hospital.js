'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/hospital/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.hos-dashboard', {
                        url: '/hospital/dashboard',
                        templateUrl: 'partials/hos-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/hos-dashboard.js');
                                        }
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
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
                       
                    .state('app.hos-doctors', {
                        url: '/hospital/doctors',
                        templateUrl: 'partials/hos-doctors.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/doctors.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.hos-doctor-add', {
                        url: '/hospital/doctor-add',
                        templateUrl: 'partials/hos-doctor-add.html'
                    })    
                    .state('app.hos-doctor-edit', {
                        url: '/hospital/doctor-edit',
                        templateUrl: 'partials/hos-doctor-edit.html'
                    })
                    .state('app.hos-doctor-profile', {
                        url: '/hospital/doctor-profile',
                        templateUrl: 'partials/hos-doctor-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.hos-patients', {
                        url: '/hospital/patients',
                        templateUrl: 'partials/hos-patients.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/patients.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.hos-patient-add', {
                        url: '/hospital/patient-add',
                        templateUrl: 'partials/hos-patient-add.html'
                    })    
                    .state('app.hos-patient-edit', {
                        url: '/hospital/patient-edit',
                        templateUrl: 'partials/hos-patient-edit.html'
                    })
                    .state('app.hos-patient-profile', {
                        url: '/hospital/patient-profile',
                        templateUrl: 'partials/hos-patient-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })

                    .state('app.hos-book-appointment', {
                        url: '/hospital/staff-add',
                        templateUrl: 'partials/hos-book-appointment.html'
                    })    
                    .state('app.hos-doc-schedule', {
                        url: '/hospital/doc-schedule',
                        templateUrl: 'partials/hos-doc-schedule.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/doctor-schedule.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })

                    .state('app.hos-payments', {
                        url: '/hospital/payments',
                        templateUrl: 'partials/hos-payments.html'
                    })  
                    .state('app.hos-payment-add', {
                        url: '/hospital/payment-add',
                        templateUrl: 'partials/hos-payment-add.html',
                        controller: 'HospitalPaymentAddCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('xeditable').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/hos-payment-add.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.hos-patient-invoice', {
                        url: '/hospital/patient-invoice',
                        templateUrl: 'partials/hos-patient-invoice.html'
                    })  
                    .state('app.hos-staffs', {
                        url: '/hospital/staffs',
                        templateUrl: 'partials/hos-staffs.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/hos-staffs.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.hos-staff-add', {
                        url: '/hospital/staff-add',
                        templateUrl: 'partials/hos-staff-add.html'
                    })    
                    .state('app.hos-staff-edit', {
                        url: '/hospital/staff-edit',
                        templateUrl: 'partials/hos-staff-edit.html'
                    })
                    .state('app.hos-staff-profile', {
                        url: '/hospital/staff-profile',
                        templateUrl: 'partials/hos-staff-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })  
                    .state('app.hos-events', {
                        url: '/hospital/events',
                        templateUrl: 'partials/hos-events.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/hos-events.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })

                    .state('app.hos-centres', {
                        url: '/hospital/centres',
                        templateUrl: 'partials/hos-centres.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('js/controllers/hos-centres.js');
                                }
                            ]
                        }
                    })

                    .state('app.hos-report-patient', {
                        url: '/hospital/report-patient',
                        templateUrl: 'partials/hos-report-patient.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/hos-report-patient.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.hos-report-hospital', {
                        url: '/hospital/report-hospital',
                        templateUrl: 'partials/hos-report-hospital.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/hos-report-hospital.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.hos-report-sales', {
                        url: '/hospital/report-sales',
                        templateUrl: 'partials/hos-report-sales.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/hos-report-sales.js']);
                                }
                            ]
                        }
                    })                 
                
            }
        ]
    );
