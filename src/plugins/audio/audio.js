class AudioHandler {
  constructor() {
    this.onlineAu = this.createAudio('online-didi')
  }
  playOnline(){
    if (!this.onlineAu.paused) {
        this.onlineAu.pause();
    }
    this.onlineAu.play();
  }
  createAudio(pathName) {
    let au = document.createElement('audio');
    au.src = require(`../../assets/audio/${pathName}.wav`);
    return au;
  }
}

export const au = new AudioHandler()
