/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class Interpreter {
    constructor() {
        this.registry = [];
    }

    addAlbumToRegistry(album)
    {
        this.registry.push(album);
    }

    interpret(input)
    {
        const exploded = input.split(' ');

        exploded.forEach(element => {
            if (!isNaN(parseFloat(element)) && isFinite(element)) {
                this.getDataFromRegistry(exploded, this.registry[element - 1]);
            }
        });
    }

    getDataFromRegistry(exploded, album)
    {
        let output = "";

        exploded.forEach(element => {
            if (element === "album") {
                output += album.getName() + " ";
            }

            if (element === "author") {
                output += album.getAuthor() + " ";
            }
        });

        console.log(output);
    }
}

export default Interpreter;