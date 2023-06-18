import os
import pathlib
import anywidget
import traitlets


class Map(anywidget.AnyWidget):
    """Map widget

    Args:
        anywidget (_type_): _description_
    """

    _cwd = os.path.dirname(os.path.abspath(__file__))
    _esm = pathlib.Path(os.path.join(_cwd, 'javascript', 'cesium.js'))
    _css = pathlib.Path(os.path.join(_cwd, 'styles', 'cesium.css'))
    default_token = os.environ.get('CESIUM_TOKEN')
    token = traitlets.Unicode(default_token).tag(sync=True)
    center = traitlets.List([40, -100]).tag(sync=True, o=True)
    zoom = traitlets.Float(4).tag(sync=True, o=True)
    bounds = traitlets.List([0, 0, 0, 0]).tag(sync=True, o=True)
    width = traitlets.Unicode('100%').tag(sync=True, o=True)
    height = traitlets.Unicode('600px').tag(sync=True, o=True)
    clicked_latlng = traitlets.List([None, None]).tag(sync=True, o=True)
    altitude = traitlets.Float(0).tag(sync=True, o=True)

    # czml = traitlets.Tuple().tag(sync=True, o=True)
    # kml_url = traitlets.Unicode().tag(sync=True, o=True)
    # geojson = traitlets.Unicode().tag(sync=True, o=True)
    # animation = traitlets.Bool(True).tag(sync=True, o=True)
    # base_layer_picker = traitlets.Bool(True).tag(sync=True, o=True)
    # geocoder = traitlets.Bool(True).tag(sync=True, o=True)
    # home_button = traitlets.Bool(True).tag(sync=True, o=True)
    # infobox = traitlets.Bool(True).tag(sync=True, o=True)
    # scene_mode_picker = traitlets.Bool(True).tag(sync=True, o=True)
    # selection_indicator = traitlets.Bool(True).tag(sync=True, o=True)
        
    timeline = traitlets.Bool(True).tag(sync=True, o=True)
    # navigation_help_button = traitlets.Bool(True).tag(sync=True, o=True)
    # navigation_instructions_initially_visible = traitlets.Bool(False).tag(sync=True, o=True)
    # scene_3D_only = traitlets.Bool(False).tag(sync=True, o=True)
    # scene_mode = traitlets.CaselessStrEnum(['COLUMBUS_VIEW', 'SCENE2D', 'SCENE3D'],
    #                              default_value='SCENE3D',
    #                              allow_none=False).tag(sync=True, o=True)
    # enable_lighting = traitlets.Bool(False).tag(sync=True, o=True)