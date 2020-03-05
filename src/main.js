/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import Album from './Album'
import Interpreter from './Interpreter'

const interpreter = new Interpreter();

interpreter.addAlbumToRegistry(new Album("Untouchables", "Korn"));
interpreter.addAlbumToRegistry(new Album("Adrenaline", "Deftones"));
interpreter.interpret('album 2');
interpreter.interpret('album author 2');
interpreter.interpret('album author 1');
interpreter.interpret('author 1');
