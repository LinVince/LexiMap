import { Box } from "@mui/material";

/*Expected Props: When you pass props to the MessageBox component, such as in <MessageBox myGod="hei" msg="hei" />, those props will be combined into a single object { myGod: "hei", msg: "hei" } and passed to the component.*/

const MessageBox = ({ message, display }: any) => {
  return (
    <Box
      sx={{
        display: display,
        width: "300px",
        position: "absolute", // Positioning the box
        top: "20px", // Top padding
        right: "20px", // Right padding
        backgroundColor: "#000", // Background color
        color: "#a5a5a5",
        border: "1px solid #555", // Border
        padding: "10px", // Padding inside the box
        borderRadius: "10px", // Rounded corners
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Shadow effect
        zIndex: 1000, // Make sure the box is on top of other elements
      }}
    >
      <p>{message.text}</p>
      <p>{message.origin}</p>
      <p>{message.definition}</p>
    </Box>
  );
};

export default MessageBox;
