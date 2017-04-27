'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/blog/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })

                    .state('app.blo-dashboard', {
                        url: '/blog/dashboard',
                        templateUrl: 'partials/blo-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/blo-dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/vectormap.js');
                                            }
                                          )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                            }
                                          )
                                    ;
                                }
                            ]
                        }
                    })
                    .state('app.blo-blogs', {
                        url: '/blog/blogs',
                        templateUrl: 'partials/blo-blogs.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/blogs-startfrom.js', 
                                        'js/controllers/blogs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-blogview', {
                        url: '/blog/{blogId:[0-9]{1,4}}',
                        templateUrl: 'partials/blo-blog-item.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-blog-view', {
                        url: '/blog/view',
                        templateUrl: 'partials/blo-blog-item.html'
                    })   
                    .state('app.blo-blog-add', {
                        url: '/blog/blog-add',
                        templateUrl: 'partials/blo-blog-add.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })    
                    .state('app.blo-blog-edit', {
                        url: '/blog/blog-edit',
                        templateUrl: 'partials/blo-blog-edit.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-search', {
                        url: '/blog/search',
                        templateUrl: 'partials/blo-search.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/search-startfrom.js', 
                                        'js/controllers/blo-search.js', 
                                        'js/directives/ui-searchtabs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.blo-users', {
                        url: '/blog/users',
                        templateUrl: 'partials/blo-users.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/blo-users.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.blo-user-add', {
                        url: '/blog/user-add',
                        templateUrl: 'partials/blo-user-add.html'
                    })    
                    .state('app.blo-user-edit', {
                        url: '/blog/user-edit',
                        templateUrl: 'partials/blo-user-edit.html'
                    })
                    .state('app.blo-user-profile', {
                        url: '/blog/user-profile',
                        templateUrl: 'partials/blo-user-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })  
                    .state('app.blo-categories', {
                        url: '/blog/categories',
                        templateUrl: 'partials/blo-categories.html'
                    })    
                    .state('app.blo-category-add', {
                        url: '/blog/category-add',
                        templateUrl: 'partials/blo-category-add.html'
                    })    
                    .state('app.blo-category-edit', {
                        url: '/blog/category-edit',
                        templateUrl: 'partials/blo-category-edit.html'
                    })
                    .state('app.blo-tags', {
                        url: '/blog/tags',
                        templateUrl: 'partials/blo-tags.html'
                    })    
                    .state('app.blo-tag-add', {
                        url: '/blog/tag-add',
                        templateUrl: 'partials/blo-tag-add.html'
                    })    
                    .state('app.blo-tag-edit', {
                        url: '/blog/tag-edit',
                        templateUrl: 'partials/blo-tag-edit.html'
                    })
                    .state('app.blo-upload', {
                        url: '/blog/upload',
                        templateUrl: 'partials/blo-upload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/blo-upload.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.blo-media', {
                        url: '/blog/media',
                        templateUrl: 'partials/blo-media.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/blo-media.js']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-pages', {
                        url: '/blog/pages',
                        templateUrl: 'partials/blo-pages.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/pages-startfrom.js', 
                                        'js/controllers/blo-pages.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-pageview', {
                        url: '/blog/page/{pageId:[0-9]{1,4}}',
                        templateUrl: 'partials/blo-page-item.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })
                    .state('app.blo-page-view', {
                        url: '/blog/page-view',
                        templateUrl: 'partials/blo-page-item.html'
                    })   
                    .state('app.blo-page-add', {
                        url: '/blog/page-add',
                        templateUrl: 'partials/blo-page-add.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })    
                    .state('app.blo-page-edit', {
                        url: '/blog/page-edit',
                        templateUrl: 'partials/blo-page-edit.html',
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
                    .state('app.blo-report-site', {
                        url: '/blog/report-site',
                        templateUrl: 'partials/blo-report-site.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/blo-report-site.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.blo-report-visitors', {
                        url: '/blog/report-visitors',
                        templateUrl: 'partials/blo-report-visitors.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/blo-report-visitors.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })

                
            }
        ]
    );
