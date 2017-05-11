

loader
  .add([
      "assets/img/sprites.json"
  ])
  .on("progress", loadProgressHandler)
  .load(setupSpriteSheet);

function loadProgressHandler(loader, resource) {
    //Display the file 'url' loaded
    console.log("loading " + resource.url);

    console.log("progress: " + loader.progress + "%");
}

// 'Setup' function will run when the image has loaded
/*function setup() {

    var cat = new Sprite(
        resources["assets/img/cat.png"].texture
    );

    cat.x = 96;
    cat.y = 96;

    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;

    cat.rotation = .5;


    stage.addChild(cat);
    renderer.render(stage);
}
*/

var dungeon, explorer, treasure, door, id;

function setupSpriteSheet() {
    
    var dungeonTexture = TextureCache["dungeon.png"];
    dungeon = new Sprite(dungeonTexture);
    stage.addChild(dungeon);

    //Loading ID
    var id = resources["assets/img/sprites.json"].textures;
    
    explorer = new Sprite(id["explorer.png"]);
    explorer.x = 68;
    explorer.y = stage.height / 2 - explorer.height / 2;
    stage.addChild(explorer);

    treasure = new Sprite(id["treasure.png"]);
    treasure.x = stage.width - treasure.width - 48;
    treasure.y = stage.height / 2 - treasure.height / 2;
    stage.addChild(treasure);

    door = new Sprite(id["door.png"]);
    door.position.set(32,0);

    var numOfBlobs = 6,
        spacing = 48,
        xOffset = 150;

    for (var i = 0; i < numOfBlobs; i++) {

        var blob = new Sprite(id["blob.png"]);

        var x = spacing * i + xOffset;
        var y = randomInt(0, stage.height - blob.height);

        blob.position.set(x,y);

        stage.addChild(blob);
    }

    renderer.render(stage);
}