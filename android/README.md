# Orchard Engine Android APK

This is a native Android wrapper for the bundled web editor. It opens the local
`index.html` asset in a full-screen `WebView`, so the editor itself has no
runtime server dependency.

## Debug build

Install Android SDK Platform 35 and Build Tools, set `ANDROID_HOME`, then run:

```bash
cd android
gradle :app:assembleDebug
```

The APK is written to `app/build/outputs/apk/debug/app-debug.apk`.
