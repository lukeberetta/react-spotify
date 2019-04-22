import { observable } from 'mobx';

class AppStore {
  @observable public user: object = {
    firstName: 'Luke',
    lastName: 'Beretta'
  };
  @observable public userPlaylists: string[] = ['vibes', 'vibes: drive', 'vibes: rap'];
}

export const appStore = new AppStore();
