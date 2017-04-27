app.controller('EcommerceProductsCtrl', ['$scope', 'filterFilter', function($scope, filterFilter) {
    $scope.items = [{
        "title": "Nikon D5500 DSLR - Red",
        "thumb": "data/eco-products/product-1.jpg",
        "price": "$886.98",
        "category": "[clothes,software,laptops,tools]"
    }, {
        "title": "HTC One M8 Android L 5.0 Lollipop",
        "thumb": "data/eco-products/product-2.jpg",
        "price": "$143.60",
        "category": "[hardware,hardware,shoes]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-3.jpg",
        "price": "$249.29",
        "category": "[software,clothes,software,laptops]"
    }, {
        "title": "Custom T-Shirt",
        "thumb": "data/eco-products/product-4.jpg",
        "price": "$608.92",
        "category": "[clothes,shoes,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-5.jpg",
        "price": "$644.79",
        "category": "[accessories,hardware,clothes]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-6.jpg",
        "price": "$98.87",
        "category": "[tools,software,laptops,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-7.jpg",
        "price": "$887.96",
        "category": "[accessories,clothes,tools]"
    }, {
        "title": "Obey Propaganda Hat",
        "thumb": "data/eco-products/product-8.jpg",
        "price": "$787.73",
        "category": "[electronics,hardware,accessories]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-9.jpg",
        "price": "$274.38",
        "category": "[clothes,electronics,mobile,software,laptops]"
    }, {
        "title": "Levi's 511 Jeans",
        "thumb": "data/eco-products/product-10.jpg",
        "price": "$143.77",
        "category": "[accessories,accessories,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-11.jpg",
        "price": "$475.93",
        "category": "[accessories,accessories,electronics,mobile]"
    }, {
        "title": "Nikon D5500 DSLR",
        "thumb": "data/eco-products/product-12.jpg",
        "price": "$477.29",
        "category": "[accessories,accessories,software,laptops]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-13.jpg",
        "price": "$187.31",
        "category": "[tools,accessories,accessories]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-14.jpg",
        "price": "$249.50",
        "category": "[tools,tools,electronics,mobile]"
    }, {
        "title": "If You Wait",
        "thumb": "data/eco-products/product-15.jpg",
        "price": "$909.39",
        "category": "[hardware,tools,accessories]"
    }, {
        "title": "Fahrenheit 451 by Ray Bradbury",
        "thumb": "data/eco-products/product-16.jpg",
        "price": "$88.10",
        "category": "[electronics,electronics,mobile,software,laptops]"
    }, {
        "title": "First Prize Pies",
        "thumb": "data/eco-products/product-17.jpg",
        "price": "$981.50",
        "category": "[clothes,accessories,electronics,mobile]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-18.jpg",
        "price": "$751.07",
        "category": "[accessories,electronics,mobile,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-19.jpg",
        "price": "$59.43",
        "category": "[shoes,electronics,mobile,software,laptops]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-20.jpg",
        "price": "$93.63",
        "category": "[accessories,shoes,tools]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-21.jpg",
        "price": "$795.52",
        "category": "[clothes,hardware,hardware]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-22.jpg",
        "price": "$887.41",
        "category": "[software,tools,shoes]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-23.jpg",
        "price": "$498.54",
        "category": "[hardware,electronics,mobile,hardware]"
    }, {
        "title": "Elegant Gemstone Necklace",
        "thumb": "data/eco-products/product-24.jpg",
        "price": "$511.07",
        "category": "[accessories,clothes,electronics,mobile]"
    }, {
        "title": "Digital Storm Performance PC",
        "thumb": "data/eco-products/product-25.jpg",
        "price": "$776.47",
        "category": "[software,accessories,electronics,mobile]"
    },{
        "title": "Nikon D5500 DSLR - Red",
        "thumb": "data/eco-products/product-1.jpg",
        "price": "$886.98",
        "category": "[clothes,software,laptops,tools]"
    }, {
        "title": "HTC One M8 Android L 5.0 Lollipop",
        "thumb": "data/eco-products/product-2.jpg",
        "price": "$143.60",
        "category": "[hardware,hardware,shoes]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-3.jpg",
        "price": "$249.29",
        "category": "[software,clothes,software,laptops]"
    }, {
        "title": "Custom T-Shirt",
        "thumb": "data/eco-products/product-4.jpg",
        "price": "$608.92",
        "category": "[clothes,shoes,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-5.jpg",
        "price": "$644.79",
        "category": "[accessories,hardware,clothes]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-6.jpg",
        "price": "$98.87",
        "category": "[tools,software,laptops,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-7.jpg",
        "price": "$887.96",
        "category": "[accessories,clothes,tools]"
    }, {
        "title": "Obey Propaganda Hat",
        "thumb": "data/eco-products/product-8.jpg",
        "price": "$787.73",
        "category": "[electronics,hardware,accessories]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-9.jpg",
        "price": "$274.38",
        "category": "[clothes,electronics,mobile,software,laptops]"
    }, {
        "title": "Levi's 511 Jeans",
        "thumb": "data/eco-products/product-10.jpg",
        "price": "$143.77",
        "category": "[accessories,accessories,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-11.jpg",
        "price": "$475.93",
        "category": "[accessories,accessories,electronics,mobile]"
    }, {
        "title": "Nikon D5500 DSLR",
        "thumb": "data/eco-products/product-12.jpg",
        "price": "$477.29",
        "category": "[accessories,accessories,software,laptops]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-13.jpg",
        "price": "$187.31",
        "category": "[tools,accessories,accessories]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-14.jpg",
        "price": "$249.50",
        "category": "[tools,tools,electronics,mobile]"
    }, {
        "title": "If You Wait",
        "thumb": "data/eco-products/product-15.jpg",
        "price": "$909.39",
        "category": "[hardware,tools,accessories]"
    }, {
        "title": "Fahrenheit 451 by Ray Bradbury",
        "thumb": "data/eco-products/product-16.jpg",
        "price": "$88.10",
        "category": "[electronics,electronics,mobile,software,laptops]"
    }, {
        "title": "First Prize Pies",
        "thumb": "data/eco-products/product-17.jpg",
        "price": "$981.50",
        "category": "[clothes,accessories,electronics,mobile]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-18.jpg",
        "price": "$751.07",
        "category": "[accessories,electronics,mobile,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-19.jpg",
        "price": "$59.43",
        "category": "[shoes,electronics,mobile,software,laptops]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-20.jpg",
        "price": "$93.63",
        "category": "[accessories,shoes,tools]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-21.jpg",
        "price": "$795.52",
        "category": "[clothes,hardware,hardware]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-22.jpg",
        "price": "$887.41",
        "category": "[software,tools,shoes]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-23.jpg",
        "price": "$498.54",
        "category": "[hardware,electronics,mobile,hardware]"
    }, {
        "title": "Elegant Gemstone Necklace",
        "thumb": "data/eco-products/product-24.jpg",
        "price": "$511.07",
        "category": "[accessories,clothes,electronics,mobile]"
    }, {
        "title": "Digital Storm Performance PC",
        "thumb": "data/eco-products/product-25.jpg",
        "price": "$776.47",
        "category": "[software,accessories,electronics,mobile]"
    },{
        "title": "Nikon D5500 DSLR - Red",
        "thumb": "data/eco-products/product-1.jpg",
        "price": "$886.98",
        "category": "[clothes,software,laptops,tools]"
    }, {
        "title": "HTC One M8 Android L 5.0 Lollipop",
        "thumb": "data/eco-products/product-2.jpg",
        "price": "$143.60",
        "category": "[hardware,hardware,shoes]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-3.jpg",
        "price": "$249.29",
        "category": "[software,clothes,software,laptops]"
    }, {
        "title": "Custom T-Shirt",
        "thumb": "data/eco-products/product-4.jpg",
        "price": "$608.92",
        "category": "[clothes,shoes,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-5.jpg",
        "price": "$644.79",
        "category": "[accessories,hardware,clothes]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-6.jpg",
        "price": "$98.87",
        "category": "[tools,software,laptops,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-7.jpg",
        "price": "$887.96",
        "category": "[accessories,clothes,tools]"
    }, {
        "title": "Obey Propaganda Hat",
        "thumb": "data/eco-products/product-8.jpg",
        "price": "$787.73",
        "category": "[electronics,hardware,accessories]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-9.jpg",
        "price": "$274.38",
        "category": "[clothes,electronics,mobile,software,laptops]"
    }, {
        "title": "Levi's 511 Jeans",
        "thumb": "data/eco-products/product-10.jpg",
        "price": "$143.77",
        "category": "[accessories,accessories,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-11.jpg",
        "price": "$475.93",
        "category": "[accessories,accessories,electronics,mobile]"
    }, {
        "title": "Nikon D5500 DSLR",
        "thumb": "data/eco-products/product-12.jpg",
        "price": "$477.29",
        "category": "[accessories,accessories,software,laptops]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-13.jpg",
        "price": "$187.31",
        "category": "[tools,accessories,accessories]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-14.jpg",
        "price": "$249.50",
        "category": "[tools,tools,electronics,mobile]"
    }, {
        "title": "If You Wait",
        "thumb": "data/eco-products/product-15.jpg",
        "price": "$909.39",
        "category": "[hardware,tools,accessories]"
    }, {
        "title": "Fahrenheit 451 by Ray Bradbury",
        "thumb": "data/eco-products/product-16.jpg",
        "price": "$88.10",
        "category": "[electronics,electronics,mobile,software,laptops]"
    }, {
        "title": "First Prize Pies",
        "thumb": "data/eco-products/product-17.jpg",
        "price": "$981.50",
        "category": "[clothes,accessories,electronics,mobile]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-18.jpg",
        "price": "$751.07",
        "category": "[accessories,electronics,mobile,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-19.jpg",
        "price": "$59.43",
        "category": "[shoes,electronics,mobile,software,laptops]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-20.jpg",
        "price": "$93.63",
        "category": "[accessories,shoes,tools]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-21.jpg",
        "price": "$795.52",
        "category": "[clothes,hardware,hardware]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-22.jpg",
        "price": "$887.41",
        "category": "[software,tools,shoes]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-23.jpg",
        "price": "$498.54",
        "category": "[hardware,electronics,mobile,hardware]"
    }, {
        "title": "Elegant Gemstone Necklace",
        "thumb": "data/eco-products/product-24.jpg",
        "price": "$511.07",
        "category": "[accessories,clothes,electronics,mobile]"
    }, {
        "title": "Digital Storm Performance PC",
        "thumb": "data/eco-products/product-25.jpg",
        "price": "$776.47",
        "category": "[software,accessories,electronics,mobile]"
    },{
        "title": "Nikon D5500 DSLR - Red",
        "thumb": "data/eco-products/product-1.jpg",
        "price": "$886.98",
        "category": "[clothes,software,laptops,tools]"
    }, {
        "title": "HTC One M8 Android L 5.0 Lollipop",
        "thumb": "data/eco-products/product-2.jpg",
        "price": "$143.60",
        "category": "[hardware,hardware,shoes]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-3.jpg",
        "price": "$249.29",
        "category": "[software,clothes,software,laptops]"
    }, {
        "title": "Custom T-Shirt",
        "thumb": "data/eco-products/product-4.jpg",
        "price": "$608.92",
        "category": "[clothes,shoes,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-5.jpg",
        "price": "$644.79",
        "category": "[accessories,hardware,clothes]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-6.jpg",
        "price": "$98.87",
        "category": "[tools,software,laptops,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-7.jpg",
        "price": "$887.96",
        "category": "[accessories,clothes,tools]"
    }, {
        "title": "Obey Propaganda Hat",
        "thumb": "data/eco-products/product-8.jpg",
        "price": "$787.73",
        "category": "[electronics,hardware,accessories]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-9.jpg",
        "price": "$274.38",
        "category": "[clothes,electronics,mobile,software,laptops]"
    }, {
        "title": "Levi's 511 Jeans",
        "thumb": "data/eco-products/product-10.jpg",
        "price": "$143.77",
        "category": "[accessories,accessories,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-11.jpg",
        "price": "$475.93",
        "category": "[accessories,accessories,electronics,mobile]"
    }, {
        "title": "Nikon D5500 DSLR",
        "thumb": "data/eco-products/product-12.jpg",
        "price": "$477.29",
        "category": "[accessories,accessories,software,laptops]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-13.jpg",
        "price": "$187.31",
        "category": "[tools,accessories,accessories]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-14.jpg",
        "price": "$249.50",
        "category": "[tools,tools,electronics,mobile]"
    }, {
        "title": "If You Wait",
        "thumb": "data/eco-products/product-15.jpg",
        "price": "$909.39",
        "category": "[hardware,tools,accessories]"
    }, {
        "title": "Fahrenheit 451 by Ray Bradbury",
        "thumb": "data/eco-products/product-16.jpg",
        "price": "$88.10",
        "category": "[electronics,electronics,mobile,software,laptops]"
    }, {
        "title": "First Prize Pies",
        "thumb": "data/eco-products/product-17.jpg",
        "price": "$981.50",
        "category": "[clothes,accessories,electronics,mobile]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-18.jpg",
        "price": "$751.07",
        "category": "[accessories,electronics,mobile,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-19.jpg",
        "price": "$59.43",
        "category": "[shoes,electronics,mobile,software,laptops]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-20.jpg",
        "price": "$93.63",
        "category": "[accessories,shoes,tools]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-21.jpg",
        "price": "$795.52",
        "category": "[clothes,hardware,hardware]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-22.jpg",
        "price": "$887.41",
        "category": "[software,tools,shoes]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-23.jpg",
        "price": "$498.54",
        "category": "[hardware,electronics,mobile,hardware]"
    }, {
        "title": "Elegant Gemstone Necklace",
        "thumb": "data/eco-products/product-24.jpg",
        "price": "$511.07",
        "category": "[accessories,clothes,electronics,mobile]"
    }, {
        "title": "Digital Storm Performance PC",
        "thumb": "data/eco-products/product-25.jpg",
        "price": "$776.47",
        "category": "[software,accessories,electronics,mobile]"
    },{
        "title": "Nikon D5500 DSLR - Red",
        "thumb": "data/eco-products/product-1.jpg",
        "price": "$886.98",
        "category": "[clothes,software,laptops,tools]"
    }, {
        "title": "HTC One M8 Android L 5.0 Lollipop",
        "thumb": "data/eco-products/product-2.jpg",
        "price": "$143.60",
        "category": "[hardware,hardware,shoes]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-3.jpg",
        "price": "$249.29",
        "category": "[software,clothes,software,laptops]"
    }, {
        "title": "Custom T-Shirt",
        "thumb": "data/eco-products/product-4.jpg",
        "price": "$608.92",
        "category": "[clothes,shoes,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-5.jpg",
        "price": "$644.79",
        "category": "[accessories,hardware,clothes]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-6.jpg",
        "price": "$98.87",
        "category": "[tools,software,laptops,accessories]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-7.jpg",
        "price": "$887.96",
        "category": "[accessories,clothes,tools]"
    }, {
        "title": "Obey Propaganda Hat",
        "thumb": "data/eco-products/product-8.jpg",
        "price": "$787.73",
        "category": "[electronics,hardware,accessories]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-9.jpg",
        "price": "$274.38",
        "category": "[clothes,electronics,mobile,software,laptops]"
    }, {
        "title": "Levi's 511 Jeans",
        "thumb": "data/eco-products/product-10.jpg",
        "price": "$143.77",
        "category": "[accessories,accessories,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-11.jpg",
        "price": "$475.93",
        "category": "[accessories,accessories,electronics,mobile]"
    }, {
        "title": "Nikon D5500 DSLR",
        "thumb": "data/eco-products/product-12.jpg",
        "price": "$477.29",
        "category": "[accessories,accessories,software,laptops]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-13.jpg",
        "price": "$187.31",
        "category": "[tools,accessories,accessories]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-14.jpg",
        "price": "$249.50",
        "category": "[tools,tools,electronics,mobile]"
    }, {
        "title": "If You Wait",
        "thumb": "data/eco-products/product-15.jpg",
        "price": "$909.39",
        "category": "[hardware,tools,accessories]"
    }, {
        "title": "Fahrenheit 451 by Ray Bradbury",
        "thumb": "data/eco-products/product-16.jpg",
        "price": "$88.10",
        "category": "[electronics,electronics,mobile,software,laptops]"
    }, {
        "title": "First Prize Pies",
        "thumb": "data/eco-products/product-17.jpg",
        "price": "$981.50",
        "category": "[clothes,accessories,electronics,mobile]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-18.jpg",
        "price": "$751.07",
        "category": "[accessories,electronics,mobile,hardware]"
    }, {
        "title": "Nikon D5500 DSLR - Black",
        "thumb": "data/eco-products/product-19.jpg",
        "price": "$59.43",
        "category": "[shoes,electronics,mobile,software,laptops]"
    }, {
        "title": "Night Visions",
        "thumb": "data/eco-products/product-20.jpg",
        "price": "$93.63",
        "category": "[accessories,shoes,tools]"
    }, {
        "title": "Leica T Mirrorless Digital Camera",
        "thumb": "data/eco-products/product-21.jpg",
        "price": "$795.52",
        "category": "[clothes,hardware,hardware]"
    }, {
        "title": "Portable Sound Speakers",
        "thumb": "data/eco-products/product-22.jpg",
        "price": "$887.41",
        "category": "[software,tools,shoes]"
    }, {
        "title": "HP Spectre XT Pro UltraBook",
        "thumb": "data/eco-products/product-23.jpg",
        "price": "$498.54",
        "category": "[hardware,electronics,mobile,hardware]"
    }, {
        "title": "Elegant Gemstone Necklace",
        "thumb": "data/eco-products/product-24.jpg",
        "price": "$511.07",
        "category": "[accessories,clothes,electronics,mobile]"
    }, {
        "title": "Digital Storm Performance PC",
        "thumb": "data/eco-products/product-25.jpg",
        "price": "$776.47",
        "category": "[software,accessories,electronics,mobile]"
    }];
    // create empty search model (object) to trigger $watch on update
    $scope.search = {};
    $scope.resetFilters = function() {
        // needs to be a function or it won't trigger a $watch
        $scope.search = {};
    };
    // pagination controls
    $scope.currentPage = 1;
    $scope.totalItems = $scope.items.length;
    $scope.entryLimit = 40; // items per page
    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
    // $watch search to update pagination
    $scope.$watch('search', function(newVal, oldVal) {
        $scope.filtered = filterFilter($scope.items, newVal);
        $scope.totalItems = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        $scope.currentPage = 1;
    }, true);
}]);