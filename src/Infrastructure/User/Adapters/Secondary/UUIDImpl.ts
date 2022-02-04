import { IUUID } from '@Domain/User/Ports/Outgoing/Libs/IUUID';

interface IUUIDImpl {
  randomId: IUUID;
}

export const UUIDImpl: IUUIDImpl = {
  randomId: {
    generate() {
      const timestamp = +new Date();
    
      return timestamp.toString( 36 );
    }
  }
};
