jQuery(function($) {

    'use strict';

    var SLANT_SETTINGS = window.SLANT_SETTINGS || {};



    /*--------------------------------
         Other Form component Scripts
     --------------------------------*/
    SLANT_SETTINGS.otherScripts = function() {

        /*---------------------------------*/

        // Slider
        if ($.isFunction($.fn.slider)) {
            $(".slider").each(function(i, el) {
                var $this = $(el),
                    $label_1 = $('<span class="ui-label"></span>'),
                    $label_2 = $label_1.clone(),

                    orientation = getValue($this, 'vertical', 0) != 0 ? 'vertical' : 'horizontal',

                    prefix = getValue($this, 'prefix', ''),
                    postfix = getValue($this, 'postfix', ''),

                    fill = getValue($this, 'fill', ''),
                    $fill = $(fill),

                    step = getValue($this, 'step', 1),
                    value = getValue($this, 'value', 5),
                    min = getValue($this, 'min', 0),
                    max = getValue($this, 'max', 100),
                    min_val = getValue($this, 'min-val', 10),
                    max_val = getValue($this, 'max-val', 90),

                    is_range = $this.is('[data-min-val]') || $this.is('[data-max-val]'),

                    reps = 0;


                // Range Slider Options
                if (is_range) {
                    $this.slider({
                        range: true,
                        orientation: orientation,
                        min: min,
                        max: max,
                        values: [min_val, max_val],
                        step: step,
                        slide: function(e, ui) {
                            var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');

                            $label_1.html(min_val);
                            $label_2.html(max_val);

                            if (fill)
                                $fill.val(min_val + ',' + max_val);

                            reps++;
                        },
                        change: function(ev, ui) {
                            if (reps == 1) {
                                var min_val = (prefix ? prefix : '') + ui.values[0] + (postfix ? postfix : ''),
                                    max_val = (prefix ? prefix : '') + ui.values[1] + (postfix ? postfix : '');

                                $label_1.html(min_val);
                                $label_2.html(max_val);

                                if (fill)
                                    $fill.val(min_val + ',' + max_val);
                            }

                            reps = 0;
                        }
                    });

                    var $handles = $this.find('.ui-slider-handle');

                    $label_1.html((prefix ? prefix : '') + min_val + (postfix ? postfix : ''));
                    $handles.first().append($label_1);

                    $label_2.html((prefix ? prefix : '') + max_val + (postfix ? postfix : ''));
                    $handles.last().append($label_2);
                }
                // Normal Slider
                else {

                    $this.slider({
                        range: getValue($this, 'basic', 0) ? false : "min",
                        orientation: orientation,
                        min: min,
                        max: max,
                        value: value,
                        step: step,
                        slide: function(ev, ui) {
                            var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');

                            $label_1.html(val);


                            if (fill)
                                $fill.val(val);

                            reps++;
                        },
                        change: function(ev, ui) {
                            if (reps == 1) {
                                var val = (prefix ? prefix : '') + ui.value + (postfix ? postfix : '');

                                $label_1.html(val);

                                if (fill)
                                    $fill.val(val);
                            }

                            reps = 0;
                        }
                    });

                    var $handles = $this.find('.ui-slider-handle');
                    //$fill = $('<div class="ui-fill"></div>');

                    $label_1.html((prefix ? prefix : '') + value + (postfix ? postfix : ''));
                    $handles.html($label_1);

                    //$handles.parent().prepend( $fill );

                    //$fill.width($handles.get(0).style.left);
                }

            })
        }



        /*------------- Color Slider widget---------------*/

        function hexFromRGB(r, g, b) {
            var hex = [
                r.toString(16),
                g.toString(16),
                b.toString(16)
            ];
            $.each(hex, function(nr, val) {
                if (val.length === 1) {
                    hex[nr] = "0" + val;
                }
            });
            return hex.join("").toUpperCase();
        }

        function refreshSwatch() {
            var red = $("#slider-red").slider("value"),
                green = $("#slider-green").slider("value"),
                blue = $("#slider-blue").slider("value"),
                hex = hexFromRGB(red, green, blue);
            $("#slider-swatch").css("background-color", "#" + hex);
        }


        if ($.isFunction($.fn.slider)) {

            $(function() {
                $("#slider-red, #slider-green, #slider-blue").slider({
                    orientation: "horizontal",
                    range: "min",
                    max: 255,
                    value: 127,
                    slide: refreshSwatch,
                    change: refreshSwatch
                });
                $("#slider-red").slider("value", 235);
                $("#slider-green").slider("value", 70);
                $("#slider-blue").slider("value", 60);
            });
        }

    };



    // Element Attribute Helper
    function getValue($el, data_var, default_val) {
        if (typeof $el.data(data_var) != 'undefined') {
            return $el.data(data_var);
        }

        return default_val;
    }


    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        SLANT_SETTINGS.otherScripts();
    });

    $(window).resize(function() {
    });

    $(window).load(function() {
    });

});
