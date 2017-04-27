'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/app/music/dashboard');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html',
                          controller: 'MusicCtrl',
                          resolve: {
                              deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){
                                  return $ocLazyLoad.load([
                                    'com.2fdevs.videogular', 
                                    'com.2fdevs.videogular.plugins.controls', 
                                    'com.2fdevs.videogular.plugins.overlayplay',
                                    'com.2fdevs.videogular.plugins.poster',
                                    'com.2fdevs.videogular.plugins.buffering',
                                    'js/controllers/mus-fixed-player.js',
                                    '../bower_components/font-awesome/css/font-awesome.css'
                                  ]);
                              }]
                          }
                    })

                    .state('app.mus-dashboard', {
                        url: '/music/dashboard',
                        templateUrl: 'partials/mus-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/mus-dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                            }
                                          )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/mus-trending-albums.js');
                                            }
                                          )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/mus-trending-songs.js');
                                            }
                                          )
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
                    .state('app.mus-genres', {
                        url: '/music/genres',
                        templateUrl: 'partials/mus-genres.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/filters/mus-genre-search-startfrom.js', 
                                        'js/controllers/mus-genre.js', 
                                        'js/directives/mus-genretabs.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }
                    })    
                    .state('app.mus-genre-add', {
                        url: '/music/genre-add',
                        templateUrl: 'partials/mus-genre-add.html'
                    })    
                    .state('app.mus-genre-edit', {
                        url: '/music/genre-edit',
                        templateUrl: 'partials/mus-genre-edit.html'
                    })
                    .state('app.mus-artists', {
                        url: '/music/artists',
                        templateUrl: 'partials/mus-artists.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/artists.js']);
                                }
                            ]
                        }
                    })      
                    .state('app.mus-artist-add', {
                        url: '/music/artist-add',
                        templateUrl: 'partials/mus-artist-add.html'
                    })    
                    .state('app.mus-artist-edit', {
                        url: '/music/artist-edit',
                        templateUrl: 'partials/mus-artist-edit.html'
                    })
                    .state('app.mus-artist-profile', {
                        url: '/music/artist-profile',
                        templateUrl: 'partials/mus-artist-profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })      
                    .state('app.mus-song-add', {
                        url: '/music/song-add',
                        templateUrl: 'partials/mus-song-add.html'
                    })    
                    .state('app.mus-song-edit', {
                        url: '/music/song-edit',
                        templateUrl: 'partials/mus-song-edit.html'
                    })
                    .state('app.mus-song-view', {
                        url: '/music/song-view',
                        templateUrl: 'partials/mus-song-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.mus-albums', {
                        url: '/music/albums',
                        templateUrl: 'partials/mus-albums.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/albums.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.mus-album-add', {
                        url: '/music/album-add',
                        templateUrl: 'partials/mus-album-add.html'
                    })    
                    .state('app.mus-album-edit', {
                        url: '/music/album-edit',
                        templateUrl: 'partials/mus-album-edit.html'
                    })
                    .state('app.mus-album-view', {
                        url: '/music/album-view',
                        templateUrl: 'partials/mus-album-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.mus-playlists', {
                        url: '/music/playlists',
                        templateUrl: 'partials/mus-playlists.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['js/controllers/playlists.js']);
                                }
                            ]
                        }
                    })    
                    .state('app.mus-playlist-add', {
                        url: '/music/playlist-add',
                        templateUrl: 'partials/mus-playlist-add.html'
                    })    
                    .state('app.mus-playlist-edit', {
                        url: '/music/playlist-edit',
                        templateUrl: 'partials/mus-playlist-edit.html'
                    })
                    .state('app.mus-playlist-view', {
                        url: '/music/playlist-view',
                        templateUrl: 'partials/mus-playlist-view.html',
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            ]
                        }

                    })
                    .state('app.mus-upload', {
                        url: '/music/upload',
                        templateUrl: 'partials/mus-upload.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularFileUpload').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/mus-upload.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.mus-events', {
                        url: '/music/events',
                        templateUrl: 'partials/mus-events.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/mus-events.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })







/////////////////////////////////////////////////////////
                       
                    .state('app.mus-report-songs', {
                        url: '/music/report-songs',
                        templateUrl: 'partials/mus-report-songs.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/mus-report-songs.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.mus-report-visitors', {
                        url: '/music/report-visitors',
                        templateUrl: 'partials/mus-report-visitors.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/mus-report-visitors.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.mus-report-statistics', {
                        url: '/music/report-statistics',
                        templateUrl: 'partials/mus-report-statistics.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/mus-report-statistics.js']);
                                }
                            ]
                        }
                    })                  
                
            }
        ]
    );
