import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const useNotifications = () => {
  async function setNotificationChannel(name = "default") {
    await Notifications.setNotificationChannelAsync(name, {
      name: name,
      importance: Notifications.AndroidImportance.MAX,
      sound: true,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  async function requestPermissions() {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
  }

  useEffect(() => {
    requestPermissions();

    if (Platform.OS === "android") {
      setNotificationChannel();
    }
  }, []);

  async function triggerNotification(content) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "📬 You've got mail!",
        body: "Here is the notification body",
        sound: "default",
        ...content,
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return {
    triggerNotification,
  };
};

export default useNotifications;
