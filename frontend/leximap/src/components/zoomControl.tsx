import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "../index.css";

type ZoomControlsType = {
  onZoomIn: () => void;
  onZoomOut: () => void;
};

// Styling in index.css

const ZoomControls = ({ onZoomIn, onZoomOut }: ZoomControlsType) => {
  const handleZoomIn = () => onZoomIn();

  const handleZoomOut = () => onZoomOut();

  return (
    <div className="zoom-controls">
      <button className="zoom-controls-button" onClick={handleZoomIn}>
        <ZoomInIcon fontSize="large" />
      </button>
      <button className="zoom-controls-button" onClick={handleZoomOut}>
        <ZoomOutIcon fontSize="large" />
      </button>
    </div>
  );
};

export default ZoomControls;
