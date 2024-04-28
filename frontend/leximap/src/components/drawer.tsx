import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import "../index.css";
import { useDataFetcher } from "../services/DataFetch";
import Typewriter from "./typewriter";
import ResizeButton from "./resizeButton";

// I set style in css to prevent inteference of map interaction
// Fetch prompt data from the backend
const DATA_URL = "http://localhost:8000/textlayer/api/prompt";

const Drawer = ({ wordState }: any) => {
  // Set prompt and response state
  const [openaiResponse, setResponse] = useState<any>(null);

  // Fetch prompt options through API
  const prompts: Array<{ text: string }> | null = useDataFetcher(DATA_URL);
  const [width, setWidth] = useState<number>(300);

  // Use openai service to render response on the drawer
  const handleClick = async (prompt: any) => {
    const openAiApiURL = "http://localhost:8000/textlayer/api/openai";
    const headers = {
      "Content-Type": "application/json",
    };
    const options: any = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        prompt: `${prompt} of the word ${wordState}`,
      }),
    };
    try {
      const response = await fetch(openAiApiURL, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setResponse(jsonData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // Clear the openaiResponse when wordState changes
  useEffect(() => {
    setResponse(null);
  }, [wordState]);

  // Define the resizable function

  return (
    <>
      <SwipeableDrawer
        open={true}
        onClose={() => {}}
        onOpen={() => {}}
        PaperProps={{ sx: { backgroundColor: "black" } }}
        hideBackdrop
      >
        <Box
          sx={{
            width: { width },
            backgroundColor: "#000", // Background color
            color: "#a5a5a5",
            padding: "10px", // Padding inside the box
          }}
        >
          {wordState && prompts && (
            <>
              <h2>{wordState}</h2>
              {prompts.map((d, index) => (
                <Button
                  onClick={() => handleClick(d.text)}
                  variant="outlined"
                  key={index}
                  style={{ margin: "0px 5px 10px 5px" }}
                >
                  {d.text}
                </Button>
              ))}
            </>
          )}
          {(!wordState || !prompts) && (
            <p>
              Click (not just hover) the word on the map for more information
            </p>
          )}
        </Box>

        <Box
          sx={{
            width: { width },
            backgroundColor: "#000", // Background color
            color: "#a5a5a5",
            padding: "10px", // Padding inside the box
            overflowY: "auto",
          }}
        >
          {openaiResponse && openaiResponse.response && (
            <Typewriter text={openaiResponse.response} delay={5} />
          )}
        </Box>
        <ResizeButton target={width} setTarget={setWidth} min={300} max={700} />
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
