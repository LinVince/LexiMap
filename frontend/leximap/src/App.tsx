import { DeckGL } from "@deck.gl/react";
import { useState } from "react";
import { MapView } from "@deck.gl/core";
import { createTextLayer } from "./components/textLayer";
import { INITIAL_VIEW_STATE, MAP_STYLE } from "./constants/view";
import { Map } from "react-map-gl/maplibre";
import MessageBox from "./components/messageBox";
import Drawer from "./components/drawer";
import ZoomControls from "./components/zoomControl";

function App() {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
  const [messageState, setMessageState] = useState<object>({});
  const [wordState, setWordState] = useState<string>("");
  const [messageBoxDisplayState, setMessageBoxDisplay] =
    useState<string>("none");

  // Click event of the map text label
  const handleClickEvent = (obj: any) => {
    const { text, longitude, latitude } = obj;
    setWordState(text);
    setViewState({
      ...viewState,
      longitude,
      latitude,
      zoom: 9,
      transitionDuration: 1000,
    });
  };

  // Limit the boundary of map navigation
  const handleViewStateChange = ({ viewState }: any): void => {
    const MIN_LATITUDE = -80;
    const MAX_LATITUDE = 80;
    const MIN_LONGITUDE = -180;
    const MAX_LONGITUDE = 180;

    setViewState({
      ...viewState,
      latitude: Math.min(
        Math.max(viewState.latitude, MIN_LATITUDE),
        MAX_LATITUDE
      ),
      longitude: Math.min(
        Math.max(viewState.longitude, MIN_LONGITUDE),
        MAX_LONGITUDE
      ),
    });
  };

  // Handle hover events of map text label
  const handleHoverState = (object: any) => {
    if (object && typeof object.text === "string") {
      setMessageState(object);
      setMessageBoxDisplay("");
    } else {
      setMessageState({});
      setMessageBoxDisplay("none");
    }
  };

  // Import the textLayer and apply text label events
  const textLayer = createTextLayer(
    handleClickEvent,
    viewState,
    handleHoverState
  );

  // Set the zoom handler
  const MIN_ZOOM = INITIAL_VIEW_STATE.minZoom;
  const MAX_ZOOM = INITIAL_VIEW_STATE.maxZoom;

  const handleZoomIn = () => {
    if (viewState.zoom >= MIN_ZOOM) {
      setViewState({
        ...viewState,
        zoom: viewState.zoom + 0.5,
        longitude: viewState.longitude + 0.005,
        transitionDuration: 1000,
      });
    }
  };
  const handleZoomOut = () => {
    if (viewState.zoom <= MAX_ZOOM) {
      setViewState({
        ...viewState,
        zoom: viewState.zoom - 0.5,
        longitude: viewState.longitude - 0.005,
        transitionDuration: 1000,
      });
    }
  };

  return (
    <>
      <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
      <DeckGL
        views={new MapView({ repeat: false })}
        layers={[textLayer]}
        initialViewState={viewState}
        onViewStateChange={handleViewStateChange}
        controller={{ touchRotate: true, dragRotate: true }}
        getCursor={({ isHovering }) => (isHovering ? "pointer" : "default")}
      >
        <Map reuseMaps mapStyle={MAP_STYLE} />
      </DeckGL>
      <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
      <MessageBox message={messageState} display={messageBoxDisplayState} />
      <Drawer wordState={wordState} />
    </>
  );
}

export default App;
