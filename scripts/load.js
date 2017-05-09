loader
  .add([
      "assets/img/cat.png",
      "assets/img/blob.png",
      "assets/img/explorer.png"
  ])
  .on("progress", loadProgressHandler)
  .load(setup);

function loadProgressHandler(loader, resource) {
    //Display the file 'url' loaded
    console.log("loading " + resource.url);

    console.log("progress: " + loader.progress + "%");
}

// 'Setup' function will run when the image has loaded
function setup() {

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
