function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = Object.assign(document.createElement("script"), {
            type: "text/javascript",
            async: true,
            src: src,
        });
        script.addEventListener("load", resolve);
        script.addEventListener("error", reject);
        document.body.appendChild(script);
    });
}

await loadScript(
    "https://cesium.com/downloads/cesiumjs/releases/1.103/Build/Cesium/Cesium.js"
);

export function render(view) {
    // Header
    let center = view.model.get("center");
    let altitude = view.model.get("altitude");

    let width = view.model.get("width");
    let height = view.model.get("height");

    let timeline = view.model.get('timeline');
    // let animation = view.model.get('animation');
    // let baseLayerPicker = view.model.get('base_layer_picker');
    // let geocoder = view.model.get('geocoder');
    // let homeButton = view.model.get('home_button');
    // let infoBox = view.model.get('infobox');
    // let sceneModePicker = view.model.get('scene_mode_picker');
    // let selectionIndicator = view.model.get('selection_indicator');
    // let navigationHelpButton = view.model.get('navigation_help_button');
    // let navigationInstructionsInitiallyVisible = view.model.get('navigation_instructions_initially_visible');
    // let scene3DOnly = view.model.get('scene_3D_only');
    // let sceneMode_name = view.model.get('scene_mode');


    const div = document.createElement("div");
    div.style.width = width;
    div.style.height = height;

    Cesium.Ion.defaultAccessToken = view.model.get("token");

    // Map content
    const viewer = new Cesium.Viewer(div, {
        terrainProvider: Cesium.createWorldTerrain(),
    });

    //const buildingTileset = viewer.scene.primitives.add(
    //    Cesium.createOsmBuildings()
    //);

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
            center[1],
            center[0],
            altitude
        ),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        },
    });

    viewer.camera.moveEnd.addEventListener(function () {
        var cameraPosition = viewer.camera.position;
        var center =
            Cesium.Ellipsoid.WGS84.cartesianToCartographic(cameraPosition);
        var lon = Cesium.Math.toDegrees(center.longitude);
        var lat = Cesium.Math.toDegrees(center.latitude);
        var height = viewer.camera.positionCartographic.height;
        var zoomLevel = 18 - Math.log2(height);
        view.model.set("center", [lat, lon]);
        view.model.set("zoom", zoomLevel);
        view.model.save_changes();
    });

    // Footer
    view.el.appendChild(div);
}
