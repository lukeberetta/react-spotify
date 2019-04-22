import { observable } from 'mobx';

class FakeStore {
  @observable public userPlaylists: string[] = ['xxx', 'vibes: xxx', 'vibes: yyy'];
}

export const fakeStore = new FakeStore();
