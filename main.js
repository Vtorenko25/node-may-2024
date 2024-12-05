const path = require('node:path');
const fs = require('node:fs/promises');

const foo = async () => {
    const dirs = ['user', 'users', 'post', 'posts', 'comment'];
    for (const dirName of dirs) {
        await fs.mkdir(path.join('baseFolder', dirName), { recursive: true });
    }
};

void foo();