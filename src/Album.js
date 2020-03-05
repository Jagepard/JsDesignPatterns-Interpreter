/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Album {
    constructor(name, author) {
        this.name   = name;
        this.author = author;
    }

    getName()
    {
        return this.name;
    }

    getAuthor()
    {
        return this.author;
    }
}

export default Album;