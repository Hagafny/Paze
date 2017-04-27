app.controller('BlogPageCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
	$scope.items = [
	{
		"id": 1,
		"title": "What is Graphic Design?",
		"thumb": "data/blo-pages/blog-1.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 2,
		"title": "Comparing/creating differences",
		"thumb": "data/blo-pages/blog-2.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 3,
		"title": "Designs in balance",
		"thumb": "data/blo-pages/blog-3.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 4,
		"title": "Art of visual communication",
		"thumb": "data/blo-pages/blog-4.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 5,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blo-pages/blog-5.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 6,
		"title": "What is Graphic Design?",
		"thumb": "data/blo-pages/blog-6.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 7,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blo-pages/blog-7.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 8,
		"title": "Art of visual communication",
		"thumb": "data/blo-pages/blog-8.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 9,
		"title": "Comparing/creating differences",
		"thumb": "data/blo-pages/blog-9.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 10,
		"title": "Designs in balance",
		"thumb": "data/blo-pages/blog-10.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 11,
		"title": "What is Graphic Design?",
		"thumb": "data/blo-pages/blog-1.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 12,
		"title": "Comparing/creating differences",
		"thumb": "data/blo-pages/blog-2.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 13,
		"title": "Designs in balance",
		"thumb": "data/blo-pages/blog-3.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 14,
		"title": "Art of visual communication",
		"thumb": "data/blo-pages/blog-4.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 15,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blo-pages/blog-5.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 16,
		"title": "What is Graphic Design?",
		"thumb": "data/blo-pages/blog-6.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 17,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blo-pages/blog-7.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 18,
		"title": "Art of visual communication",
		"thumb": "data/blo-pages/blog-8.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 19,
		"title": "Comparing/creating differences",
		"thumb": "data/blo-pages/blog-9.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 20,
		"title": "Designs in balance",
		"thumb": "data/blo-pages/blog-10.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	},  {
		"id": 21,
		"title": "What is Graphic Design?",
		"thumb": "data/blo-pages/blog-1.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 22,
		"title": "Comparing/creating differences",
		"thumb": "data/blo-pages/blog-2.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 23,
		"title": "Designs in balance",
		"thumb": "data/blo-pages/blog-3.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 24,
		"title": "Art of visual communication",
		"thumb": "data/blo-pages/blog-4.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 25,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blo-pages/blog-5.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 26,
		"title": "What is Graphic Design?",
		"thumb": "data/blo-pages/blog-6.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 27,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blo-pages/blog-7.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 28,
		"title": "Art of visual communication",
		"thumb": "data/blo-pages/blog-8.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 29,
		"title": "Comparing/creating differences",
		"thumb": "data/blo-pages/blog-9.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 30,
		"title": "Designs in balance",
		"thumb": "data/blo-pages/blog-10.jpg",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}
	];
 
	// create empty search model (object) to trigger $watch on update
	$scope.search = {};
 
	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};




 
	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 8; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
 	
	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
}]);