export interface INotification {
  success( _message: string ): void;
  warn( _message: string ): void;
  error( _message: string ): void;
}
