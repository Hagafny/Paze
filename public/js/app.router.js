'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
    ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
        function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {

            $urlRouterProvider
                .otherwise('/app/dashboard');
            $stateProvider
                .state('app.participant', {
                    url: '/participant/:id',
                    templateUrl: 'partials/participant.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('chart.js').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/dashboard.js');
                                    }
                                )
                                    .then(
                                    function () {
                                        return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                    }
                                    );
                            }
                        ]
                    }




                })
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'partials/app.html'
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'partials/app_dashboard.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('chart.js').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/dashboard.js');
                                    }
                                )
                                    .then(
                                    function () {
                                        return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                    }
                                    );
                            }
                        ]
                    }
                })
                .state('app.widgets', {
                    url: '/widgets',
                    templateUrl: 'partials/widgets.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['countTo',
                                    'js/controllers/countto.js',
                                    'js/controllers/vectormap.js',
                                    'js/directives/ui-todowidget.js',
                                    'js/controllers/messages-widget.js',
                                    '../bower_components/font-awesome/css/font-awesome.css'
                                ]);
                            }
                        ]
                    }
                })
                .state('app.searchapp', {
                    url: '/searchapp',
                    templateUrl: 'partials/searchapp.html',
                })
                .state('access', {
                    url: '/access',
                    template: '<div ui-view class=""></div>'
                })
                .state('access.login', {
                    url: '/login',
                    templateUrl: 'partials/ui-login.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['js/controllers/login.js',
                                    '../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('access.register', {
                    url: '/register',
                    templateUrl: 'partials/ui-register.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['js/controllers/register.js', '../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('access.forgotpwd', {
                    url: '/forgotpwd',
                    templateUrl: 'partials/ui-forgotpwd.html',
                })
                .state('access.404', {
                    url: '/404',
                    templateUrl: 'partials/ui-404.html',
                })
                .state('access.500', {
                    url: '/500',
                    templateUrl: 'partials/ui-500.html'
                })
                .state('access.lockscreen', {
                    url: '/lockscreen',
                    templateUrl: 'partials/ui-lockscreen.html'
                })

                .state('app.ui', {
                    url: '/ui',
                    template: '<div ui-view class=""></div>'
                })
                .state('app.ui.typography', {
                    url: '/typography',
                    templateUrl: 'partials/ui-typography.html'
                })
                .state('app.ui.accordion', {
                    url: '/accordion',
                    templateUrl: 'partials/ui-accordion.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.ui.progress', {
                    url: '/progress',
                    templateUrl: 'partials/ui-progress.html'
                })
                .state('app.ui.icons', {
                    url: '/icons',
                    templateUrl: 'partials/ui-icons.html'
                })
                .state('app.ui.materialicons', {
                    url: '/material-icons',
                    templateUrl: 'partials/ui-icons-material.html'
                })
                .state('app.ui.faicons', {
                    url: '/fontawesome-icons',
                    templateUrl: 'partials/ui-icons-fa.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }

                })
                .state('app.ui.glyphicons', {
                    url: '/glyph-icons',
                    templateUrl: 'partials/ui-icons-glyph.html'
                })
                .state('app.ui.buttons', {
                    url: '/buttons',
                    templateUrl: 'partials/ui-buttons.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.ui.modals', {
                    url: '/modals',
                    templateUrl: 'partials/ui-modals.html'
                })
                .state('app.ui.notifications', {
                    url: '/notifications',
                    templateUrl: 'partials/ui-notifications.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('cgNotify').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/notify.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.ui.tooltips', {
                    url: '/tooltips',
                    templateUrl: 'partials/ui-tooltips.html'
                })
                .state('app.ui.sortable', {
                    url: '/sortable',
                    templateUrl: 'partials/ui-sortable.html'
                })
                /*.state('app.ui.navbars', {
                    url: '/navbars',
                    templateUrl: 'partials/ui-navbars.html'
                })*/
                /*.state('app.ui.extra', {
                    url: '/extra',
                    templateUrl: 'partials/ui-extra.html'
                })*/
                .state('app.ui.pagination', {
                    url: '/pagination',
                    templateUrl: 'partials/ui-pagination.html'
                })
                .state('app.ui.breadcrumb', {
                    url: '/breadcrumb',
                    templateUrl: 'partials/ui-breadcrumb.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.ui.carousel', {
                    url: '/carousel',
                    templateUrl: 'partials/ui-carousel.html'
                })
                .state('app.ui.panels', {
                    url: '/panels',
                    templateUrl: 'partials/ui-panels.html'
                })
                .state('app.ui.grids', {
                    url: '/grids',
                    templateUrl: 'partials/ui-grids.html'
                })
                .state('app.ui.tiles', {
                    url: '/tiles',
                    templateUrl: 'partials/ui-tiles.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('countTo').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/countto.js');
                                    }
                                ).then(
                                    function () {
                                        return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                    }
                                    );
                            }
                        ]
                    }
                })
                .state('app.form', {
                    url: '/form',
                    template: '<div ui-view class=""></div>'
                })

                .state('app.form.elements', {
                    url: '/elements',
                    templateUrl: 'partials/form-elements.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.form.premade', {
                    url: '/premade',
                    templateUrl: 'partials/form-premade.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.form.components', {
                    url: '/components',
                    templateUrl: 'partials/form-components.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('colorpicker.module').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/colorpicker.js');
                                    }
                                ).then(
                                    function () {
                                        return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                    }
                                    );
                            }
                        ]
                    }
                })
                .state('app.form.wizard', {
                    url: '/wizard',
                    templateUrl: 'partials/form-wizard.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.form.validation', {
                    url: '/validation',
                    templateUrl: 'partials/form-validation.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load('js/controllers/form-validation.js');
                            }
                        ]
                    }
                })
                .state('app.form.fileupload', {
                    url: '/fileupload',
                    templateUrl: 'partials/form-fileupload.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('angularFileUpload').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/file-upload.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.form.slider', {
                    url: '/slider',
                    templateUrl: 'partials/form-slider.html',
                    controller: 'FormSliderCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('vr.directives.slider').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/form-slider.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.form.editable', {
                    url: '/editable',
                    templateUrl: 'partials/form-editable.html',
                    controller: 'FormXeditableCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('xeditable').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/form-xeditable.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.form.editors', {
                    url: '/editors',
                    templateUrl: 'partials/form-editors.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                    /*,
                                            controller: 'FormEditorCtrl',
                                            resolve:  {
                                                deps: ['$ocLazyLoad',
                                                  function( $ocLazyLoad ){
                                                    return $ocLazyLoad.load('textAngular').then(
                                                        function(){
                                                            return $ocLazyLoad.load('js/controllers/form-editor.js');
                                                        }
                                                    );
                                                }]
                                            }*/
                })
                .state('app.form.masks', {
                    url: '/masks',
                    templateUrl: 'partials/form-masks.html'
                })
                .state('app.ui.calendar', {
                    url: '/calendar',
                    templateUrl: 'partials/ui-calendar.html',
                    resolve: {
                        deps: ['$ocLazyLoad', 'uiLoad',
                            function ($ocLazyLoad, uiLoad) {
                                return uiLoad.load(
                                    JQ_CONFIG.fullcalendar.concat('js/controllers/calendar.js')
                                ).then(
                                    function () {
                                        return $ocLazyLoad.load('ui.calendar');
                                    }
                                    )
                            }
                        ]
                    }
                })
                .state('app.ui.pricing', {
                    url: '/pricing',
                    templateUrl: 'partials/ui-pricing.html'
                })
                .state('app.ui.profile', {
                    url: '/profile',
                    templateUrl: 'partials/ui-profile.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.ui.timeline', {
                    url: '/timeline',
                    templateUrl: 'partials/ui-timeline.html'
                })
                .state('app.ui.invoice', {
                    url: '/invoice',
                    templateUrl: 'partials/ui-invoice.html'
                })
                .state('app.ui.members', {
                    url: '/members',
                    templateUrl: 'partials/ui-members.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['js/controllers/members.js', '../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }

                })
                .state('app.ui.search', {
                    url: '/search',
                    templateUrl: 'partials/ui-search.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['js/filters/search-startfrom.js', 'js/controllers/search.js', 'js/directives/ui-searchtabs.js', '../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }

                })
                .state('app.ui.blogs', {
                    url: '/blogs',
                    templateUrl: 'partials/ui-blogs.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['js/filters/blogs-startfrom.js', 'js/controllers/blogs.js', '../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.ui.blogview', {
                    url: '/blog/{blogId:[0-9]{1,4}}',
                    templateUrl: 'partials/ui-blog-item.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                            }
                        ]
                    }
                })
                .state('app.ui.imagecrop', {
                    url: '/imagecrop',
                    templateUrl: 'partials/ui-imagecrop.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('ngImgCrop').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/imagecrop.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                /* .state('app.ui.faq', {
                     url: '/faq',
                     templateUrl: 'partials/ui-faq.html',
                     resolve: {
                         deps: ['$ocLazyLoad',
                             function($ocLazyLoad) {
                                 return $ocLazyLoad.load(['js/controllers/faq.js']);
                             }
                         ]
                     }
                 })*/
                .state('app.mail', {
                    abstract: true,
                    url: '/mail',
                    //template: '<div ui-view class=""></div>',
                    templateUrl: 'partials/mail.html',
                    // use resolve to load other dependences
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
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
                .state('app.charts', {
                    url: '/charts',
                    template: '<div ui-view class=""></div>',
                })
                .state('app.charts.morris', {
                    url: '/morris',
                    templateUrl: 'partials/charts-morris.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('ngMorris').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/morris.js');
                                    }
                                );
                            }
                        ]
                    }

                })
                .state('app.charts.chartjs', {
                    url: '/chartjs',
                    templateUrl: 'partials/charts-chartjs.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('chart.js').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/chartjs.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.charts.flot', {
                    url: '/flot',
                    templateUrl: 'partials/charts-flot.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['js/controllers/flot-chart.js']);
                            }
                        ]
                    }
                })
                .state('app.charts.sparkline', {
                    url: '/sparkline',
                    templateUrl: 'partials/charts-sparkline.html'

                })
                .state('app.charts.easypiechart', {
                    url: '/easypiechart',
                    templateUrl: 'partials/charts-easypiechart.html'

                })
                .state('app.charts.rickshaw', {
                    url: '/rickshaw',
                    templateUrl: 'partials/charts-rickshaw.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['../bower_components/d3/d3.min.js', 'angular-rickshaw'], {
                                    serie: true
                                }).then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/rickshaw.js');
                                    }
                                    );
                            }
                        ]
                    }
                })
                .state('app.tables', {
                    url: '/tables',
                    template: '<div ui-view class=""></div>'
                })
                .state('app.tables.basic', {
                    url: '/basic',
                    templateUrl: 'partials/tables-basic.html'
                })
                .state('app.tables.data', {
                    url: '/data',
                    templateUrl: 'partials/tables-data.html'
                })
                .state('app.tables.footable', {
                    url: '/footable',
                    templateUrl: 'partials/tables-footable.html'
                })
                .state('app.tables.nggrid', {
                    url: '/nggrid',
                    templateUrl: 'partials/tables-nggrid.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('ngGrid').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/table-nggrid.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.tables.uigrid', {
                    url: '/uigrid',
                    templateUrl: 'partials/tables-uigrid.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('ui.grid').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/table-uigrid.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.tables.editable', {
                    url: '/editable',
                    templateUrl: 'partials/tables-editable.html',
                    controller: 'FormXeditableCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('xeditable').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/form-xeditable.js');
                                    }
                                );
                            }
                        ]
                    }
                })
                .state('app.tables.smart', {
                    url: '/smart',
                    templateUrl: 'partials/table-smart.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('smart-table').then(
                                    function () {
                                        return $ocLazyLoad.load('js/controllers/table-smart.js');
                                    }
                                );
                            }
                        ]
                    }
                })

                .state('app.layout', {
                    url: '/layout',
                    template: '<div ui-view class=""></div>'
                })
                .state('app.layout.default', {
                    url: '/default',
                    templateUrl: 'partials/layout-default.html'
                })
                .state('app.layout.collapsed', {
                    url: '/collapsed',
                    templateUrl: 'partials/layout-collapsed.html'
                })
                .state('app.layout.chat', {
                    url: '/chat',
                    templateUrl: 'partials/layout-chat.html'
                })
                .state('app.layout.boxed', {
                    url: '/boxed',
                    templateUrl: 'partials/layout-boxed.html'
                })
                .state('app.ui.vectormaps', {
                    url: '/vectormaps',
                    templateUrl: 'partials/ui-vectormaps.html',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('js/controllers/vectormap.js');
                            }
                        ]
                    }
                })
                .state('app.ui.googlemapfull', {
                    url: '/googlemapfull',
                    templateUrl: 'partials/ui-googlemapfull.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load([
                                    'js/map/load-google-maps.js',
                                    'js/map/ui-map.js',
                                    'js/map/map.js'
                                ]).then(
                                    function () {
                                        return loadGoogleMaps();
                                    }
                                    );
                            }
                        ]
                    }

                })
        }
    ]
    );
