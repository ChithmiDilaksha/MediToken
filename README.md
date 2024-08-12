# MediToken - Hospital Queue Management System
Higher Diploma in Software Engineering at NIBM

Programming Data structure module project

This project is a Hospital Queue Management System that allows for the management of patient records through a web interface. It uses JavaScript for client-side functionality and local storage (cookies) to maintain the queue state across page reloads. 

## Features

- **Patient Management:** Add new patients with details such as name, age, address, and email.
- **Queue Management:** View and manage the queue of patients, with the ability to remove patients from the queue.
- **Persistent Storage:** Patient data is stored in cookies to persist state across page reloads.
- **Responsive Design:** Utilizes TailwindCSS for styling and layout, ensuring a responsive and user-friendly interface.
- **Email Integration:** Uses EmailJS to send emails directly from the web application.

## Technologies Used

- **HTML:** Structure of web pages.
- **CSS:** TailwindCSS for styling.
- **JavaScript:** Handles dynamic content loading, patient management, and interaction.
- **Cookies:** Used for persisting patient queue data.
- **EmailJS:** Service for sending emails directly from the client-side JavaScript.

## File Structure

- **`index.html`:** Main entry point that includes the content and loads necessary JavaScript files.
- **`HTML/Manage.html`:** HTML file for managing patients (adding new patients).
- **`HTML/Display.html`:** HTML file for displaying the current queue of patients.
- **`JS/Patient.js`:** JavaScript class defining the Patient object.
- **`JS/LoadManage.js`:** JavaScript file responsible for handling page loading and patient management logic.
- **`JS/email.js:`** avaScript file for EmailJS integration

# JavaScript Classes

- **`Patient`:** Represents a patient with properties like name, age, address, and email.
- **`Node`:** A node in a linked list that holds a patient and a reference to the next node.
- **`Hospital`:** Manages a linked list of patients, including adding, removing, displaying patients, and saving/loading state to/from cookies.

## Usage

1. **Add Patients:** Fill out the form in the Manage page and submit to add patients to the queue.
2. **View Patients:** Click on the display button to view the current list of patients in the queue.
3. **Remove Patients:** Use the remove button next to each patient's details to delete them from the queue.
4. **Send Emails:** Use the integrated email functionality to send notifications or other emails as needed.

## How to Run

To run the project locally, you can use the Live Server extension in Visual Studio Code:

**`Install Visual Studio`** Code (VS Code):
Download and install VS Code from here.

**`Open the Project`**:
Open VS Code and use the File > Open Folder menu option to open the folder containing this project.

**`Install Live Server Extension:`**
Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or press Ctrl+Shift+X.
Search for "Live Server" and click the Install button on the Live Server extension by Ritwick Dey.

**`Run Live Server:`**
After installing, right-click on index.html in the Explorer sidebar and select Open with Live Server.
Alternatively, click the Go Live button in the status bar at the bottom right of the VS Code window.

**`View the Application:`**
Your default web browser will open and display the application. Changes made to the files will be automatically reflected in the browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the details according to your project’s specifics or preferences.

## outputs
![Screenshot (94)](https://github.com/user-attachments/assets/9c7cf69e-5914-4db0-b840-6cab9d74051b)
![Screenshot (96)](https://github.com/user-attachments/assets/772d37c3-3c58-4790-a846-4d002ab9cb15)


