'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/ecommerce/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.eco-dashboard', {
                        url: '/ecommerce/dashboard',
                        templateUrl: 'partials/eco-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/eco-dashboard.js');
                                            }
                                        ).then(
                                          function(){
                                               return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                            }
                                          )/*
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/vectormap.js');
                                            }
                                          ).then(
                                          function(){
                                                return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                                            }
                                         )*/
                                    ;
                                }
                            ]
                        }
                    })
                    .state('app.eco-invoices', {
                        url: '/ecommerce/invoices',
                        templateUrl: 'partials/eco-invoices.html'
                    })    
                    .state('app.eco-invoice-add', {
                        url: '/ecommerce/invoice-add',
                        templateUrl: 'partials/eco-invoice-add.html'
                    })    
                    .state('app.eco-invoice-edit', {
                        url: '/ecommerce/invoice-edit',
                        templateUrl: 'partials/eco-invoice-edit.html'
                    })
                    .state('app.eco-invoice-view', {
                        url: '/ecommerce/invoice-view',
                        templateUrl: 'partials/eco-invoice-view.html'
                    }) 
                    .state('app.eco-products', {
                        url: '/ecommerce/products',
                        templateUrl: 'partials/eco-products.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/eco-product-search-startfrom.js', 
                                        'js/controllers/eco-product.js', 
                                        'js/directives/eco-producttabs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })    
                    .state('app.eco-product-add', {
                        url: '/ecommerce/product-add',
                        templateUrl: 'partials/eco-product-add.html'
                    })    
                    .state('app.eco-product-edit', {
                        url: '/ecommerce/product-edit',
                        templateUrl: 'partials/eco-product-edit.html'
                    })  
                    .state('app.eco-categories', {
                        url: '/ecommerce/categories',
                        templateUrl: 'partials/eco-categories.html'
                    })    
                    .state('app.eco-category-add', {
                        url: '/ecommerce/category-add',
                        templateUrl: 'partials/eco-category-add.html'
                    })    
                    .state('app.eco-category-edit', {
                        url: '/ecommerce/category-edit',
                        templateUrl: 'partials/eco-category-edit.html'
                    })
                    .state('app.eco-tags', {
                        url: '/ecommerce/tags',
                        templateUrl: 'partials/eco-tags.html'
                    })    
                    .state('app.eco-tag-add', {
                        url: '/ecommerce/tag-add',
                        templateUrl: 'partials/eco-tag-add.html'
                    })    
                    .state('app.eco-tag-edit', {
                        url: '/ecommerce/tag-edit',
                        templateUrl: 'partials/eco-tag-edit.html'
                    })
                    .state('app.eco-customers', {
                        url: '/ecommerce/customers',
                        templateUrl: 'partials/eco-customers.html'
                    })    
                    .state('app.eco-customer-add', {
                        url: '/ecommerce/customer-add',
                        templateUrl: 'partials/eco-customer-add.html'
                    })    
                    .state('app.eco-customer-edit', {
                        url: '/ecommerce/customer-edit',
                        templateUrl: 'partials/eco-customer-edit.html'
                    })
                    .state('app.eco-vendors', {
                        url: '/ecommerce/vendors',
                        templateUrl: 'partials/eco-vendors.html'
                    })    
                    .state('app.eco-vendor-add', {
                        url: '/ecommerce/vendor-add',
                        templateUrl: 'partials/eco-vendor-add.html'
                    })    
                    .state('app.eco-vendor-edit', {
                        url: '/ecommerce/vendor-edit',
                        templateUrl: 'partials/eco-vendor-edit.html'
                    })
                    .state('app.eco-users', {
                        url: '/ecommerce/users',
                        templateUrl: 'partials/eco-users.html'
                    })    
                    .state('app.eco-user-add', {
                        url: '/ecommerce/user-add',
                        templateUrl: 'partials/eco-user-add.html'
                    })    
                    .state('app.eco-user-edit', {
                        url: '/ecommerce/user-edit',
                        templateUrl: 'partials/eco-user-edit.html'
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
                    .state('app.eco-orders', {
                        url: '/ecommerce/orders',
                        templateUrl: 'partials/eco-orders.html'
                    })    
                    .state('app.eco-order-add', {
                        url: '/ecommerce/order-add',
                        templateUrl: 'partials/eco-order-add.html'
                    })    
                    .state('app.eco-order-edit', {
                        url: '/ecommerce/order-edit',
                        templateUrl: 'partials/eco-order-edit.html'
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
                    .state('app.eco-report-site', {
                        url: '/ecommerce/report-site',
                        templateUrl: 'partials/eco-report-site.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/eco-report-site.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.eco-report-visitors', {
                        url: '/ecommerce/report-visitors',
                        templateUrl: 'partials/eco-report-visitors.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/eco-report-visitors.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.eco-report-statistics', {
                        url: '/ecommerce/report-statistics',
                        templateUrl: 'partials/eco-report-statistics.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/eco-report-statistics.js']);
                                }
                            ]
                        }
                    }) 
                    .state('app.eco-account-settings', {
                        url: '/ecommerce/account-settings',
                        templateUrl: 'partials/eco-account-settings.html'
                    }) 

























                    .state('app.eco-activity', {
                        url: '/ecommerce/activity',
                        templateUrl: 'partials/eco-activity.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.eco-members', {
                        url: '/ecommerce/members',
                        templateUrl: 'partials/eco-members.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/eco-members.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.eco-member-add', {
                        url: '/ecommerce/member-add',
                        templateUrl: 'partials/eco-member-add.html'
                    })    
                    .state('app.eco-member-edit', {
                        url: '/ecommerce/member-edit',
                        templateUrl: 'partials/eco-member-edit.html'
                    })
                    .state('app.eco-member-profile', {
                        url: '/ecommerce/member-profile',
                        templateUrl: 'partials/eco-member-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })  
                    .state('app.eco-friends', {
                        url: '/ecommerce/friends',
                        templateUrl: 'partials/eco-friends.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/eco-friends.js']);
                                }
                            ]
                        }
                    })
                    .state('app.eco-upload', {
                        url: '/ecommerce/upload',
                        templateUrl: 'partials/eco-upload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/eco-upload.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.eco-media', {
                        url: '/ecommerce/media',
                        templateUrl: 'partials/eco-media.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/eco-media.js']);
                                }
                            ]
                        }
                    })  
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class=""></div>'
                    })
                    .state('access.login', {
                        url: '/ecommerce/login',
                        templateUrl: 'partials/eco-login.html',
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
                        url: '/ecommerce/register',
                        templateUrl: 'partials/eco-register.html',
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
                        url: '/ecommerce/forgotpwd',
                        templateUrl: 'partials/eco-forgotpwd.html',
                    })









                    









                
            }
        ]
    );
