class Jukebox {
    constructor() {
        this.songlist = [];
        this.track = 0;
    }

    addSong(song) {
        this.songlist.push(song);
    }

    removeSong(song) {
        this.songlist = this.songlist.filter(el => el !== song);
    }

    play() {
        if (this.track >= this.songlist.length) this.track = 0;
        return this.songlist[this.track];
    }

    nextSong() {
        this.track += 1;
        if (this.track >= this.songlist.length) this.track = 0;
        return this.songlist[this.track];
    }

    prevSong() {
        this.track -= 1;
        if (this.track < 0) this.track = this.songlist.length - 1;
        return this.songlist[this.track];
    }

    currentSong() {
        return this.songlist[this.track];
    }
}

let jukebox = new Jukebox();

jukebox.addSong('a');
jukebox.addSong('b');
jukebox.addSong('c');
jukebox.addSong('d');
jukebox.addSong('e');

jukebox.removeSong('c');

console.log(jukebox.play());
console.log(jukebox.nextSong());
console.log(jukebox.prevSong());

console.log(jukebox)