# LexiMap - Origin
![Demo](https://github.com/LinVince/LexiMap/assets/38820721/a3e50e33-78c4-41f9-8014-77603c1435b6)

LexiMap is the integration of Generative AI and the navigation system applied in English words that originate from different corners of the world. The words that originate from different continents are assigned with respective coordinates. You can interact with these words on the map, sending prompts to OpenAI to ask for other information about the word.
In the Django admin system, you can 
- Add prompts
- Add words

Before using the Generative AI, remember to register an OpenAI API key and store it in the json file in the 'file' directory. 

## Reusable Frontend Components (React, tsx)

This project includes several reusable components that can be integrated into various parts of your application. Below is a list of the reusable components along with their parameters and descriptions.

### 1. Drawer

The `Drawer` component accepts the following parameters:

- **`wordState`**: A variable representing the state of the word or content to be displayed in the drawer.

### 2. MessageBox

The `MessageBox` component accepts the following parameters:

- **`message`**: The message or content to be displayed in the message box.
- **`display`**: A flag that controls whether the message box should be displayed or not.

### 3. ResizeButton

The `ResizeButton` component accepts the following parameters:

- **`target`**: The current width state of the element being resized.
- **`setTarget`**: The state updater function to adjust the width state.
- **`min`**: The minimum allowable width for resizing.
- **`max`**: The maximum allowable width for resizing.

### 4. TextLayer

The `createTextLayer` function accepts the following parameters:

- **`changeViewState`**: A function to handle changes in view state.
- **`viewState`**: The current view state to be managed.
- **`handleHoverState`**: A function to handle changes in hover state.

### 5. Typewriter

The `Typewriter` component accepts the following parameters:

- **`text`**: The text to be displayed with a typewriter effect.
- **`delay`**: The delay (in milliseconds) between each character's appearance.

### 6. ZoomControls

The `ZoomControls` component accepts the following parameters:

- **`onZoomIn`**: A function to handle zooming in.
- **`onZoomOut`**: A function to handle zooming out.

These reusable components are designed to enhance the functionality and flexibility of your application. By integrating them as needed, you can streamline development and improve user interaction.
