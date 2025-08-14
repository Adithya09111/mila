# Milatronics Backend

This is a Node.js backend project using Express. It includes dotenv for environment variables and nodemon for development.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file in the root directory and add your environment variables (see `.env.example`).
3. Start the development server:
   ```sh
   npm run dev
   ```
4. To run in production mode:
   ```sh
   npm start
   ```

## Project Structure

- `src/` - Source code
  - `routes/` - Express route definitions
  - `controllers/` - Route handler logic
  - `models/` - Data models (if needed)
  - `config/` - Configuration files
- `.env.example` - Example environment variables

## Scripts
- `npm run dev` - Start server with nodemon
- `npm start` - Start server normally

## Example Route
Visit `http://localhost:3000/api/hello` to test the sample route.
