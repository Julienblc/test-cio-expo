export default {
  expo: {
    name: "StickerSmash",
    slug: "StickerSmash",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "stickersmash",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.santeacademie.StickerSmash"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.santeacademie.StickerSmash"
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ],
      [
        "customerio-expo-plugin",
        {
          android: {
            googleServicesFile: "./files/google-services.json"
          },
          ios: {
            pushNotification: {
              env: {
                cdpApiKey: process.env.EXPO_PUBLIC_CUSTOMER_IO_CDP_API_KEY,
                region: "us"
              },
              disableNotificationRegistration: true,
              handleDeeplinkInKilledState: true
            }
          }
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
};