import { TextLayer } from "@deck.gl/layers";
import { CollisionFilterExtension } from "@deck.gl/extensions";
import {useDataFetcher} from "../services/DataFetch";

const DATA_URL = "http://localhost:8000/textlayer/api/vocab";
const fontSize = 32;
const noOverlap = true;

export function createTextLayer(changeViewState: any, viewState: any, handleHoverState: any, darkMode: boolean) {
    const scale = 2 ** viewState.zoom;
    const sizeMaxPixels = (scale / 3) * fontSize;
    const sizeMinPixels = Math.min(scale / 1000, 0.5) * fontSize;

    return new TextLayer({
        id: "Vocabulary",
        data: useDataFetcher(DATA_URL), 
        characterSet: "auto",
        fontSettings: {
            buffer: 8,
        },
        fontFamily: "Arial, Gill Sans Extrabold, sans-serif",
        fontWeight: "600",
        getPosition: (d) => [d.longitude, d.latitude],
        getText: (d) => d.text,
        getColor: darkMode? [255, 255, 255] : [0, 0, 0],
        getSize: 16,
        sizeMaxPixels,
        sizeMinPixels,
        maxWidth: 64 * 12,
        collisionEnabled: noOverlap, 
        getCollisionPriority: 10,
        collisionTestProps: {
            sizeScale: 5,
            sizeMaxPixels: sizeMaxPixels * 10,
            sizeMinPixels: sizeMinPixels * 10,
        },
        extensions: [new CollisionFilterExtension()],
        interactive: true,
        pickable: true,
        onClick: (info) => {
            changeViewState(info.object);
        },
        onHover: (info) => {
            handleHoverState(info.object)
        }
        
    });
}
