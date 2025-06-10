# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

   - Press a │ open Android
   - Press i │ open iOS simulator
   - Press w │ open web
   - Press j │ open debugger

3. If you face any issue in running the app , follow the expo documentation : [link to documentation.](https://docs.expo.dev/get-started/start-developing/)

4. Tech Stack used

   - React Native (Expo)
   - Expo Notifications
   - Redux Toolkit for state management
   - React Native Modal (for onscreen form)
   - AsyncStorage to persist tasks locally
   - React Native Paper
   - Styled Components

5. Project Features

   - Users will be able to add a new task (title, description, priority).
   - Notification triggered when new task is added.
   - Users will be able to view a list of tasks.
   - Users will be able to edit a task.
   - Users will be able to delete a task.
   - Users will be able to mark a task as completed.
   - Used Redux for state management.
   - Used Async-Storage for persisting data

6. Project Approach

   - Create a button that opens a modal containing form with desired input fields
   - Create required form and store data in useState hook.
   - Implement redux toolkit with async storage for persited data and store usage.
   - Store data in async storage with user submits the form.
   - handle case such that all fields are required befour submitting, also attach a key prop to uniquely identify a perticular task
   - Use Flatlist to render the list of task on UI.
   - Provide a checkbox to mark a task as completed.
   - use menu from react-native-paper to provide delete and edit options
   - onEdit , open the same form used to create the task but prefill it with the desired values.
   - onEdit update the list, matching the edited task using the key prop (uniquely identified).
   - Similarly perform Delete action.

7. Demo Video of project

   👉 Android Project Video :  [Click to view](assets/video/todo-android.webm)

   👉 iOS Project Video :  [Click to view](assets/video/todo-ios.mp4)
