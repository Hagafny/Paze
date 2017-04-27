'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/crm/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.crm-dashboard', {
                        url: '/crm/dashboard',
                        templateUrl: 'partials/crm-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/crm-dashboard.js');
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
                       
                    .state('app.crm-customers', {
                        url: '/crm/customers',
                        templateUrl: 'partials/crm-customers.html'
                    })    
                    .state('app.crm-customer-add', {
                        url: '/crm/customer-add',
                        templateUrl: 'partials/crm-customer-add.html'
                    })    
                    .state('app.crm-customer-edit', {
                        url: '/crm/customer-edit',
                        templateUrl: 'partials/crm-customer-edit.html'
                    })

                    .state('app.crm-leads', {
                        url: '/crm/leads',
                        templateUrl: 'partials/crm-leads.html'
                    })    
                    .state('app.crm-lead-add', {
                        url: '/crm/lead-add',
                        templateUrl: 'partials/crm-lead-add.html'
                    })    
                    .state('app.crm-lead-edit', {
                        url: '/crm/lead-edit',
                        templateUrl: 'partials/crm-lead-edit.html'
                    })

                    .state('app.crm-vendors', {
                        url: '/crm/vendors',
                        templateUrl: 'partials/crm-vendors.html'
                    })    
                    .state('app.crm-vendor-add', {
                        url: '/crm/vendor-add',
                        templateUrl: 'partials/crm-vendor-add.html'
                    })    
                    .state('app.crm-vendor-edit', {
                        url: '/crm/vendor-edit',
                        templateUrl: 'partials/crm-vendor-edit.html'
                    })

                    .state('app.crm-contacts', {
                        url: '/crm/contacts',
                        templateUrl: 'partials/crm-contacts.html'
                    })    
                    .state('app.crm-contact-add', {
                        url: '/crm/contact-add',
                        templateUrl: 'partials/crm-contact-add.html'
                    })    
                    .state('app.crm-contact-edit', {
                        url: '/crm/contact-edit',
                        templateUrl: 'partials/crm-contact-edit.html'
                    })

                    .state('app.crm-users', {
                        url: '/crm/users',
                        templateUrl: 'partials/crm-users.html'
                    })    
                    .state('app.crm-user-add', {
                        url: '/crm/user-add',
                        templateUrl: 'partials/crm-user-add.html'
                    })    
                    .state('app.crm-user-edit', {
                        url: '/crm/user-edit',
                        templateUrl: 'partials/crm-user-edit.html'
                    })

                    .state('app.crm-quotes', {
                        url: '/crm/quotes',
                        templateUrl: 'partials/crm-quotes.html'
                    })    
                    .state('app.crm-quote-add', {
                        url: '/crm/quote-add',
                        templateUrl: 'partials/crm-quote-add.html'
                    })    
                    .state('app.crm-quote-edit', {
                        url: '/crm/quote-edit',
                        templateUrl: 'partials/crm-quote-edit.html'
                    })

                    .state('app.crm-invoices', {
                        url: '/crm/invoices',
                        templateUrl: 'partials/crm-invoices.html'
                    })    
                    .state('app.crm-invoice-add', {
                        url: '/crm/invoice-add',
                        templateUrl: 'partials/crm-invoice-add.html'
                    })    
                    .state('app.crm-invoice-edit', {
                        url: '/crm/invoice-edit',
                        templateUrl: 'partials/crm-invoice-edit.html'
                    })
                    .state('app.crm-invoice-view', {
                        url: '/crm/invoice-view',
                        templateUrl: 'partials/crm-invoice-view.html'
                    })  
                    .state('app.crm-tickets', {
                        url: '/crm/tickets',
                        templateUrl: 'partials/crm-tickets.html'
                    })    
                    .state('app.crm-ticket-add', {
                        url: '/crm/ticket-add',
                        templateUrl: 'partials/crm-ticket-add.html'
                    })    
                    .state('app.crm-ticket-edit', {
                        url: '/crm/ticket-edit',
                        templateUrl: 'partials/crm-ticket-edit.html'
                    })

                    .state('app.crm-calendar', {
                        url: '/crm/calendar',
                        templateUrl: 'partials/crm-calendar.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/crm-calendar.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })

                    .state('app.crm-map', {
                        url: '/crm/map',
                        templateUrl: 'partials/crm-map.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load([
                                        'js/map/load-google-maps.js',
                                        'js/map/ui-map.js',
                                        'js/map/map.js'
                                    ]).then(
                                        function() {
                                            return loadGoogleMaps();
                                        }
                                    );
                                }
                            ]
                        }

                    })

                    .state('app.crm-report-sales', {
                        url: '/crm/report-sales',
                        templateUrl: 'partials/crm-report-sales.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/crm-report-sales.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.crm-report-customers', {
                        url: '/crm/report-customers',
                        templateUrl: 'partials/crm-report-customers.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/crm-report-customers.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.crm-report-targets', {
                        url: '/crm/report-targets',
                        templateUrl: 'partials/crm-report-targets.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/crm-report-targets.js']);
                                }
                            ]
                        }
                    })                  
                
            }
        ]
    );
