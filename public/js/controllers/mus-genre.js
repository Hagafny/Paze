app.controller('MusicGenreCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
$scope.items = [
{
    "thumb": "data/songs/song-1.jpg",
    "title": "ligula pellentesque ultrices phasellus id",
    "artist": "ahayes0",
    "genre": "[metal,rock,dancehall,trap,world]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "at ipsum ac tellus semper",
    "artist": "dross1",
    "genre": "[reggae,trap,jazzblues,trap,rock]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "amet eleifend pede libero quis orci nullam molestie nibh in",
    "artist": "bphillips2",
    "genre": "[rbsoul,disco,indie,latin,reggae]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
    "artist": "sramos3",
    "genre": "[electronic,deephouse,metal,hiphoprap,hiphoprap,world]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "nulla tempus vivamus in felis eu",
    "artist": "sdean4",
    "genre": "[house,soundtrack,country,dancehall,jazzblues]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "felis ut at dolor quis odio consequat",
    "artist": "amyers5",
    "genre": "[pop,indie,rock,folksingersongwriter,danceedm]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
    "artist": "gaustin6",
    "genre": "[rbsoul,reggaeton,dubstep,electronic,deephouse,dubstep]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "nibh quisque id justo sit amet sapien",
    "artist": "jharper7",
    "genre": "[piano,dancehall,hiphoprap,house,trance,reggae]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "nulla dapibus dolor vel est donec",
    "artist": "amartinez8",
    "genre": "[reggaeton,rock,country,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "etiam vel augue vestibulum rutrum rutrum",
    "artist": "hallen9",
    "genre": "[ambient,piano,danceedm,reggaeton,dancehall]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "duis ac nibh fusce lacus purus aliquet at feugiat",
    "artist": "pcarrolla",
    "genre": "[drumbass,alternativerock,soundtrack,metal,dubstep,house]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
    "artist": "mharrisb",
    "genre": "[jazzblues,ambient,dubstep,reggaeton,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
    "artist": "rwoodsc",
    "genre": "[disco,house,trance,pop,reggae,piano]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "nisl duis ac nibh fusce lacus purus aliquet at",
    "artist": "spattersond",
    "genre": "[dubstep,metal,reggaeton,classical,jazzblues]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
    "artist": "afishere",
    "genre": "[dancehall,jazzblues,metal,house,trance,piano]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "fusce congue diam id ornare",
    "artist": "cwilsonf",
    "genre": "[disco,latin,classical,latin,triphop]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "augue vestibulum ante ipsum primis in faucibus orci",
    "artist": "rholmesg",
    "genre": "[world,reggaeton,classical,drumbass,alternativerock,indie]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "magna ac consequat metus sapien",
    "artist": "wfranklinh",
    "genre": "[indie,soundtrack,indie,rbsoul,rock]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "consequat morbi a ipsum integer a nibh in quis justo",
    "artist": "enguyeni",
    "genre": "[soundtrack,world,soundtrack,pop,dancehall]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "mauris lacinia sapien quis libero nullam sit amet turpis",
    "artist": "pandersonj",
    "genre": "[rbsoul,techno,dancehall,electronic,deephouse,pop]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ut blandit non interdum in ante vestibulum ante ipsum primis",
    "artist": "rgrahamk",
    "genre": "[electronic,deephouse,house,trance,drumbass,alternativerock,rock,trap]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "nibh in quis justo maecenas",
    "artist": "schapmanl",
    "genre": "[hiphoprap,drumbass,alternativerock,jazzblues,classical,classical]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "pede justo eu massa donec dapibus duis at velit",
    "artist": "ehawkinsm",
    "genre": "[classical,reggaeton,indie,ambient,indie]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "proin at turpis a pede",
    "artist": "pchavezn",
    "genre": "[reggae,trap,house,trance,triphop,metal]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "at velit vivamus vel nulla",
    "artist": "kstanleyo",
    "genre": "[latin,danceedm,dubstep,reggae,rock]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "cras pellentesque volutpat dui maecenas",
    "artist": "dgreenp",
    "genre": "[electronic,deephouse,drumbass,alternativerock,classical,dubstep,classical]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "eleifend luctus ultricies eu nibh quisque id justo",
    "artist": "jgilbertq",
    "genre": "[techno,dubstep,electronic,deephouse,piano,rock]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "et ultrices posuere cubilia curae nulla dapibus dolor",
    "artist": "mshawr",
    "genre": "[disco,soundtrack,dubstep,dancehall,danceedm]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "proin at turpis a pede posuere nonummy",
    "artist": "lperkinss",
    "genre": "[reggae,classical,dubstep,techno,house]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "ut mauris eget massa tempor convallis",
    "artist": "lmorgant",
    "genre": "[electronic,deephouse,ambient,ambient,triphop,latin]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "massa volutpat convallis morbi odio odio elementum eu",
    "artist": "aharrisu",
    "genre": "[trap,country,rock,piano,reggaeton]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "penatibus et magnis dis parturient montes nascetur ridiculus",
    "artist": "rryanv",
    "genre": "[reggae,techno,disco,hiphoprap,reggaeton]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
    "artist": "awatkinsw",
    "genre": "[danceedm,reggae,rbsoul,jazzblues,metal]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "leo pellentesque ultrices mattis odio donec vitae nisi",
    "artist": "pscottx",
    "genre": "[soundtrack,dancehall,rbsoul,folksingersongwriter,disco]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "sit amet sapien dignissim vestibulum vestibulum ante",
    "artist": "rkimy",
    "genre": "[world,soundtrack,world,triphop,reggaeton]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "primis in faucibus orci luctus et",
    "artist": "gsimsz",
    "genre": "[indie,techno,reggae,reggaeton,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "id justo sit amet sapien dignissim vestibulum",
    "artist": "jlawson10",
    "genre": "[indie,reggae,triphop,hiphoprap,jazzblues]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "vitae consectetuer eget rutrum at lorem",
    "artist": "mcruz11",
    "genre": "[reggae,world,pop,rock,world]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "faucibus cursus urna ut tellus nulla ut",
    "artist": "rmills12",
    "genre": "[folksingersongwriter,dancehall,folksingersongwriter,techno,dubstep]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "tempus semper est quam pharetra magna ac consequat metus sapien",
    "artist": "cjohnson13",
    "genre": "[country,indie,pop,dancehall,electronic]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "ac lobortis vel dapibus at",
    "artist": "pramirez14",
    "genre": "[electronic,deephouse,rbsoul,indie,country,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
    "artist": "creid15",
    "genre": "[soundtrack,country,dancehall,folksingersongwriter,world]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "duis consequat dui nec nisi volutpat eleifend donec",
    "artist": "jmills16",
    "genre": "[piano,jazzblues,dubstep,soundtrack,trap]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
    "artist": "awilson17",
    "genre": "[classical,drumbass,alternativerock,house,trance,folksingersongwriter,house]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "cursus urna ut tellus nulla ut",
    "artist": "adaniels18",
    "genre": "[pop,hiphoprap,world,drumbass,alternativerock,danceedm]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
    "artist": "nmarshall19",
    "genre": "[disco,trap,indie,latin,world]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "viverra pede ac diam cras pellentesque volutpat dui maecenas",
    "artist": "wfranklin1a",
    "genre": "[dancehall,classical,jazzblues,dubstep,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "amet erat nulla tempus vivamus in felis eu sapien",
    "artist": "bmorales1b",
    "genre": "[disco,dancehall,latin,latin,drumbass]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    "artist": "csanchez1c",
    "genre": "[jazzblues,indie,latin,country,rbsoul]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "mauris laoreet ut rhoncus aliquet",
    "artist": "jthompson1d",
    "genre": "[electronic,deephouse,techno,drumbass,alternativerock,folksingersongwriter,indie]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "mus etiam vel augue vestibulum rutrum rutrum neque",
    "artist": "bmoore1e",
    "genre": "[hiphoprap,trap,indie,indie,jazzblues]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "congue etiam justo etiam pretium iaculis",
    "artist": "wstewart1f",
    "genre": "[disco,dubstep,indie,trap,dubstep]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "in consequat ut nulla sed accumsan felis",
    "artist": "cmartin1g",
    "genre": "[soundtrack,metal,house,trance,triphop,piano]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "augue aliquam erat volutpat in",
    "artist": "mray1h",
    "genre": "[reggaeton,electronic,deephouse,country,danceedm,electronic]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "convallis nulla neque libero convallis eget",
    "artist": "dlee1i",
    "genre": "[trap,dancehall,country,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "mauris non ligula pellentesque ultrices phasellus id sapien",
    "artist": "jalexander1j",
    "genre": "[country,danceedm,danceedm,world,rock]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
    "artist": "lhawkins1k",
    "genre": "[disco,techno,pop,metal,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "tortor quis turpis sed ante vivamus tortor duis",
    "artist": "chudson1l",
    "genre": "[metal,triphop,trap,reggae,indie]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "ac neque duis bibendum morbi non",
    "artist": "moliver1m",
    "genre": "[latin,metal,techno,rock,classical]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "luctus rutrum nulla tellus in sagittis dui",
    "artist": "vkennedy1n",
    "genre": "[trap,pop,soundtrack,techno,metal]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sapien urna pretium nisl ut volutpat",
    "artist": "jvasquez1o",
    "genre": "[pop,drumbass,alternativerock,reggaeton,disco,metal]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "quam suspendisse potenti nullam porttitor lacus",
    "artist": "mcrawford1p",
    "genre": "[reggaeton,classical,house,trance,dancehall,ambient]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "artist": "alawson1q",
    "genre": "[trap,house,trance,dancehall,triphop,house]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "metus sapien ut nunc vestibulum ante ipsum",
    "artist": "aturner1r",
    "genre": "[dubstep,trap,dubstep,rock,disco]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "vivamus vestibulum sagittis sapien cum sociis natoque",
    "artist": "plee1s",
    "genre": "[world,reggae,house,trance,classical,latin]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "curae nulla dapibus dolor vel est donec",
    "artist": "jromero1t",
    "genre": "[country,piano,disco,dubstep,rock]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "integer aliquet massa id lobortis convallis tortor risus",
    "artist": "mbarnes1u",
    "genre": "[world,ambient,electronic,deephouse,piano,ambient]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "mattis egestas metus aenean fermentum donec ut mauris",
    "artist": "jmccoy1v",
    "genre": "[disco,soundtrack,disco,indie,drumbass]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "ac neque duis bibendum morbi non quam nec dui luctus",
    "artist": "hrogers1w",
    "genre": "[house,rock,reggaeton,folksingersongwriter,pop]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "praesent id massa id nisl venenatis lacinia aenean sit",
    "artist": "rclark1x",
    "genre": "[dancehall,rbsoul,dancehall,ambient,metal]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "et magnis dis parturient montes nascetur",
    "artist": "emoreno1y",
    "genre": "[techno,rock,danceedm,disco,metal]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "mauris morbi non lectus aliquam sit amet diam",
    "artist": "jporter1z",
    "genre": "[folksingersongwriter,hiphoprap,piano,rock,rock]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "fusce posuere felis sed lacus morbi sem mauris",
    "artist": "lcooper20",
    "genre": "[trap,rock,drumbass,alternativerock,triphop,latin]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "elementum ligula vehicula consequat morbi a ipsum integer a",
    "artist": "mburton21",
    "genre": "[indie,drumbass,alternativerock,metal,jazzblues,piano]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "fermentum donec ut mauris eget massa tempor convallis",
    "artist": "smurray22",
    "genre": "[rbsoul,hiphoprap,country,danceedm,reggae]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "a nibh in quis justo maecenas",
    "artist": "elane23",
    "genre": "[folksingersongwriter,piano,piano,country,trap]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "at turpis donec posuere metus vitae",
    "artist": "cmoreno24",
    "genre": "[drumbass,alternativerock,ambient,rbsoul,danceedm,latin]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "leo odio porttitor id consequat in consequat",
    "artist": "jhanson25",
    "genre": "[folksingersongwriter,disco,electronic,deephouse,latin,latin]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
    "artist": "pberry26",
    "genre": "[drumbass,alternativerock,drumbass,alternativerock,jazzblues,world,jazzblues]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "tellus nulla ut erat id mauris vulputate elementum nullam varius",
    "artist": "cgonzales27",
    "genre": "[pop,jazzblues,house,trance,hiphoprap,classical]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "primis in faucibus orci luctus",
    "artist": "akelly28",
    "genre": "[techno,country,indie,rock,dubstep]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "egestas metus aenean fermentum donec ut mauris eget massa tempor",
    "artist": "rford29",
    "genre": "[rbsoul,folksingersongwriter,rbsoul,jazzblues,reggaeton]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "pulvinar lobortis est phasellus sit amet erat nulla",
    "artist": "rwelch2a",
    "genre": "[electronic,deephouse,piano,rbsoul,ambient,hiphoprap]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "ac nibh fusce lacus purus aliquet at feugiat non pretium",
    "artist": "rmorris2b",
    "genre": "[pop,reggaeton,triphop,reggaeton,latin]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "massa id nisl venenatis lacinia",
    "artist": "elarson2c",
    "genre": "[disco,indie,ambient,rock,rbsoul]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
    "artist": "sduncan2d",
    "genre": "[dubstep,metal,hiphoprap,country,indie]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "arcu libero rutrum ac lobortis",
    "artist": "nfreeman2e",
    "genre": "[rbsoul,pop,metal,disco,pop]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "id sapien in sapien iaculis congue vivamus metus",
    "artist": "cfowler2f",
    "genre": "[world,piano,metal,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "sapien varius ut blandit non",
    "artist": "sevans2g",
    "genre": "[techno,world,piano,reggaeton,soundtrack]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "pede lobortis ligula sit amet",
    "artist": "jhamilton2h",
    "genre": "[metal,reggae,electronic,deephouse,reggaeton,disco]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "magnis dis parturient montes nascetur",
    "artist": "gthompson2i",
    "genre": "[danceedm,classical,metal,techno,dancehall]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "nec dui luctus rutrum nulla tellus in sagittis dui",
    "artist": "tbryant2j",
    "genre": "[disco,indie,latin,dancehall,world]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "erat vestibulum sed magna at nunc",
    "artist": "ccrawford2k",
    "genre": "[piano,electronic,deephouse,drumbass,alternativerock,reggae,dubstep]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "vestibulum proin eu mi nulla ac enim",
    "artist": "jrogers2l",
    "genre": "[disco,ambient,soundtrack,pop,danceedm]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "quis augue luctus tincidunt nulla",
    "artist": "pholmes2m",
    "genre": "[dubstep,ambient,indie,drumbass,alternativerock,electronic]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "bibendum felis sed interdum venenatis turpis",
    "artist": "rporter2n",
    "genre": "[latin,rock,classical,house,trance,danceedm]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "morbi a ipsum integer a nibh in",
    "artist": "cthomas2o",
    "genre": "[hiphoprap,trap,reggaeton,latin,dancehall]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "vestibulum sed magna at nunc commodo placerat praesent",
    "artist": "adaniels2p",
    "genre": "[latin,jazzblues,folksingersongwriter,latin,dubstep]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "lorem integer tincidunt ante vel ipsum praesent",
    "artist": "jrose2q",
    "genre": "[trap,reggae,dancehall,dancehall,reggae]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "condimentum id luctus nec molestie sed justo pellentesque viverra",
    "artist": "jgardner2r",
    "genre": "[drumbass,alternativerock,jazzblues,danceedm,soundtrack,techno]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "montes nascetur ridiculus mus etiam",
    "artist": "jramirez2s",
    "genre": "[dubstep,triphop,indie,triphop,jazzblues]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "quis libero nullam sit amet turpis elementum ligula",
    "artist": "jday2t",
    "genre": "[electronic,deephouse,world,rbsoul,dubstep,dubstep]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "nullam varius nulla facilisi cras",
    "artist": "jcunningham2u",
    "genre": "[latin,soundtrack,disco,indie,ambient]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "rutrum nulla tellus in sagittis dui",
    "artist": "kmorrison2v",
    "genre": "[triphop,house,trance,piano,world,soundtrack]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "semper sapien a libero nam dui proin leo odio",
    "artist": "mspencer2w",
    "genre": "[piano,metal,metal,reggae,jazzblues]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "sapien sapien non mi integer ac neque duis bibendum morbi",
    "artist": "sfrazier2x",
    "genre": "[dubstep,trap,world,latin,rock]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "sapien in sapien iaculis congue vivamus metus arcu",
    "artist": "wriley2y",
    "genre": "[pop,jazzblues,metal,pop,country]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "commodo vulputate justo in blandit ultrices",
    "artist": "lmedina2z",
    "genre": "[disco,house,trance,triphop,house,trance,rock]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "primis in faucibus orci luctus et ultrices",
    "artist": "dmills30",
    "genre": "[rock,rbsoul,trap,electronic,deephouse,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "adipiscing molestie hendrerit at vulputate vitae",
    "artist": "areed31",
    "genre": "[metal,house,trance,pop,classical,reggaeton]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sit amet justo morbi ut odio",
    "artist": "vporter32",
    "genre": "[dubstep,disco,piano,pop,drumbass]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "in faucibus orci luctus et ultrices posuere cubilia",
    "artist": "wsmith33",
    "genre": "[electronic,deephouse,world,jazzblues,dancehall,trap]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "nunc donec quis orci eget",
    "artist": "mbowman34",
    "genre": "[pop,dubstep,trap,soundtrack,latin]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "nulla tellus in sagittis dui vel nisl duis ac",
    "artist": "lgreen35",
    "genre": "[jazzblues,piano,electronic,deephouse,hiphoprap,reggae]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "elit proin interdum mauris non ligula",
    "artist": "mrichardson36",
    "genre": "[trap,folksingersongwriter,rock,ambient,jazzblues]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "aenean fermentum donec ut mauris eget",
    "artist": "jcrawford37",
    "genre": "[soundtrack,reggae,rock,indie,rock]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "proin at turpis a pede posuere nonummy integer",
    "artist": "kfisher38",
    "genre": "[disco,classical,reggae,dancehall,country]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "porttitor lacus at turpis donec",
    "artist": "dmarshall39",
    "genre": "[rock,piano,rock,dubstep,disco]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "sit amet eros suspendisse accumsan tortor",
    "artist": "lnguyen3a",
    "genre": "[triphop,drumbass,alternativerock,metal,metal,indie]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "pede ullamcorper augue a suscipit nulla elit",
    "artist": "abishop3b",
    "genre": "[piano,indie,dancehall,house,trance,electronic]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ipsum primis in faucibus orci",
    "artist": "jhart3c",
    "genre": "[disco,indie,dancehall,electronic,deephouse,disco]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "adipiscing elit proin risus praesent lectus",
    "artist": "areynolds3d",
    "genre": "[pop,reggae,rbsoul,reggaeton,metal]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "non sodales sed tincidunt eu felis",
    "artist": "dlewis3e",
    "genre": "[disco,drumbass,alternativerock,folksingersongwriter,disco,country]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "rutrum at lorem integer tincidunt ante",
    "artist": "jmorris3f",
    "genre": "[electronic,deephouse,jazzblues,rbsoul,triphop,classical]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "in purus eu magna vulputate luctus",
    "artist": "dstewart3g",
    "genre": "[jazzblues,piano,classical,indie,pop]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "nam dui proin leo odio porttitor id consequat in consequat",
    "artist": "pfisher3h",
    "genre": "[indie,folksingersongwriter,danceedm,pop,triphop]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "integer ac neque duis bibendum morbi non quam nec",
    "artist": "ccollins3i",
    "genre": "[dancehall,house,trance,house,dubstep,reggaeton]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
    "artist": "jandrews3j",
    "genre": "[metal,disco,country,reggaeton,pop]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "sodales sed tincidunt eu felis fusce posuere",
    "artist": "bsanders3k",
    "genre": "[danceedm,trap,dubstep,disco,rbsoul]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "mauris morbi non lectus aliquam sit amet",
    "artist": "wperkins3l",
    "genre": "[rock,reggae,reggaeton,soundtrack,techno]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "pede justo eu massa donec dapibus duis",
    "artist": "gmedina3m",
    "genre": "[soundtrack,metal,trap,danceedm,latin]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "elementum ligula vehicula consequat morbi a ipsum integer a",
    "artist": "jbradley3n",
    "genre": "[house,country,indie,folksingersongwriter,piano]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
    "artist": "rthomas3o",
    "genre": "[drumbass,alternativerock,world,drumbass,alternativerock,rbsoul,electronic]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "amet sem fusce consequat nulla",
    "artist": "bhicks3p",
    "genre": "[hiphoprap,classical,classical,latin,country]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "rutrum ac lobortis vel dapibus at diam nam",
    "artist": "wfoster3q",
    "genre": "[latin,rbsoul,indie,piano,latin]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "lobortis vel dapibus at diam nam",
    "artist": "kpatterson3r",
    "genre": "[indie,metal,metal,latin,electronic]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "quam turpis adipiscing lorem vitae mattis nibh",
    "artist": "hcrawford3s",
    "genre": "[metal,hiphoprap,piano,pop,soundtrack]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "vel enim sit amet nunc viverra dapibus nulla suscipit",
    "artist": "kscott3t",
    "genre": "[drumbass,alternativerock,metal,world,pop,rbsoul]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "id justo sit amet sapien dignissim",
    "artist": "amedina3u",
    "genre": "[disco,electronic,deephouse,jazzblues,house,trance,electronic]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "suscipit ligula in lacus curabitur at ipsum ac tellus semper",
    "artist": "sclark3v",
    "genre": "[danceedm,latin,folksingersongwriter,country,trap]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "ac diam cras pellentesque volutpat dui maecenas tristique",
    "artist": "jdixon3w",
    "genre": "[ambient,rock,metal,drumbass,alternativerock,jazzblues]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "vulputate elementum nullam varius nulla facilisi cras non velit",
    "artist": "dgardner3x",
    "genre": "[rbsoul,jazzblues,ambient,rbsoul,techno]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "leo odio condimentum id luctus nec molestie sed",
    "artist": "jmarshall3y",
    "genre": "[disco,house,trance,trap,disco,rbsoul]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "montes nascetur ridiculus mus vivamus",
    "artist": "vhill3z",
    "genre": "[piano,pop,hiphoprap,soundtrack,electronic]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
    "artist": "pwelch40",
    "genre": "[techno,piano,triphop,classical,hiphoprap]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ante vestibulum ante ipsum primis in faucibus orci luctus",
    "artist": "glong41",
    "genre": "[country,classical,electronic,deephouse,triphop,pop]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "eu massa donec dapibus duis",
    "artist": "rstewart42",
    "genre": "[rbsoul,dubstep,pop,dubstep,ambient]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "in leo maecenas pulvinar lobortis est",
    "artist": "nwebb43",
    "genre": "[electronic,deephouse,reggaeton,country,rbsoul,latin]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "luctus cum sociis natoque penatibus",
    "artist": "charvey44",
    "genre": "[rbsoul,triphop,dubstep,techno,rock]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "aliquet maecenas leo odio condimentum id luctus",
    "artist": "jjacobs45",
    "genre": "[indie,triphop,folksingersongwriter,hiphoprap,ambient]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "vel nisl duis ac nibh fusce lacus purus aliquet at",
    "artist": "lalvarez46",
    "genre": "[metal,metal,danceedm,reggaeton,dancehall]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "faucibus orci luctus et ultrices posuere cubilia curae mauris",
    "artist": "mmason47",
    "genre": "[triphop,pop,ambient,danceedm,metal]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "maecenas pulvinar lobortis est phasellus",
    "artist": "enichols48",
    "genre": "[techno,dancehall,world,pop,dubstep]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "quis tortor id nulla ultrices aliquet",
    "artist": "wlong49",
    "genre": "[drumbass,alternativerock,world,soundtrack,trap,classical]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "accumsan tellus nisi eu orci mauris lacinia sapien",
    "artist": "pdean4a",
    "genre": "[danceedm,house,trance,latin,trap,electronic]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "primis in faucibus orci luctus et ultrices posuere cubilia",
    "artist": "bkim4b",
    "genre": "[electronic,deephouse,hiphoprap,dancehall,pop,electronic]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "duis ac nibh fusce lacus purus",
    "artist": "janderson4c",
    "genre": "[indie,folksingersongwriter,piano,rbsoul,metal]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "vel nisl duis ac nibh fusce lacus",
    "artist": "ggriffin4d",
    "genre": "[reggae,house,trance,drumbass,alternativerock,reggae,classical]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "dui luctus rutrum nulla tellus in sagittis",
    "artist": "chowell4e",
    "genre": "[electronic,deephouse,triphop,triphop,indie,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "leo maecenas pulvinar lobortis est phasellus sit amet",
    "artist": "rmartinez4f",
    "genre": "[folksingersongwriter,reggae,techno,dubstep,house]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "a ipsum integer a nibh in quis",
    "artist": "jmurray4g",
    "genre": "[soundtrack,danceedm,trap,dubstep,disco]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "vel sem sed sagittis nam congue",
    "artist": "pjones4h",
    "genre": "[indie,country,dancehall,danceedm,drumbass]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "aliquam non mauris morbi non lectus aliquam sit amet",
    "artist": "rcox4i",
    "genre": "[latin,disco,trap,electronic,deephouse,jazzblues]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "sit amet eleifend pede libero",
    "artist": "mfoster4j",
    "genre": "[country,dancehall,classical,latin,world]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "placerat praesent blandit nam nulla integer pede justo lacinia eget",
    "artist": "dwoods4k",
    "genre": "[world,drumbass,alternativerock,trap,pop,soundtrack]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "erat fermentum justo nec condimentum neque sapien",
    "artist": "jevans4l",
    "genre": "[jazzblues,reggae,disco,soundtrack,disco]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "orci pede venenatis non sodales sed tincidunt eu felis",
    "artist": "pwagner4m",
    "genre": "[rock,hiphoprap,world,hiphoprap,piano]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "nunc rhoncus dui vel sem sed",
    "artist": "rtaylor4n",
    "genre": "[indie,hiphoprap,drumbass,alternativerock,indie,world]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "tellus nulla ut erat id mauris vulputate elementum nullam varius",
    "artist": "mcox4o",
    "genre": "[dubstep,techno,metal,reggae,reggae]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "eu tincidunt in leo maecenas pulvinar lobortis est",
    "artist": "dwatson4p",
    "genre": "[jazzblues,soundtrack,disco,drumbass,alternativerock,dubstep]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "duis aliquam convallis nunc proin at turpis",
    "artist": "ewells4q",
    "genre": "[metal,disco,indie,danceedm,classical]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "justo nec condimentum neque sapien placerat",
    "artist": "jrussell4r",
    "genre": "[triphop,world,disco,dubstep,dancehall]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "ipsum primis in faucibus orci",
    "artist": "dpeters4s",
    "genre": "[metal,country,pop,trap,disco]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "in quam fringilla rhoncus mauris",
    "artist": "dwatkins4t",
    "genre": "[country,reggae,latin,reggaeton,soundtrack]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "sed nisl nunc rhoncus dui vel sem sed sagittis",
    "artist": "sjohnston4u",
    "genre": "[metal,electronic,deephouse,ambient,drumbass,alternativerock,disco]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "non mauris morbi non lectus aliquam sit amet diam in",
    "artist": "mfrazier4v",
    "genre": "[disco,disco,latin,latin,dancehall]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "pellentesque viverra pede ac diam",
    "artist": "rpatterson4w",
    "genre": "[metal,pop,pop,disco,drumbass]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "mauris ullamcorper purus sit amet",
    "artist": "janderson4x",
    "genre": "[ambient,world,house,trance,piano,jazzblues]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "rhoncus sed vestibulum sit amet cursus id turpis integer",
    "artist": "jkelly4y",
    "genre": "[dancehall,rbsoul,folksingersongwriter,danceedm,classical]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "pellentesque volutpat dui maecenas tristique est et tempus",
    "artist": "tscott4z",
    "genre": "[country,country,ambient,dancehall,world]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "viverra dapibus nulla suscipit ligula in",
    "artist": "ttaylor50",
    "genre": "[classical,country,folksingersongwriter,triphop,piano]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "ut rhoncus aliquet pulvinar sed nisl nunc",
    "artist": "cross51",
    "genre": "[danceedm,electronic,deephouse,soundtrack,dancehall,triphop]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "nec molestie sed justo pellentesque viverra pede ac",
    "artist": "wsmith52",
    "genre": "[electronic,deephouse,house,trance,danceedm,jazzblues,trap]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "felis eu sapien cursus vestibulum proin eu mi nulla",
    "artist": "ccarroll53",
    "genre": "[classical,classical,ambient,piano,dancehall]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "morbi non quam nec dui luctus",
    "artist": "sbowman54",
    "genre": "[trap,rbsoul,hiphoprap,piano,trap]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "nunc purus phasellus in felis donec semper",
    "artist": "mwagner55",
    "genre": "[rock,metal,reggae,reggaeton,dubstep]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "diam nam tristique tortor eu pede",
    "artist": "pharris56",
    "genre": "[triphop,reggaeton,piano,drumbass,alternativerock,classical]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "massa id nisl venenatis lacinia aenean sit amet",
    "artist": "cmartin57",
    "genre": "[house,classical,reggaeton,trap,danceedm]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "in est risus auctor sed tristique in tempus sit",
    "artist": "kfernandez58",
    "genre": "[jazzblues,soundtrack,trap,dubstep,ambient]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "faucibus orci luctus et ultrices posuere cubilia curae mauris",
    "artist": "cknight59",
    "genre": "[country,house,trance,latin,dubstep,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "nisi at nibh in hac habitasse platea dictumst",
    "artist": "jharrison5a",
    "genre": "[triphop,reggaeton,latin,dubstep,house]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "felis fusce posuere felis sed lacus morbi sem mauris laoreet",
    "artist": "jbrooks5b",
    "genre": "[drumbass,alternativerock,world,hiphoprap,drumbass,alternativerock,latin]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "arcu adipiscing molestie hendrerit at vulputate vitae",
    "artist": "athomas5c",
    "genre": "[pop,rock,ambient,techno,ambient]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "enim in tempor turpis nec euismod",
    "artist": "hjackson5d",
    "genre": "[indie,ambient,folksingersongwriter,latin,electronic]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "sit amet nunc viverra dapibus nulla suscipit ligula in",
    "artist": "cgonzalez5e",
    "genre": "[pop,electronic,deephouse,piano,electronic,deephouse,trap]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "justo nec condimentum neque sapien placerat ante nulla",
    "artist": "svasquez5f",
    "genre": "[indie,triphop,folksingersongwriter,triphop,indie]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum",
    "artist": "tbrooks5g",
    "genre": "[trap,piano,electronic,deephouse,house,trance,world]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
    "artist": "vdaniels5h",
    "genre": "[jazzblues,folksingersongwriter,trap,jazzblues,soundtrack]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "etiam pretium iaculis justo in",
    "artist": "jlane5i",
    "genre": "[triphop,latin,disco,soundtrack,trap]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "risus praesent lectus vestibulum quam sapien",
    "artist": "pfowler5j",
    "genre": "[indie,world,country,danceedm,dubstep"
},{
    "thumb": "data/songs/song-1.jpg",
    "title": "ligula pellentesque ultrices phasellus id",
    "artist": "ahayes0",
    "genre": "[metal,rock,dancehall,trap,world]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "at ipsum ac tellus semper",
    "artist": "dross1",
    "genre": "[reggae,trap,jazzblues,trap,rock]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "amet eleifend pede libero quis orci nullam molestie nibh in",
    "artist": "bphillips2",
    "genre": "[rbsoul,disco,indie,latin,reggae]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
    "artist": "sramos3",
    "genre": "[electronic,deephouse,metal,hiphoprap,hiphoprap,world]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "nulla tempus vivamus in felis eu",
    "artist": "sdean4",
    "genre": "[house,soundtrack,country,dancehall,jazzblues]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "felis ut at dolor quis odio consequat",
    "artist": "amyers5",
    "genre": "[pop,indie,rock,folksingersongwriter,danceedm]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
    "artist": "gaustin6",
    "genre": "[rbsoul,reggaeton,dubstep,electronic,deephouse,dubstep]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "nibh quisque id justo sit amet sapien",
    "artist": "jharper7",
    "genre": "[piano,dancehall,hiphoprap,house,trance,reggae]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "nulla dapibus dolor vel est donec",
    "artist": "amartinez8",
    "genre": "[reggaeton,rock,country,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "etiam vel augue vestibulum rutrum rutrum",
    "artist": "hallen9",
    "genre": "[ambient,piano,danceedm,reggaeton,dancehall]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "duis ac nibh fusce lacus purus aliquet at feugiat",
    "artist": "pcarrolla",
    "genre": "[drumbass,alternativerock,soundtrack,metal,dubstep,house]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
    "artist": "mharrisb",
    "genre": "[jazzblues,ambient,dubstep,reggaeton,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
    "artist": "rwoodsc",
    "genre": "[disco,house,trance,pop,reggae,piano]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "nisl duis ac nibh fusce lacus purus aliquet at",
    "artist": "spattersond",
    "genre": "[dubstep,metal,reggaeton,classical,jazzblues]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
    "artist": "afishere",
    "genre": "[dancehall,jazzblues,metal,house,trance,piano]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "fusce congue diam id ornare",
    "artist": "cwilsonf",
    "genre": "[disco,latin,classical,latin,triphop]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "augue vestibulum ante ipsum primis in faucibus orci",
    "artist": "rholmesg",
    "genre": "[world,reggaeton,classical,drumbass,alternativerock,indie]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "magna ac consequat metus sapien",
    "artist": "wfranklinh",
    "genre": "[indie,soundtrack,indie,rbsoul,rock]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "consequat morbi a ipsum integer a nibh in quis justo",
    "artist": "enguyeni",
    "genre": "[soundtrack,world,soundtrack,pop,dancehall]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "mauris lacinia sapien quis libero nullam sit amet turpis",
    "artist": "pandersonj",
    "genre": "[rbsoul,techno,dancehall,electronic,deephouse,pop]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ut blandit non interdum in ante vestibulum ante ipsum primis",
    "artist": "rgrahamk",
    "genre": "[electronic,deephouse,house,trance,drumbass,alternativerock,rock,trap]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "nibh in quis justo maecenas",
    "artist": "schapmanl",
    "genre": "[hiphoprap,drumbass,alternativerock,jazzblues,classical,classical]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "pede justo eu massa donec dapibus duis at velit",
    "artist": "ehawkinsm",
    "genre": "[classical,reggaeton,indie,ambient,indie]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "proin at turpis a pede",
    "artist": "pchavezn",
    "genre": "[reggae,trap,house,trance,triphop,metal]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "at velit vivamus vel nulla",
    "artist": "kstanleyo",
    "genre": "[latin,danceedm,dubstep,reggae,rock]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "cras pellentesque volutpat dui maecenas",
    "artist": "dgreenp",
    "genre": "[electronic,deephouse,drumbass,alternativerock,classical,dubstep,classical]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "eleifend luctus ultricies eu nibh quisque id justo",
    "artist": "jgilbertq",
    "genre": "[techno,dubstep,electronic,deephouse,piano,rock]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "et ultrices posuere cubilia curae nulla dapibus dolor",
    "artist": "mshawr",
    "genre": "[disco,soundtrack,dubstep,dancehall,danceedm]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "proin at turpis a pede posuere nonummy",
    "artist": "lperkinss",
    "genre": "[reggae,classical,dubstep,techno,house]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "ut mauris eget massa tempor convallis",
    "artist": "lmorgant",
    "genre": "[electronic,deephouse,ambient,ambient,triphop,latin]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "massa volutpat convallis morbi odio odio elementum eu",
    "artist": "aharrisu",
    "genre": "[trap,country,rock,piano,reggaeton]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "penatibus et magnis dis parturient montes nascetur ridiculus",
    "artist": "rryanv",
    "genre": "[reggae,techno,disco,hiphoprap,reggaeton]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
    "artist": "awatkinsw",
    "genre": "[danceedm,reggae,rbsoul,jazzblues,metal]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "leo pellentesque ultrices mattis odio donec vitae nisi",
    "artist": "pscottx",
    "genre": "[soundtrack,dancehall,rbsoul,folksingersongwriter,disco]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "sit amet sapien dignissim vestibulum vestibulum ante",
    "artist": "rkimy",
    "genre": "[world,soundtrack,world,triphop,reggaeton]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "primis in faucibus orci luctus et",
    "artist": "gsimsz",
    "genre": "[indie,techno,reggae,reggaeton,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "id justo sit amet sapien dignissim vestibulum",
    "artist": "jlawson10",
    "genre": "[indie,reggae,triphop,hiphoprap,jazzblues]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "vitae consectetuer eget rutrum at lorem",
    "artist": "mcruz11",
    "genre": "[reggae,world,pop,rock,world]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "faucibus cursus urna ut tellus nulla ut",
    "artist": "rmills12",
    "genre": "[folksingersongwriter,dancehall,folksingersongwriter,techno,dubstep]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "tempus semper est quam pharetra magna ac consequat metus sapien",
    "artist": "cjohnson13",
    "genre": "[country,indie,pop,dancehall,electronic]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "ac lobortis vel dapibus at",
    "artist": "pramirez14",
    "genre": "[electronic,deephouse,rbsoul,indie,country,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
    "artist": "creid15",
    "genre": "[soundtrack,country,dancehall,folksingersongwriter,world]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "duis consequat dui nec nisi volutpat eleifend donec",
    "artist": "jmills16",
    "genre": "[piano,jazzblues,dubstep,soundtrack,trap]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
    "artist": "awilson17",
    "genre": "[classical,drumbass,alternativerock,house,trance,folksingersongwriter,house]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "cursus urna ut tellus nulla ut",
    "artist": "adaniels18",
    "genre": "[pop,hiphoprap,world,drumbass,alternativerock,danceedm]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
    "artist": "nmarshall19",
    "genre": "[disco,trap,indie,latin,world]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "viverra pede ac diam cras pellentesque volutpat dui maecenas",
    "artist": "wfranklin1a",
    "genre": "[dancehall,classical,jazzblues,dubstep,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "amet erat nulla tempus vivamus in felis eu sapien",
    "artist": "bmorales1b",
    "genre": "[disco,dancehall,latin,latin,drumbass]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    "artist": "csanchez1c",
    "genre": "[jazzblues,indie,latin,country,rbsoul]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "mauris laoreet ut rhoncus aliquet",
    "artist": "jthompson1d",
    "genre": "[electronic,deephouse,techno,drumbass,alternativerock,folksingersongwriter,indie]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "mus etiam vel augue vestibulum rutrum rutrum neque",
    "artist": "bmoore1e",
    "genre": "[hiphoprap,trap,indie,indie,jazzblues]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "congue etiam justo etiam pretium iaculis",
    "artist": "wstewart1f",
    "genre": "[disco,dubstep,indie,trap,dubstep]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "in consequat ut nulla sed accumsan felis",
    "artist": "cmartin1g",
    "genre": "[soundtrack,metal,house,trance,triphop,piano]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "augue aliquam erat volutpat in",
    "artist": "mray1h",
    "genre": "[reggaeton,electronic,deephouse,country,danceedm,electronic]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "convallis nulla neque libero convallis eget",
    "artist": "dlee1i",
    "genre": "[trap,dancehall,country,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "mauris non ligula pellentesque ultrices phasellus id sapien",
    "artist": "jalexander1j",
    "genre": "[country,danceedm,danceedm,world,rock]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
    "artist": "lhawkins1k",
    "genre": "[disco,techno,pop,metal,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "tortor quis turpis sed ante vivamus tortor duis",
    "artist": "chudson1l",
    "genre": "[metal,triphop,trap,reggae,indie]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "ac neque duis bibendum morbi non",
    "artist": "moliver1m",
    "genre": "[latin,metal,techno,rock,classical]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "luctus rutrum nulla tellus in sagittis dui",
    "artist": "vkennedy1n",
    "genre": "[trap,pop,soundtrack,techno,metal]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sapien urna pretium nisl ut volutpat",
    "artist": "jvasquez1o",
    "genre": "[pop,drumbass,alternativerock,reggaeton,disco,metal]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "quam suspendisse potenti nullam porttitor lacus",
    "artist": "mcrawford1p",
    "genre": "[reggaeton,classical,house,trance,dancehall,ambient]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "artist": "alawson1q",
    "genre": "[trap,house,trance,dancehall,triphop,house]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "metus sapien ut nunc vestibulum ante ipsum",
    "artist": "aturner1r",
    "genre": "[dubstep,trap,dubstep,rock,disco]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "vivamus vestibulum sagittis sapien cum sociis natoque",
    "artist": "plee1s",
    "genre": "[world,reggae,house,trance,classical,latin]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "curae nulla dapibus dolor vel est donec",
    "artist": "jromero1t",
    "genre": "[country,piano,disco,dubstep,rock]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "integer aliquet massa id lobortis convallis tortor risus",
    "artist": "mbarnes1u",
    "genre": "[world,ambient,electronic,deephouse,piano,ambient]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "mattis egestas metus aenean fermentum donec ut mauris",
    "artist": "jmccoy1v",
    "genre": "[disco,soundtrack,disco,indie,drumbass]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "ac neque duis bibendum morbi non quam nec dui luctus",
    "artist": "hrogers1w",
    "genre": "[house,rock,reggaeton,folksingersongwriter,pop]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "praesent id massa id nisl venenatis lacinia aenean sit",
    "artist": "rclark1x",
    "genre": "[dancehall,rbsoul,dancehall,ambient,metal]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "et magnis dis parturient montes nascetur",
    "artist": "emoreno1y",
    "genre": "[techno,rock,danceedm,disco,metal]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "mauris morbi non lectus aliquam sit amet diam",
    "artist": "jporter1z",
    "genre": "[folksingersongwriter,hiphoprap,piano,rock,rock]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "fusce posuere felis sed lacus morbi sem mauris",
    "artist": "lcooper20",
    "genre": "[trap,rock,drumbass,alternativerock,triphop,latin]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "elementum ligula vehicula consequat morbi a ipsum integer a",
    "artist": "mburton21",
    "genre": "[indie,drumbass,alternativerock,metal,jazzblues,piano]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "fermentum donec ut mauris eget massa tempor convallis",
    "artist": "smurray22",
    "genre": "[rbsoul,hiphoprap,country,danceedm,reggae]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "a nibh in quis justo maecenas",
    "artist": "elane23",
    "genre": "[folksingersongwriter,piano,piano,country,trap]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "at turpis donec posuere metus vitae",
    "artist": "cmoreno24",
    "genre": "[drumbass,alternativerock,ambient,rbsoul,danceedm,latin]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "leo odio porttitor id consequat in consequat",
    "artist": "jhanson25",
    "genre": "[folksingersongwriter,disco,electronic,deephouse,latin,latin]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
    "artist": "pberry26",
    "genre": "[drumbass,alternativerock,drumbass,alternativerock,jazzblues,world,jazzblues]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "tellus nulla ut erat id mauris vulputate elementum nullam varius",
    "artist": "cgonzales27",
    "genre": "[pop,jazzblues,house,trance,hiphoprap,classical]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "primis in faucibus orci luctus",
    "artist": "akelly28",
    "genre": "[techno,country,indie,rock,dubstep]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "egestas metus aenean fermentum donec ut mauris eget massa tempor",
    "artist": "rford29",
    "genre": "[rbsoul,folksingersongwriter,rbsoul,jazzblues,reggaeton]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "pulvinar lobortis est phasellus sit amet erat nulla",
    "artist": "rwelch2a",
    "genre": "[electronic,deephouse,piano,rbsoul,ambient,hiphoprap]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "ac nibh fusce lacus purus aliquet at feugiat non pretium",
    "artist": "rmorris2b",
    "genre": "[pop,reggaeton,triphop,reggaeton,latin]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "massa id nisl venenatis lacinia",
    "artist": "elarson2c",
    "genre": "[disco,indie,ambient,rock,rbsoul]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
    "artist": "sduncan2d",
    "genre": "[dubstep,metal,hiphoprap,country,indie]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "arcu libero rutrum ac lobortis",
    "artist": "nfreeman2e",
    "genre": "[rbsoul,pop,metal,disco,pop]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "id sapien in sapien iaculis congue vivamus metus",
    "artist": "cfowler2f",
    "genre": "[world,piano,metal,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "sapien varius ut blandit non",
    "artist": "sevans2g",
    "genre": "[techno,world,piano,reggaeton,soundtrack]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "pede lobortis ligula sit amet",
    "artist": "jhamilton2h",
    "genre": "[metal,reggae,electronic,deephouse,reggaeton,disco]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "magnis dis parturient montes nascetur",
    "artist": "gthompson2i",
    "genre": "[danceedm,classical,metal,techno,dancehall]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "nec dui luctus rutrum nulla tellus in sagittis dui",
    "artist": "tbryant2j",
    "genre": "[disco,indie,latin,dancehall,world]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "erat vestibulum sed magna at nunc",
    "artist": "ccrawford2k",
    "genre": "[piano,electronic,deephouse,drumbass,alternativerock,reggae,dubstep]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "vestibulum proin eu mi nulla ac enim",
    "artist": "jrogers2l",
    "genre": "[disco,ambient,soundtrack,pop,danceedm]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "quis augue luctus tincidunt nulla",
    "artist": "pholmes2m",
    "genre": "[dubstep,ambient,indie,drumbass,alternativerock,electronic]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "bibendum felis sed interdum venenatis turpis",
    "artist": "rporter2n",
    "genre": "[latin,rock,classical,house,trance,danceedm]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "morbi a ipsum integer a nibh in",
    "artist": "cthomas2o",
    "genre": "[hiphoprap,trap,reggaeton,latin,dancehall]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "vestibulum sed magna at nunc commodo placerat praesent",
    "artist": "adaniels2p",
    "genre": "[latin,jazzblues,folksingersongwriter,latin,dubstep]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "lorem integer tincidunt ante vel ipsum praesent",
    "artist": "jrose2q",
    "genre": "[trap,reggae,dancehall,dancehall,reggae]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "condimentum id luctus nec molestie sed justo pellentesque viverra",
    "artist": "jgardner2r",
    "genre": "[drumbass,alternativerock,jazzblues,danceedm,soundtrack,techno]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "montes nascetur ridiculus mus etiam",
    "artist": "jramirez2s",
    "genre": "[dubstep,triphop,indie,triphop,jazzblues]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "quis libero nullam sit amet turpis elementum ligula",
    "artist": "jday2t",
    "genre": "[electronic,deephouse,world,rbsoul,dubstep,dubstep]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "nullam varius nulla facilisi cras",
    "artist": "jcunningham2u",
    "genre": "[latin,soundtrack,disco,indie,ambient]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "rutrum nulla tellus in sagittis dui",
    "artist": "kmorrison2v",
    "genre": "[triphop,house,trance,piano,world,soundtrack]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "semper sapien a libero nam dui proin leo odio",
    "artist": "mspencer2w",
    "genre": "[piano,metal,metal,reggae,jazzblues]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "sapien sapien non mi integer ac neque duis bibendum morbi",
    "artist": "sfrazier2x",
    "genre": "[dubstep,trap,world,latin,rock]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "sapien in sapien iaculis congue vivamus metus arcu",
    "artist": "wriley2y",
    "genre": "[pop,jazzblues,metal,pop,country]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "commodo vulputate justo in blandit ultrices",
    "artist": "lmedina2z",
    "genre": "[disco,house,trance,triphop,house,trance,rock]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "primis in faucibus orci luctus et ultrices",
    "artist": "dmills30",
    "genre": "[rock,rbsoul,trap,electronic,deephouse,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "adipiscing molestie hendrerit at vulputate vitae",
    "artist": "areed31",
    "genre": "[metal,house,trance,pop,classical,reggaeton]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sit amet justo morbi ut odio",
    "artist": "vporter32",
    "genre": "[dubstep,disco,piano,pop,drumbass]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "in faucibus orci luctus et ultrices posuere cubilia",
    "artist": "wsmith33",
    "genre": "[electronic,deephouse,world,jazzblues,dancehall,trap]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "nunc donec quis orci eget",
    "artist": "mbowman34",
    "genre": "[pop,dubstep,trap,soundtrack,latin]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "nulla tellus in sagittis dui vel nisl duis ac",
    "artist": "lgreen35",
    "genre": "[jazzblues,piano,electronic,deephouse,hiphoprap,reggae]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "elit proin interdum mauris non ligula",
    "artist": "mrichardson36",
    "genre": "[trap,folksingersongwriter,rock,ambient,jazzblues]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "aenean fermentum donec ut mauris eget",
    "artist": "jcrawford37",
    "genre": "[soundtrack,reggae,rock,indie,rock]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "proin at turpis a pede posuere nonummy integer",
    "artist": "kfisher38",
    "genre": "[disco,classical,reggae,dancehall,country]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "porttitor lacus at turpis donec",
    "artist": "dmarshall39",
    "genre": "[rock,piano,rock,dubstep,disco]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "sit amet eros suspendisse accumsan tortor",
    "artist": "lnguyen3a",
    "genre": "[triphop,drumbass,alternativerock,metal,metal,indie]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "pede ullamcorper augue a suscipit nulla elit",
    "artist": "abishop3b",
    "genre": "[piano,indie,dancehall,house,trance,electronic]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ipsum primis in faucibus orci",
    "artist": "jhart3c",
    "genre": "[disco,indie,dancehall,electronic,deephouse,disco]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "adipiscing elit proin risus praesent lectus",
    "artist": "areynolds3d",
    "genre": "[pop,reggae,rbsoul,reggaeton,metal]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "non sodales sed tincidunt eu felis",
    "artist": "dlewis3e",
    "genre": "[disco,drumbass,alternativerock,folksingersongwriter,disco,country]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "rutrum at lorem integer tincidunt ante",
    "artist": "jmorris3f",
    "genre": "[electronic,deephouse,jazzblues,rbsoul,triphop,classical]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "in purus eu magna vulputate luctus",
    "artist": "dstewart3g",
    "genre": "[jazzblues,piano,classical,indie,pop]"
},{
    "thumb": "data/songs/song-1.jpg",
    "title": "ligula pellentesque ultrices phasellus id",
    "artist": "ahayes0",
    "genre": "[metal,rock,dancehall,trap,world]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "at ipsum ac tellus semper",
    "artist": "dross1",
    "genre": "[reggae,trap,jazzblues,trap,rock]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "amet eleifend pede libero quis orci nullam molestie nibh in",
    "artist": "bphillips2",
    "genre": "[rbsoul,disco,indie,latin,reggae]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
    "artist": "sramos3",
    "genre": "[electronic,deephouse,metal,hiphoprap,hiphoprap,world]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "nulla tempus vivamus in felis eu",
    "artist": "sdean4",
    "genre": "[house,soundtrack,country,dancehall,jazzblues]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "felis ut at dolor quis odio consequat",
    "artist": "amyers5",
    "genre": "[pop,indie,rock,folksingersongwriter,danceedm]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
    "artist": "gaustin6",
    "genre": "[rbsoul,reggaeton,dubstep,electronic,deephouse,dubstep]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "nibh quisque id justo sit amet sapien",
    "artist": "jharper7",
    "genre": "[piano,dancehall,hiphoprap,house,trance,reggae]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "nulla dapibus dolor vel est donec",
    "artist": "amartinez8",
    "genre": "[reggaeton,rock,country,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "etiam vel augue vestibulum rutrum rutrum",
    "artist": "hallen9",
    "genre": "[ambient,piano,danceedm,reggaeton,dancehall]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "duis ac nibh fusce lacus purus aliquet at feugiat",
    "artist": "pcarrolla",
    "genre": "[drumbass,alternativerock,soundtrack,metal,dubstep,house]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum",
    "artist": "mharrisb",
    "genre": "[jazzblues,ambient,dubstep,reggaeton,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor",
    "artist": "rwoodsc",
    "genre": "[disco,house,trance,pop,reggae,piano]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "nisl duis ac nibh fusce lacus purus aliquet at",
    "artist": "spattersond",
    "genre": "[dubstep,metal,reggaeton,classical,jazzblues]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel",
    "artist": "afishere",
    "genre": "[dancehall,jazzblues,metal,house,trance,piano]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "fusce congue diam id ornare",
    "artist": "cwilsonf",
    "genre": "[disco,latin,classical,latin,triphop]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "augue vestibulum ante ipsum primis in faucibus orci",
    "artist": "rholmesg",
    "genre": "[world,reggaeton,classical,drumbass,alternativerock,indie]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "magna ac consequat metus sapien",
    "artist": "wfranklinh",
    "genre": "[indie,soundtrack,indie,rbsoul,rock]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "consequat morbi a ipsum integer a nibh in quis justo",
    "artist": "enguyeni",
    "genre": "[soundtrack,world,soundtrack,pop,dancehall]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "mauris lacinia sapien quis libero nullam sit amet turpis",
    "artist": "pandersonj",
    "genre": "[rbsoul,techno,dancehall,electronic,deephouse,pop]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ut blandit non interdum in ante vestibulum ante ipsum primis",
    "artist": "rgrahamk",
    "genre": "[electronic,deephouse,house,trance,drumbass,alternativerock,rock,trap]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "nibh in quis justo maecenas",
    "artist": "schapmanl",
    "genre": "[hiphoprap,drumbass,alternativerock,jazzblues,classical,classical]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "pede justo eu massa donec dapibus duis at velit",
    "artist": "ehawkinsm",
    "genre": "[classical,reggaeton,indie,ambient,indie]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "proin at turpis a pede",
    "artist": "pchavezn",
    "genre": "[reggae,trap,house,trance,triphop,metal]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "at velit vivamus vel nulla",
    "artist": "kstanleyo",
    "genre": "[latin,danceedm,dubstep,reggae,rock]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "cras pellentesque volutpat dui maecenas",
    "artist": "dgreenp",
    "genre": "[electronic,deephouse,drumbass,alternativerock,classical,dubstep,classical]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "eleifend luctus ultricies eu nibh quisque id justo",
    "artist": "jgilbertq",
    "genre": "[techno,dubstep,electronic,deephouse,piano,rock]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "et ultrices posuere cubilia curae nulla dapibus dolor",
    "artist": "mshawr",
    "genre": "[disco,soundtrack,dubstep,dancehall,danceedm]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "proin at turpis a pede posuere nonummy",
    "artist": "lperkinss",
    "genre": "[reggae,classical,dubstep,techno,house]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "ut mauris eget massa tempor convallis",
    "artist": "lmorgant",
    "genre": "[electronic,deephouse,ambient,ambient,triphop,latin]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "massa volutpat convallis morbi odio odio elementum eu",
    "artist": "aharrisu",
    "genre": "[trap,country,rock,piano,reggaeton]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "penatibus et magnis dis parturient montes nascetur ridiculus",
    "artist": "rryanv",
    "genre": "[reggae,techno,disco,hiphoprap,reggaeton]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
    "artist": "awatkinsw",
    "genre": "[danceedm,reggae,rbsoul,jazzblues,metal]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "leo pellentesque ultrices mattis odio donec vitae nisi",
    "artist": "pscottx",
    "genre": "[soundtrack,dancehall,rbsoul,folksingersongwriter,disco]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "sit amet sapien dignissim vestibulum vestibulum ante",
    "artist": "rkimy",
    "genre": "[world,soundtrack,world,triphop,reggaeton]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "primis in faucibus orci luctus et",
    "artist": "gsimsz",
    "genre": "[indie,techno,reggae,reggaeton,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "id justo sit amet sapien dignissim vestibulum",
    "artist": "jlawson10",
    "genre": "[indie,reggae,triphop,hiphoprap,jazzblues]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "vitae consectetuer eget rutrum at lorem",
    "artist": "mcruz11",
    "genre": "[reggae,world,pop,rock,world]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "faucibus cursus urna ut tellus nulla ut",
    "artist": "rmills12",
    "genre": "[folksingersongwriter,dancehall,folksingersongwriter,techno,dubstep]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "tempus semper est quam pharetra magna ac consequat metus sapien",
    "artist": "cjohnson13",
    "genre": "[country,indie,pop,dancehall,electronic]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "ac lobortis vel dapibus at",
    "artist": "pramirez14",
    "genre": "[electronic,deephouse,rbsoul,indie,country,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
    "artist": "creid15",
    "genre": "[soundtrack,country,dancehall,folksingersongwriter,world]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "duis consequat dui nec nisi volutpat eleifend donec",
    "artist": "jmills16",
    "genre": "[piano,jazzblues,dubstep,soundtrack,trap]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur",
    "artist": "awilson17",
    "genre": "[classical,drumbass,alternativerock,house,trance,folksingersongwriter,house]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "cursus urna ut tellus nulla ut",
    "artist": "adaniels18",
    "genre": "[pop,hiphoprap,world,drumbass,alternativerock,danceedm]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
    "artist": "nmarshall19",
    "genre": "[disco,trap,indie,latin,world]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "viverra pede ac diam cras pellentesque volutpat dui maecenas",
    "artist": "wfranklin1a",
    "genre": "[dancehall,classical,jazzblues,dubstep,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "amet erat nulla tempus vivamus in felis eu sapien",
    "artist": "bmorales1b",
    "genre": "[disco,dancehall,latin,latin,drumbass]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
    "artist": "csanchez1c",
    "genre": "[jazzblues,indie,latin,country,rbsoul]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "mauris laoreet ut rhoncus aliquet",
    "artist": "jthompson1d",
    "genre": "[electronic,deephouse,techno,drumbass,alternativerock,folksingersongwriter,indie]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "mus etiam vel augue vestibulum rutrum rutrum neque",
    "artist": "bmoore1e",
    "genre": "[hiphoprap,trap,indie,indie,jazzblues]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "congue etiam justo etiam pretium iaculis",
    "artist": "wstewart1f",
    "genre": "[disco,dubstep,indie,trap,dubstep]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "in consequat ut nulla sed accumsan felis",
    "artist": "cmartin1g",
    "genre": "[soundtrack,metal,house,trance,triphop,piano]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "augue aliquam erat volutpat in",
    "artist": "mray1h",
    "genre": "[reggaeton,electronic,deephouse,country,danceedm,electronic]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "convallis nulla neque libero convallis eget",
    "artist": "dlee1i",
    "genre": "[trap,dancehall,country,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "mauris non ligula pellentesque ultrices phasellus id sapien",
    "artist": "jalexander1j",
    "genre": "[country,danceedm,danceedm,world,rock]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
    "artist": "lhawkins1k",
    "genre": "[disco,techno,pop,metal,folksingersongwriter]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "tortor quis turpis sed ante vivamus tortor duis",
    "artist": "chudson1l",
    "genre": "[metal,triphop,trap,reggae,indie]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "ac neque duis bibendum morbi non",
    "artist": "moliver1m",
    "genre": "[latin,metal,techno,rock,classical]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "luctus rutrum nulla tellus in sagittis dui",
    "artist": "vkennedy1n",
    "genre": "[trap,pop,soundtrack,techno,metal]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sapien urna pretium nisl ut volutpat",
    "artist": "jvasquez1o",
    "genre": "[pop,drumbass,alternativerock,reggaeton,disco,metal]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "quam suspendisse potenti nullam porttitor lacus",
    "artist": "mcrawford1p",
    "genre": "[reggaeton,classical,house,trance,dancehall,ambient]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "artist": "alawson1q",
    "genre": "[trap,house,trance,dancehall,triphop,house]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "metus sapien ut nunc vestibulum ante ipsum",
    "artist": "aturner1r",
    "genre": "[dubstep,trap,dubstep,rock,disco]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "vivamus vestibulum sagittis sapien cum sociis natoque",
    "artist": "plee1s",
    "genre": "[world,reggae,house,trance,classical,latin]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "curae nulla dapibus dolor vel est donec",
    "artist": "jromero1t",
    "genre": "[country,piano,disco,dubstep,rock]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "integer aliquet massa id lobortis convallis tortor risus",
    "artist": "mbarnes1u",
    "genre": "[world,ambient,electronic,deephouse,piano,ambient]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "mattis egestas metus aenean fermentum donec ut mauris",
    "artist": "jmccoy1v",
    "genre": "[disco,soundtrack,disco,indie,drumbass]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "ac neque duis bibendum morbi non quam nec dui luctus",
    "artist": "hrogers1w",
    "genre": "[house,rock,reggaeton,folksingersongwriter,pop]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "praesent id massa id nisl venenatis lacinia aenean sit",
    "artist": "rclark1x",
    "genre": "[dancehall,rbsoul,dancehall,ambient,metal]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "et magnis dis parturient montes nascetur",
    "artist": "emoreno1y",
    "genre": "[techno,rock,danceedm,disco,metal]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "mauris morbi non lectus aliquam sit amet diam",
    "artist": "jporter1z",
    "genre": "[folksingersongwriter,hiphoprap,piano,rock,rock]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "fusce posuere felis sed lacus morbi sem mauris",
    "artist": "lcooper20",
    "genre": "[trap,rock,drumbass,alternativerock,triphop,latin]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "elementum ligula vehicula consequat morbi a ipsum integer a",
    "artist": "mburton21",
    "genre": "[indie,drumbass,alternativerock,metal,jazzblues,piano]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "fermentum donec ut mauris eget massa tempor convallis",
    "artist": "smurray22",
    "genre": "[rbsoul,hiphoprap,country,danceedm,reggae]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "a nibh in quis justo maecenas",
    "artist": "elane23",
    "genre": "[folksingersongwriter,piano,piano,country,trap]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "at turpis donec posuere metus vitae",
    "artist": "cmoreno24",
    "genre": "[drumbass,alternativerock,ambient,rbsoul,danceedm,latin]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "leo odio porttitor id consequat in consequat",
    "artist": "jhanson25",
    "genre": "[folksingersongwriter,disco,electronic,deephouse,latin,latin]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
    "artist": "pberry26",
    "genre": "[drumbass,alternativerock,drumbass,alternativerock,jazzblues,world,jazzblues]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "tellus nulla ut erat id mauris vulputate elementum nullam varius",
    "artist": "cgonzales27",
    "genre": "[pop,jazzblues,house,trance,hiphoprap,classical]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "primis in faucibus orci luctus",
    "artist": "akelly28",
    "genre": "[techno,country,indie,rock,dubstep]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "egestas metus aenean fermentum donec ut mauris eget massa tempor",
    "artist": "rford29",
    "genre": "[rbsoul,folksingersongwriter,rbsoul,jazzblues,reggaeton]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "pulvinar lobortis est phasellus sit amet erat nulla",
    "artist": "rwelch2a",
    "genre": "[electronic,deephouse,piano,rbsoul,ambient,hiphoprap]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "ac nibh fusce lacus purus aliquet at feugiat non pretium",
    "artist": "rmorris2b",
    "genre": "[pop,reggaeton,triphop,reggaeton,latin]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "massa id nisl venenatis lacinia",
    "artist": "elarson2c",
    "genre": "[disco,indie,ambient,rock,rbsoul]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
    "artist": "sduncan2d",
    "genre": "[dubstep,metal,hiphoprap,country,indie]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "arcu libero rutrum ac lobortis",
    "artist": "nfreeman2e",
    "genre": "[rbsoul,pop,metal,disco,pop]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "id sapien in sapien iaculis congue vivamus metus",
    "artist": "cfowler2f",
    "genre": "[world,piano,metal,danceedm,rbsoul]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "sapien varius ut blandit non",
    "artist": "sevans2g",
    "genre": "[techno,world,piano,reggaeton,soundtrack]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "pede lobortis ligula sit amet",
    "artist": "jhamilton2h",
    "genre": "[metal,reggae,electronic,deephouse,reggaeton,disco]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "magnis dis parturient montes nascetur",
    "artist": "gthompson2i",
    "genre": "[danceedm,classical,metal,techno,dancehall]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "nec dui luctus rutrum nulla tellus in sagittis dui",
    "artist": "tbryant2j",
    "genre": "[disco,indie,latin,dancehall,world]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "erat vestibulum sed magna at nunc",
    "artist": "ccrawford2k",
    "genre": "[piano,electronic,deephouse,drumbass,alternativerock,reggae,dubstep]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "vestibulum proin eu mi nulla ac enim",
    "artist": "jrogers2l",
    "genre": "[disco,ambient,soundtrack,pop,danceedm]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "quis augue luctus tincidunt nulla",
    "artist": "pholmes2m",
    "genre": "[dubstep,ambient,indie,drumbass,alternativerock,electronic]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "bibendum felis sed interdum venenatis turpis",
    "artist": "rporter2n",
    "genre": "[latin,rock,classical,house,trance,danceedm]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "morbi a ipsum integer a nibh in",
    "artist": "cthomas2o",
    "genre": "[hiphoprap,trap,reggaeton,latin,dancehall]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "vestibulum sed magna at nunc commodo placerat praesent",
    "artist": "adaniels2p",
    "genre": "[latin,jazzblues,folksingersongwriter,latin,dubstep]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "lorem integer tincidunt ante vel ipsum praesent",
    "artist": "jrose2q",
    "genre": "[trap,reggae,dancehall,dancehall,reggae]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "condimentum id luctus nec molestie sed justo pellentesque viverra",
    "artist": "jgardner2r",
    "genre": "[drumbass,alternativerock,jazzblues,danceedm,soundtrack,techno]"
}, {
    "thumb": "data/songs/song-1.jpg",
    "title": "montes nascetur ridiculus mus etiam",
    "artist": "jramirez2s",
    "genre": "[dubstep,triphop,indie,triphop,jazzblues]"
}, {
    "thumb": "data/songs/song-2.jpg",
    "title": "quis libero nullam sit amet turpis elementum ligula",
    "artist": "jday2t",
    "genre": "[electronic,deephouse,world,rbsoul,dubstep,dubstep]"
}, {
    "thumb": "data/songs/song-3.jpg",
    "title": "nullam varius nulla facilisi cras",
    "artist": "jcunningham2u",
    "genre": "[latin,soundtrack,disco,indie,ambient]"
}, {
    "thumb": "data/songs/song-4.jpg",
    "title": "rutrum nulla tellus in sagittis dui",
    "artist": "kmorrison2v",
    "genre": "[triphop,house,trance,piano,world,soundtrack]"
}, {
    "thumb": "data/songs/song-5.jpg",
    "title": "semper sapien a libero nam dui proin leo odio",
    "artist": "mspencer2w",
    "genre": "[piano,metal,metal,reggae,jazzblues]"
}, {
    "thumb": "data/songs/song-6.jpg",
    "title": "sapien sapien non mi integer ac neque duis bibendum morbi",
    "artist": "sfrazier2x",
    "genre": "[dubstep,trap,world,latin,rock]"
}, {
    "thumb": "data/songs/song-7.jpg",
    "title": "sapien in sapien iaculis congue vivamus metus arcu",
    "artist": "wriley2y",
    "genre": "[pop,jazzblues,metal,pop,country]"
}, {
    "thumb": "data/songs/song-8.jpg",
    "title": "commodo vulputate justo in blandit ultrices",
    "artist": "lmedina2z",
    "genre": "[disco,house,trance,triphop,house,trance,rock]"
}, {
    "thumb": "data/songs/song-9.jpg",
    "title": "primis in faucibus orci luctus et ultrices",
    "artist": "dmills30",
    "genre": "[rock,rbsoul,trap,electronic,deephouse,rbsoul]"
}, {
    "thumb": "data/songs/song-10.jpg",
    "title": "adipiscing molestie hendrerit at vulputate vitae",
    "artist": "areed31",
    "genre": "[metal,house,trance,pop,classical,reggaeton]"
}, {
    "thumb": "data/songs/song-11.jpg",
    "title": "sit amet justo morbi ut odio",
    "artist": "vporter32",
    "genre": "[dubstep,disco,piano,pop,drumbass]"
}, {
    "thumb": "data/songs/song-12.jpg",
    "title": "in faucibus orci luctus et ultrices posuere cubilia",
    "artist": "wsmith33",
    "genre": "[electronic,deephouse,world,jazzblues,dancehall,trap]"
}, {
    "thumb": "data/songs/song-13.jpg",
    "title": "nunc donec quis orci eget",
    "artist": "mbowman34",
    "genre": "[pop,dubstep,trap,soundtrack,latin]"
}, {
    "thumb": "data/songs/song-14.jpg",
    "title": "nulla tellus in sagittis dui vel nisl duis ac",
    "artist": "lgreen35",
    "genre": "[jazzblues,piano,electronic,deephouse,hiphoprap,reggae]"
}, {
    "thumb": "data/songs/song-15.jpg",
    "title": "elit proin interdum mauris non ligula",
    "artist": "mrichardson36",
    "genre": "[trap,folksingersongwriter,rock,ambient,jazzblues]"
}, {
    "thumb": "data/songs/song-16.jpg",
    "title": "aenean fermentum donec ut mauris eget",
    "artist": "jcrawford37",
    "genre": "[soundtrack,reggae,rock,indie,rock]"
}, {
    "thumb": "data/songs/song-17.jpg",
    "title": "proin at turpis a pede posuere nonummy integer",
    "artist": "kfisher38",
    "genre": "[disco,classical,reggae,dancehall,country]"
}, {
    "thumb": "data/songs/song-18.jpg",
    "title": "porttitor lacus at turpis donec",
    "artist": "dmarshall39",
    "genre": "[rock,piano,rock,dubstep,disco]"
}, {
    "thumb": "data/songs/song-19.jpg",
    "title": "sit amet eros suspendisse accumsan tortor",
    "artist": "lnguyen3a",
    "genre": "[triphop,drumbass,alternativerock,metal,metal,indie]"
}, {
    "thumb": "data/songs/song-20.jpg",
    "title": "pede ullamcorper augue a suscipit nulla elit",
    "artist": "abishop3b",
    "genre": "[piano,indie,dancehall,house,trance,electronic]"
}, {
    "thumb": "data/songs/song-21.jpg",
    "title": "ipsum primis in faucibus orci",
    "artist": "jhart3c",
    "genre": "[disco,indie,dancehall,electronic,deephouse,disco]"
}, {
    "thumb": "data/songs/song-22.jpg",
    "title": "adipiscing elit proin risus praesent lectus",
    "artist": "areynolds3d",
    "genre": "[pop,reggae,rbsoul,reggaeton,metal]"
}, {
    "thumb": "data/songs/song-23.jpg",
    "title": "non sodales sed tincidunt eu felis",
    "artist": "dlewis3e",
    "genre": "[disco,drumbass,alternativerock,folksingersongwriter,disco,country]"
}, {
    "thumb": "data/songs/song-24.jpg",
    "title": "rutrum at lorem integer tincidunt ante",
    "artist": "jmorris3f",
    "genre": "[electronic,deephouse,jazzblues,rbsoul,triphop,classical]"
}, {
    "thumb": "data/songs/song-25.jpg",
    "title": "in purus eu magna vulputate luctus",
    "artist": "dstewart3g",
    "genre": "[jazzblues,piano,classical,indie,pop]"
}];
 
	// create empty search model (object) to trigger $watch on update
	$scope.search = {};
 
	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};




 
	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 40; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
 	
	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
}]);