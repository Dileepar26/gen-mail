# Gen-Mail

Gen-Mail is a web application that allows users to generate email bodies using AI prompts and send them to specified recipients. The project is divided into two parts: a frontend built with React and a backend built with Node.js and Express.

---

## 🌐 deployed URL & documentation URL
frontend: [https://gen-mail-frontend.vercel.app](https://gen-mail-frontend.vercel.app).
backend: [https://gen-mail-backend.onrender.com](https://gen-mail-backend.onrender.com).
API documentation: [https://documenter.getpostman.com/view/25258547/2sAYJ9AJmJ](https://documenter.getpostman.com/view/25258547/2sAYJ9AJmJ).

---


## 🚀 Features
- Generate email content using AI with a custom prompt.
- Preview the generated email body before sending.
- Send emails to any recipient using a configured SMTP service.

---

## 🔧️ Technologies Used
### Frontend:
- React.js
- Axios for API calls
- CSS for styling

### Backend:
- Node.js
- Express.js
- Nodemailer for sending emails
- groq-sdk for AI email generation
- dotenv for environment variable management

---

## 📂 Project Structure
```
project-root/
├── backend/             # Backend code
│   ├── app.js           # Backend entry point
│   ├── src/
│   │   ├── controllers/ # Contains API logic
│   │   ├── routes/      # Route definitions
│   │   ├── lib/         # lib definitions
│   ├── package.json     # Backend dependencies
│   ├── .env             # env
├── frontend/            # Frontend code
│   ├── src/             # React source code
│   ├── public/          # Static files
│   ├── build/           # Production build files
│   ├── package.json     # Frontend dependencies
│   ├── .env             # env
├── README.md            # Documentation
```

---

## 🔧 Setup Instructions
### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- A configured SMTP service (e.g., Gmail, Mailtrap)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Dileepar26/gen-mail.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gen-mail
   ```

3. Set up environment variables:
   Create `.env` files in both `backend` and `frontend` directories with appropriate variables.

   Example `.env` for Backend:
   ```plaintext
   EMAIL_USERNAME=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   PORT=5000
   GROQ_API_KEY=groq api key
   ```

   Example `.env` for Frontend:
   ```plaintext
   REACT_APP_API_URL= backend url (http://localhost:5000)
   ```

4. Install dependencies:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

5. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

