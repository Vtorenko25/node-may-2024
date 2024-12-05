const path = require('node:path');
const fs = require('node:fs/promises');

const foo = async () => {
    const dirs = ['user', 'users', 'post', 'posts', 'comment'];
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

    for (const dirName of dirs) {
        const dirPath = path.join('baseFolder', dirName);
        await fs.mkdir(dirPath, { recursive: true });

        for (const fileName of files) {
            const filePath = path.join(dirPath, fileName);
            await fs.writeFile(filePath, `Це файл ${fileName} у папці ${dirName}`);
        }
    }

};

void foo();