'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/freelancing/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.frl-dashboard', {
                        url: '/freelancing/dashboard',
                        templateUrl: 'partials/frl-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/frl-dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/vectormap.js');
                                            }
                                          )/*.then(
                                          function(){
                                                return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                                            }
                                         )*/
                                    ;
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
                    .state('app.frl-users', {
                        url: '/freelancing/users',
                        templateUrl: 'partials/frl-users.html'
                    })    
                    .state('app.frl-user-add', {
                        url: '/freelancing/user-add',
                        templateUrl: 'partials/frl-user-add.html'
                    })    
                    .state('app.frl-user-edit', {
                        url: '/freelancing/user-edit',
                        templateUrl: 'partials/frl-user-edit.html'
                    })
                       
                    .state('app.frl-buyers', {
                        url: '/freelancing/buyers',
                        templateUrl: 'partials/frl-buyers.html'
                    })    
                    .state('app.frl-buyer-add', {
                        url: '/freelancing/buyer-add',
                        templateUrl: 'partials/frl-buyer-add.html'
                    })    
                    .state('app.frl-buyer-edit', {
                        url: '/freelancing/buyer-edit',
                        templateUrl: 'partials/frl-buyer-edit.html'
                    })
                    .state('app.frl-sellers', {
                        url: '/freelancing/sellers',
                        templateUrl: 'partials/frl-sellers.html'
                    })    
                    .state('app.frl-seller-add', {
                        url: '/freelancing/seller-add',
                        templateUrl: 'partials/frl-seller-add.html'
                    })    
                    .state('app.frl-seller-edit', {
                        url: '/freelancing/seller-edit',
                        templateUrl: 'partials/frl-seller-edit.html'
                    })
                    .state('app.frl-report-sales', {
                        url: '/freelancing/report-sales',
                        templateUrl: 'partials/frl-report-sales.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/frl-report-sales.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.frl-report-buyers', {
                        url: '/freelancing/report-buyers',
                        templateUrl: 'partials/frl-report-buyers.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/frl-report-buyers.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.frl-report-targets', {
                        url: '/freelancing/report-targets',
                        templateUrl: 'partials/frl-report-targets.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/frl-report-targets.js']);
                                }
                            ]
                        }
                    })
                    .state('app.frl-tickets', {
                        url: '/freelancing/tickets',
                        templateUrl: 'partials/frl-tickets.html'
                    })    
                    .state('app.frl-ticket-add', {
                        url: '/freelancing/ticket-add',
                        templateUrl: 'partials/frl-ticket-add.html'
                    })    
                    .state('app.frl-ticket-edit', {
                        url: '/freelancing/ticket-edit',
                        templateUrl: 'partials/frl-ticket-edit.html'
                    })
                    .state('app.frl-invoices', {
                        url: '/freelancing/invoices',
                        templateUrl: 'partials/frl-invoices.html'
                    })    
                    .state('app.frl-invoice-add', {
                        url: '/freelancing/invoice-add',
                        templateUrl: 'partials/frl-invoice-add.html'
                    })    
                    .state('app.frl-invoice-edit', {
                        url: '/freelancing/invoice-edit',
                        templateUrl: 'partials/frl-invoice-edit.html'
                    })
                    .state('app.frl-invoice-view', {
                        url: '/freelancing/invoice-view',
                        templateUrl: 'partials/frl-invoice-view.html'
                    }) 
                    .state('app.frl-bids', {
                        url: '/freelancing/bids',
                        templateUrl: 'partials/frl-bids.html'
                    })    
                    .state('app.frl-bid-add', {
                        url: '/freelancing/bid-add',
                        templateUrl: 'partials/frl-bid-add.html'
                    })    
                    .state('app.frl-bid-edit', {
                        url: '/freelancing/bid-edit',
                        templateUrl: 'partials/frl-bid-edit.html'
                    })

                  
                
            }
        ]
    );
