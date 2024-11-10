# Event Invitation Creator

## Overview
The Event Invitation Creator project allows users to create a digital invitation for events. Users can input details like the event name, date, start time, end time, description, and location. Once submitted, the details are displayed in a styled invitation card on the page. The project demonstrates the use of form handling, validation, dynamic DOM manipulation, and CSS styling.

## Features
- User Form Input: Collects event details including name, date, start time, end time, description, and location.
- Event Validation: Ensures that all fields are filled before the event can be submitted.
- Dynamic Event Card: Once submitted, the event details are displayed in a styled invitation card.
- Styled Components: The form and event card are styled using CSS with focus on modern design elements like gradients, shadows, and rounded corners.
- Local Storage: Stores event data in local storage to persist events after page refreshes.

## Technologies Used
- HTML: Structure and form elements.
- CSS: Styling for the page, form, inputs, and event card.
- JavaScript: Form validation, event handling, and dynamic DOM manipulation.

## Installation & Usage
To run the project locally on your computer:

1. Clone the repository: 
git clone https://github.com/Nasrin3868/event-invitation-creator-project-fathima-nasrin.git

2. Navigate to the project directory:
cd event-invitation-creator

3. Open the index.html file in your web browser to view and interact with the application.

## HowItWorks
1. Form Submission:
The user fills out the event details and clicks the "Create Event" button.
The form is validated to ensure all fields are filled. If not, an error message is shown.
Upon successful validation, the event data is stored in local storage and a new event card is generated.

2. Displaying Event Cards:
When the form is submitted, an event card is dynamically added to the page with the provided details.
The event cards are displayed in a user-friendly format, showing the event's name, date, start and end times, description, and location.

3. Persistence with Local Storage:
Event details are saved to local storage, so even if the page is refreshed, the tasks remain visible.

## Contributing
If you'd like to contribute to this project, follow these steps:

1. Fork the repository by clicking the "Fork" button on GitHub.

2. Clone your fork to your local machine:
git clone https://github.com/Nasrin3868/event-invitation-creator-project-fathima-nasrin.git

3. Create a new branch for your changes:
git checkout -b feature-name

4. Commit your changes:
git commit -m "Add feature"

5. Push to your branch:
git push origin feature-name

6. Open a Pull Request from your forked repository to the original repository.