# Remote Patient Management System

The **Remote Patient Management System (RPMS)** is a web-based platform designed to manage and monitor patient health remotely. This system allows healthcare providers to monitor patient conditions, track vitals, schedule appointments, and communicate with patients from a distance. It is particularly useful for telemedicine, remote consultations, and managing chronic conditions where regular in-person visits are not feasible.

## Features

- **Patient Registration and Profile Management**: Secure and easy registration process for patients, with the ability to manage personal details and health records.
- **Remote Health Monitoring**: Track patient vitals like heart rate, blood pressure, temperature, and more using IoT devices or manual entry.
- **Appointment Scheduling**: Patients can schedule, reschedule, or cancel appointments with healthcare providers.
- **Telemedicine**: Secure video consultations between patients and doctors.
- **Health Record Management**: Doctors can upload and access patient health records, lab reports, prescriptions, and treatment plans.
- **Notifications and Reminders**: Automated notifications for upcoming appointments, medication reminders, and health tips.
- **Admin Panel**: An admin interface for managing users, doctors, appointments, and patient records.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React (or Vue/Angular)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or MySQL/PostgreSQL)
- **Authentication**: JWT (JSON Web Tokens) for secure login and authorization
- **Real-Time Communication**: WebRTC for video consultations, Socket.IO for live chat
- **Health Devices Integration (optional)**: API integrations with devices for real-time health data (e.g., Fitbit, Apple HealthKit)
- **Cloud Storage (optional)**: AWS S3 for storing patient reports and documents

## Prerequisites

1. **Node.js** and **npm** (or **Yarn**) installed on your system.
2. **MongoDB** (local or remote instance) or another database of your choice.
3. A **code editor** like Visual Studio Code.
4. A **Google Maps API Key** (if location services are used).

## Installation

### 1. Clone the Repository

Clone the project to your local machine.

### 2. Install Backend Dependencies

Install the necessary backend dependencies.

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Install the necessary frontend dependencies.

```bash
cd frontend
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the root of the project (both frontend and backend) and add the following:

#### Backend `.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/rpms
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_maps_api_key
```

#### Frontend `.env` (if needed):

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 5. Run the Application

#### Start the Backend Server:

```bash
cd backend
npm start
```

#### Start the Frontend:

```bash
cd frontend
npm start
```

Your application should now be running on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Usage

### For Patients:

1. **Sign Up/Login**: Patients can register an account and log in to access their dashboard.
2. **Create/Edit Profile**: Patients can enter personal details, medical history, and emergency contacts.
3. **Schedule Appointments**: Patients can browse available doctors and schedule an appointment.
4. **Remote Monitoring**: Track vitals like blood pressure, heart rate, etc. Patients can input data manually or sync with devices.
5. **Telemedicine**: Schedule and join live video consultations with healthcare providers.
6. **View Health Records**: View past medical history, prescriptions, and lab reports.

### For Healthcare Providers (Doctors):

1. **Sign Up/Login**: Doctors can register and log in to their accounts.
2. **Manage Appointments**: Doctors can view, accept, or reschedule patient appointments.
3. **Consultations**: Doctors can conduct video consultations with patients using the integrated WebRTC platform.
4. **Access Health Records**: Doctors can view patient records, make notes, prescribe medications, and upload reports.

### For Admin:

1. **Manage Users**: Admin can create, update, or delete patient and doctor accounts.
2. **Monitor Appointments**: Admin can monitor and manage scheduled appointments.
3. **View System Logs**: Admin can view system logs and manage overall settings.

## API Endpoints

### 1. User Authentication

- `POST /api/auth/signup`: Register a new user (patient/doctor).
- `POST /api/auth/login`: User login and JWT token generation.
- `GET /api/auth/logout`: Logout and invalidate JWT token.

### 2. Patient Management

- `GET /api/patient/:id`: Retrieve patient profile.
- `PUT /api/patient/:id`: Update patient profile.
- `POST /api/patient/vitals`: Record patient vitals (e.g., blood pressure, heart rate).

### 3. Appointment Management

- `GET /api/appointments`: List all appointments for a patient/doctor.
- `POST /api/appointments`: Schedule a new appointment.
- `PUT /api/appointments/:id`: Reschedule or update an existing appointment.
- `DELETE /api/appointments/:id`: Cancel an appointment.

### 4. Telemedicine

- `POST /api/telemedicine/start`: Start a video consultation.
- `GET /api/telemedicine/join/:id`: Join an ongoing consultation.

## Testing

To ensure everything is working correctly, you can test the following:

1. **User Registration/Login**: Test signing up as both a patient and doctor and logging in.
2. **Appointment Scheduling**: Test scheduling, rescheduling, and cancelling appointments.
3. **Health Record Entry**: Simulate entering health data such as vitals or medical history.
4. **Telemedicine**: Test the video consultation feature for real-time communication between doctors and patients.
5. **Admin Dashboard**: Test the admin's ability to manage users and appointments.

## Deployment

To deploy the application, you can use services like:

- **Frontend**: Deploy the React app on platforms like Vercel, Netlify, or AWS Amplify.
- **Backend**: Deploy the backend using services like Heroku, AWS EC2, or DigitalOcean.
- **Database**: Host MongoDB on a service like MongoDB Atlas, or use a local database.

## Contributing

We welcome contributions to improve this project! If you have suggestions, bug fixes, or new features, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
