import { toast } from 'react-toastify';

import { INotification } from '@Domain/User/Ports/Outgoing/Libs/INotification';

interface INotificationImpl {
  reactToastify: INotification
}

export const NotificationImpl: INotificationImpl = {
  reactToastify: {
    success: ( message: string ) => toast.success( message ),
    warn: ( message: string ) => toast.warn( message ),
    error: ( message: string ) => toast.error( message ),
  },
};
