import { Modal } from "antd";
import React from "react";

const Notifications = ({
  notifications = [],
  reloadNotifications,
  showNotifications,
  setShowNotifications,
}) => {
  return (
    <Modal
      title="Notifications"
      open={showNotifications}
      onCancel={() => setShowNotifications(false)}
      footer={null}
      centered
      width={800}
    >
      <div className="flex flex-col my-4 gap-2">
        {notifications.map((notification) => (
          <div className="p-4 rounded-md border border-gray-200 flex flex-col gap-1">
            <h1 className="font-medium text-gray-800">{notification.title}</h1>
            <span className="text-gray-600">{notification.message}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default Notifications;
