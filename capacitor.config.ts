import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c564f546a4ed41e68cb558aa520e1d16',
  appName: 'integra-visual-feast',
  webDir: 'dist',
  server: {
    url: 'https://c564f546-a4ed-41e6-8cb5-58aa520e1d16.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;