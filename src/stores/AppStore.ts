import { observable, action } from 'mobx';

class AppStore {
  @observable public user: object = {
    firstName: 'Luke',
    lastName: 'Beretta'
  };
  @observable public playlists: string[] = ['vibes', 'vibes: drive', 'vibes: rap'];

  @action public push() {
    this.playlists.push('pop!');
  }
}

export const appStore = new AppStore();
