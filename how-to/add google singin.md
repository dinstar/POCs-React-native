Bolg:
  https://codestax.medium.com/integrating-google-login-with-firebase-in-react-native-66bcc634164b

Steps:
  Register android app
    Generate SHA1 key
      ./android/gradlew signingReport
      Take the SHA1 of Task :app:signingReport, Variant: debugAndroidTest, Config: debug
    Follow Firebase instructions
  Install google paly services
    Android Studio -> SDK manager -> SDK tools -> Google Play serices
  Sync gradle
    ./gradlew --recompile-scripts
  Code
    Go to Authentication, then Sign-in method, then press Google
    Take the Web client ID and use that for your GoogleSignin.configure({ webClientId: ... });
    This Web client ID should be the same as listed in https://console.developers.google.com/apis/credentials?project=<your_project_id> -> Credentials -> OAuth 2 Client ID -> Web Client
