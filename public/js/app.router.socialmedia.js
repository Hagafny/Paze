'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/socialmedia/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.soc-dashboard', {
                        url: '/socialmedia/dashboard',
                        templateUrl: 'partials/soc-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load([ 
                                        'js/controllers/vectormap.js'                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.soc-activity', {
                        url: '/socialmedia/activity',
                        templateUrl: 'partials/soc-activity.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
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
                    .state('app.soc-members', {
                        url: '/socialmedia/members',
                        templateUrl: 'partials/soc-members.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/soc-members.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.soc-member-add', {
                        url: '/socialmedia/member-add',
                        templateUrl: 'partials/soc-member-add.html'
                    })    
                    .state('app.soc-member-edit', {
                        url: '/socialmedia/member-edit',
                        templateUrl: 'partials/soc-member-edit.html'
                    })
                    .state('app.soc-member-profile', {
                        url: '/socialmedia/member-profile',
                        templateUrl: 'partials/soc-member-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })  
                    .state('app.soc-friends', {
                        url: '/socialmedia/friends',
                        templateUrl: 'partials/soc-friends.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/soc-friends.js']);
                                }
                            ]
                        }
                    })
                    .state('app.soc-upload', {
                        url: '/socialmedia/upload',
                        templateUrl: 'partials/soc-upload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/soc-upload.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.soc-media', {
                        url: '/socialmedia/media',
                        templateUrl: 'partials/soc-media.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/soc-media.js']);
                                }
                            ]
                        }
                    })  
                    .state('app.soc-groups', {
                        url: '/socialmedia/groups',
                        templateUrl: 'partials/soc-groups.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/soc-groups.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.soc-group-add', {
                        url: '/socialmedia/group-add',
                        templateUrl: 'partials/soc-group-add.html'
                    })    
                    .state('app.soc-group-edit', {
                        url: '/socialmedia/group-edit',
                        templateUrl: 'partials/soc-group-edit.html'
                    })
                    .state('app.soc-group-view', {
                        url: '/socialmedia/group-view',
                        templateUrl: 'partials/soc-group-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })    
                    .state('app.soc-account-settings', {
                        url: '/socialmedia/account-settings',
                        templateUrl: 'partials/soc-account-settings.html'
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
                        url: '/socialmedia/login',
                        templateUrl: 'partials/soc-login.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/login.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.register', {
                        url: '/socialmedia/register',
                        templateUrl: 'partials/soc-register.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/register.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('access.forgotpwd', {
                        url: '/socialmedia/forgotpwd',
                        templateUrl: 'partials/soc-forgotpwd.html',
                    })

                    .state('app.soc-report-site', {
                        url: '/socialmedia/report-site',
                        templateUrl: 'partials/soc-report-site.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/soc-report-site.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.soc-report-visitors', {
                        url: '/socialmedia/report-visitors',
                        templateUrl: 'partials/soc-report-visitors.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/soc-report-visitors.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.soc-report-statistics', {
                        url: '/socialmedia/report-statistics',
                        templateUrl: 'partials/soc-report-statistics.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/soc-report-statistics.js']);
                                }
                            ]
                        }
                    }) 









                    









                
            }
        ]
    );
