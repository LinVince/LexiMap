import { Box } from "@mui/material";

/*Expected Props: When you pass props to the MessageBox component, such as in <MessageBox myGod="hei" msg="hei" />, those props will be combined into a single object { myGod: "hei", msg: "hei" } and passed to the component.*/

const MessageBox = ({ message, display, dark }: any) => {
  // Checked the dark mode
  const Color = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <Box
      sx={{
        display: display,
        width: "300px",
        position: "absolute", // Positioning the box
        top: "60px", // Top padding
        right: "20px", // Right padding
        border: "1px solid #555", // Border
        padding: "10px", // Padding inside the box
        borderRadius: "10px", // Rounded corners
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Shadow effect
        zIndex: "1000", // Make sure the box is on top of other elements
        ...Color,
      }}
    >
      <p>{message.text}</p>
      <p>{message.origin}</p>
      <p>{message.definition}</p>
    </Box>
  );
};

export default MessageBox;
