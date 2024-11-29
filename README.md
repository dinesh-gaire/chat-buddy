# 💬 ChatBuddy

**ChatBuddy** is a sleek, real-time chat application built with React Native and powered by Firebase. The app allows users to sign in, chat with friends, and enjoy a seamless experience on iOS, Android, and the web. Built using Expo, Firebase Authentication, and Firebase Cloud Messaging, ChatBuddy provides a fast, responsive, and engaging chat experience.

## 🚀 Features

- **Firebase Authentication**: Easy sign-in and sign-up process
- **Real-time Chat**: Instant messaging with Firebase Cloud Messaging
- **Responsive Design**: Beautiful UI powered by TailwindCSS (Nativewind)
- **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- **Lottie Animations**: Fun animations to enhance user experience
- **Image Caching**: Optimized image loading for faster performance

## 🛠️ Technologies Used

- **React Native**: A framework for building native apps using JavaScript and React
- **Expo**: A powerful toolchain to build cross-platform apps with React Native
- **Firebase**: For user authentication and real-time messaging
- **TailwindCSS (Nativewind)**: Utility-first CSS for rapid UI development
- **Lottie**: Animations that bring your app to life
- **React Navigation**: For smooth, declarative navigation

## ⚡ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/dinesh-gaire/chat-buddy.git
cd chat-buddy
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed, then run:

```bash
npm install
```

### 3. Set up Firebase

- Create a Firebase project in the Firebase Console
- Set up **Firebase Authentication** and **Firebase Cloud Messaging**
- Copy the `.env.example` file and create a `.env` file with your Firebase credentials:

```bash
cp .env.example .env
```

Add your Firebase configuration to the `.env` file:

```env
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN_URL=your-auth-domain
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET_URL=your-storage-bucket
FIREBASE_MESSAGE_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
```

### 4. Run the App

#### Run on Android/iOS/Web using Expo CLI

First, start the development server:

```bash
npm start
```

This will open a QR code in your terminal or browser. Scan the QR code using the **Expo Go** app on your Android/iOS device (make sure your mobile phone and laptop are connected to the same Wi-Fi network).

#### Platform-Specific Runs

- **Android**:
  ```bash
  npm run android
  ```

- **iOS**:
  ```bash
  npm run ios
  ```

- **Web**:
  ```bash
  npm run web
  ```

## 📱 Usage

1. **Sign up** or **Sign in** using Firebase Authentication
2. Start chatting with other users in real-time
3. Enjoy the smooth, responsive interface across devices

## 🤝 Contributing

We welcome contributions from the community!

### Steps to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/dinesh-gaire/chat-buddy.git
   ```

2. **Create a New Branch**
   ```bash
   git checkout -b feature-branch
   ```

3. **Make Your Changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

4. **Push Your Changes**
   ```bash
   git push origin feature-branch
   ```

5. **Create a Pull Request**
   Open a Pull Request to the main repository. Describe the changes you've made, and we'll review it as soon as possible!

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for more details.

✨ **Happy coding and enjoy building with ChatBuddy!** ✨
