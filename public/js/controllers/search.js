app.controller('SearchPageCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
	$scope.items = [
	{
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web, images"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-2.jpg",
		"category": ["web, projects"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-3.jpg",
		"category": ["contacts, images"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-4.jpg",
		"category": ["web, profile"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-5.jpg",
		"category": ["videos, images"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-6.jpg",
		"category": ["messages"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-7.jpg",
		"category": ["web, images"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-8.jpg",
		"category": ["contacts, profile"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-9.jpg",
		"category": ["web, videos"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-10.jpg",
		"category": ["web, projects"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["messages, web"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Human perception and the complex nature",
		"thumb": "data/search/blog-2.jpg",
		"category": ["contacts"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-2.jpg",
		"category": ["messages"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-3.jpg",
		"category": ["web, images"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-4.jpg",
		"category": ["map"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-1.jpg",
		"category": ["map, profile"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "Human perception and the complex nature",
		"thumb": "data/search/blog-2.jpg",
		"category": ["map"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	},	{
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web, images"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-2.jpg",
		"category": ["web, projects"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-3.jpg",
		"category": ["contacts, images"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-4.jpg",
		"category": ["web, profile"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-1.jpg",
		"category": ["videos, images"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-2.jpg",
		"category": ["messages"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web, images"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-2.jpg",
		"category": ["contacts, profile"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-3.jpg",
		"category": ["web, videos"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-4.jpg",
		"category": ["web, projects"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["messages, web"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Human perception and the complex nature",
		"thumb": "data/search/blog-2.jpg",
		"category": ["contacts"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-2.jpg",
		"category": ["messages"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-3.jpg",
		"category": ["web, images"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-4.jpg",
		"category": ["map"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-1.jpg",
		"category": ["map, profile"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "Human perception and the complex nature",
		"thumb": "data/search/blog-2.jpg",
		"category": ["map"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	},	{
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-1.jpg",
		"category": ["web, images"],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"title": "Comparing/creating differences",
		"thumb": "data/search/blog-2.jpg",
		"category": ["web, projects"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Designs in balance",
		"thumb": "data/search/blog-3.jpg",
		"category": ["contacts, images"],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"title": "Art of visual communication",
		"thumb": "data/search/blog-4.jpg",
		"category": ["web, profile"],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/search/blog-1.jpg",
		"category": ["videos, images"],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"title": "What is Graphic Design?",
		"thumb": "data/search/blog-2.jpg",
		"category": ["messages"],
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