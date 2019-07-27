const db = require('./friendsModel.js');

const { find, findById, add, update, remove } = require('./friendsModel.js');

describe('friend model', () => {
    describe('add()', () => {
        it('should insert the provided friend', async () => {
            await add({ name: 'Olive'})
            await add({ name: 'Gwen'})

            const friends = await db('friends');

            expect(friends).toHaveLength(2);
        })
    
        it('should insert the provided hobbit', async () => {
            let friend = { name: 'Todd' };
            let added = await add(friend);
            expect(added.name).toBe(friend.name)

            friend = { name: 'Charlie' };
            added = await add(friend)
            expect(added.name).toBe(friend.name);
        })
    })
})