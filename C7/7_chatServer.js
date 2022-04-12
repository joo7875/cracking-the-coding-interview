class Chat {
    constructor() {
        this.private = [];
        this.group = [];
    } 
}

class User {
    constructor(id, status) {
        this.id = id;
        this.status = status;
        this.host = new Chat();
    }

    createChat(type) {
        switch (type) {
            case 'private':
                this.host.private.push({ userId: null });
                break;
            case 'group':
                this.host.group.push({ userId: [] });
                break;
        }
    }

    inviteUser(type, chatId, userId) {
        if (userId.status) {
            switch (type) {
                case 'private':
                    if (chatId < this.host.private.length) {
                        if (this.host.private[chatId].userId) console.log('user existed in private chat');
                        else this.host.private[chatId].userId = userId.id;
                    }
                    else console.log(`${chatId} private chat not exist`);
                    break;
                case 'group':
                    if (chatId < this.host.group.length) this.host.group[chatId].userId.push(userId.id);
                    else console.log(`${chatId} group chat not exist`);
            }
        }
        else console.log(`user ${userId.id} is offline`);
    }
}

const u1 = new User(0, true);
const u2 = new User(1, false);
const u3 = new User(2, true);
const u4 = new User(3, false);

u1.createChat('private');
u1.inviteUser('private', 0, u2);

u2.createChat('group');
u2.inviteUser('group', 0, u3);
u2.inviteUser('group', 0, u4);
u2.inviteUser('group', 3, u3);


console.log(u1)
console.log(u2)