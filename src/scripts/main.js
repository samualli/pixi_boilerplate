function main_createMap(form){
    const width = form.width.value,
          height = form.height.value,
          tile_size = form.tile_size.value;

    console.log(width + ' ' + height + ' ' + tile_size);
    return false;
}

//Create the renderer
var renderer = autoDetectRenderer(512, 512);

//Add the canvas to the HTML document
//document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new Container();

//Init SpriteUtilities
var u = new SpriteUtilities(PIXI);
