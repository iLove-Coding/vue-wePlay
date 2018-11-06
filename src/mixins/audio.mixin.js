export default {
    data(){
        return {
            onlineAu: this.createAudio('online-didi'),
            offlineAu: document.createElement("audio"),
        }
    },
    methods: {
        playOnlineAudio(){
            if (!this.onlineAu.paused) {
                this.onlineAu.pause();
            }
            this.onlineAu.play();
        },
        createAudio(pathName) {
            let au = document.createElement('audio');
            au.src = require(`../assets/audio/${pathName}.wav`);
            return au;
        }
    }
}