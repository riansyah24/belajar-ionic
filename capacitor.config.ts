import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.belajarionic.app',
  appName: 'Belajar',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#000000",
      androidScaleType: "CENTER_CROP",
      useDialog: true,
    },
  },
};

export default config;
