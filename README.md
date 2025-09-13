# SQL Testing Project with Firebase Data Connect

This project is set up for testing SQL queries using Firebase Data Connect (formerly Firebase Studio).

## Setup Instructions

1. **Install Firebase CLI**:
   ```
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```
   firebase login
   ```

3. **Initialize Firebase Project**:
   ```
   firebase init dataconnect
   ```
   Follow the prompts to select your project and set up Data Connect.

4. **Define Schema**:
   Edit `schema/schema.sql` to define your database schema.

5. **Add Queries**:
   Place your SQL queries in the `queries/` folder.

6. **Deploy**:
   ```
   firebase deploy --only dataconnect
   ```

## Project Structure

- `schema/`: Contains database schema files.
- `queries/`: Contains sample SQL queries.
- `rules/`: Contains security rules.

## Usage

Use Firebase Studio (Data Connect) to manage your database and run queries.
