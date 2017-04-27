app.controller('MusicCtrl',
  ["$sce",'$scope', function ($sce, $scope) {  

    $scope.API = null;
    $scope.active = 0;


    $scope.audios = [
      {
        sources: [
          {src: $sce.trustAsResourceUrl("data/mus-song-files/song-1.mp3"), type: "audio/mpeg"},
          {src: $sce.trustAsResourceUrl("data/mus-song-files/song-1.ogg"), type: "audio/ogg"}
        ]
      },
      {
       sources: [
          {src: $sce.trustAsResourceUrl("data/mus-song-files/song-2.mp3"), type: "audio/mpeg"},
          {src: $sce.trustAsResourceUrl("data/mus-song-files/song-2.ogg"), type: "audio/ogg"}
        ]
      },      
      {
        sources: [
          {src: $sce.trustAsResourceUrl("data/mus-song-files/song-3.mp3"), type: "audio/mpeg"},
          {src: $sce.trustAsResourceUrl("data/mus-song-files/song-3.ogg"), type: "audio/ogg"}
        ]
      }
    ];

      $scope.config = {
          sources: $scope.audios[0].sources,
          autoPlay: true,
          theme: {
          url: "css/videogular.css"
                }
            };

    $scope.onPlayerReady = function(API) {
      $scope.API = API;
      if ($scope.API.currentState == 'play' || $scope.isCompleted) $scope.API.play();
      $scope.isCompleted = false;
    };

    $scope.onComplete = function() {
      $scope.isCompleted = true;
      // shuffle
      if($scope.config.shuffle){
        $scope.active = $scope.getRandom($scope.active);
      // next item
      }else{
        $scope.active++;
      }
      
      // last item
      if ($scope.active >= $scope.audios.length) {
        $scope.active = 0;
        // repeat
        if($scope.config.repeat){
          $scope.setActive($scope.active);
        }
      }else{
        $scope.setActive($scope.active);
      }
    };


    $scope.play = function(index){
      $scope.isCompleted = true;
      // get prev or next item
      index == "next" ? $scope.active++ : $scope.active--;
      if ($scope.active >= $scope.audios.length) $scope.active = 0;
      if ($scope.active == -1) $scope.active = $scope.audios.length - 1;
      // play it
      $scope.setActive($scope.active);
    };

    $scope.setActive = function(index){
      $scope.API.stop();
      $scope.config.sources = $scope.audios[index].sources;
      $scope.config.title = $scope.audios[index].title;
    };






  }]
);