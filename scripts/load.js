loader
  .add([
      "assets/img/tileset.png"
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

function setupSpriteSheet() {
    var texture = TextureCache["assets/img/tileset.png"];

    var rectangle = new Rectangle(192, 128, 64, 64);

    texture.frame = rectangle;

    var rocket = new Sprite(texture);

    rocket.x = 32;
    rocket.y = 32;

    stage.addChild(rocket);

    renderer.render(stage);
}