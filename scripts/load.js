

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

var dungeon, explorer, treasure, door, id, state;

function setupSpriteSheet() {

    //Loading ID
    var id = resources["assets/img/sprites.json"].textures;

    //Dungeon
    var dungeonTexture = TextureCache["dungeon.png"];
    dungeon = new Sprite(dungeonTexture);
    stage.addChild(dungeon);
    
    //Explorer 

    explorer = new Sprite(id["explorer.png"]);
    explorer.x = 68;
    explorer.vx = 0;
    explorer.vy = 0;
    explorer.y = stage.height / 2 - explorer.height / 2;
    stage.addChild(explorer);

    //Treasure
    treasure = new Sprite(id["treasure.png"]);
    treasure.x = stage.width - treasure.width - 48;
    treasure.y = stage.height / 2 - treasure.height / 2;
    stage.addChild(treasure);

    //Door
    door = new Sprite(id["door.png"]);
    door.position.set(32,0);

    //Blob
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

    // Set keys
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = function() {
        //Change the cat's velocity when the key is pressed
        explorer.vx = -5;
        explorer.vy = 0;
    };
    //Left arrow key `release` method
    left.release = function() {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the explorer isn't moving vertically:
        //Stop the explorer
        if (!right.isDown && explorer.vy === 0) {
        explorer.vx = 0;
        }
    };

    //Up
    up.press = function() {
        explorer.vy = -5;
        explorer.vx = 0;
    };
    up.release = function() {
        if (!down.isDown && explorer.vx === 0) {
        explorer.vy = 0;
        }
    };

    //Right
    right.press = function() {
        explorer.vx = 5;
        explorer.vy = 0;
    };
    right.release = function() {
        if (!left.isDown && explorer.vy === 0) {
        explorer.vx = 0;
        }
    };

    //Down
    down.press = function() {
        explorer.vy = 5;
        explorer.vx = 0;
    };
    down.release = function() {
        if (!up.isDown && explorer.vx === 0) {
        explorer.vy = 0;
        }
    };

    //Set the game state
    state = play;

    //Start gameLoop();    
    gameLoop();    
}

function gameLoop() {
    requestAnimationFrame(gameLoop);

    state();

    renderer.render(stage);
}

function play() {

    explorer.x += explorer.vx;
    explorer.y += explorer.vy;
}