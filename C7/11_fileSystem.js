class FileSystem {
    constructor() {
        this.folders = [];
    }

    addFolders(folder) {
        this.folders.push(folder);
    }

    removeFolder(id) {
        this.folders = this.folders.filter(el => el.id !== id);
    }
}

class Folder {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.created = new Date();
        this.lastUpdated = new Date();
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
        this.lastUpdated = new Date();
    }

    removeFile(id) {
        this.files = this.files.filter(el => el.id !== id);
        this.lastUpdated = new Date();
    }
}

class File {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.created = new Date();
        this.lastUpdated = new Date();
    }

    updateFileName(name) {
        this.name = name;
        this.lastUpdated = new Date();
    }
}

const f1 = new File(0, 'bird');
const f2 = new File(1, 'coyote');
const f3 = new File(2, 'owl');
const f4 = new File(3, 'bear');

f1.updateFileName('squirrel');

const folder1 = new Folder(0, 'folder1');
const folder2 = new Folder(1, 'folder2');

const fs = new FileSystem();
fs.addFolders(folder1);
fs.addFolders(folder2);

folder1.addFile(f1);
folder1.addFile(f2);
folder1.removeFile(0);

folder2.addFile(f3);
folder2.addFile(f4);

console.log(fs)
