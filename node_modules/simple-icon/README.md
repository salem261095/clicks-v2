# Simple Icon

A simple Node.js library and CLI tool to generate icons from images.

## Installation

```bash
npm install simple-icon
```

## Usage

### As a CLI
Generate an icon from an image file:

```bash
simple-icon <image-file> [-s <size>] [-o <output>] [-f <format>]
```

#### Options:

- `-s, --size <number>`: Icon size in pixels (default: 64)
- `-o, --output <dir>`: Output directory (default: current directory)
- `-f, --format <type>`: File format (png, jpg, ico) (default: png)

#### Example:

```bash
simple-icon test.png -s 128 -o ./icons -f jpg
```

**Output:** Creates `icon-128x128.jpg` in the `./icons` directory.

### As a Library
Use it in your JavaScript code:

```javascript
const { generateIcon } = require('simple-icon');

async function run() {
  try {
    const output = await generateIcon('test.png', { size: 128, output: './icons', format: 'jpg' });
    console.log(`Icon created: ${output}`);
  } catch (error) {
    console.error(error.message);
  }
}

run();
```

## Requirements

- Node.js v14 or higher
- Supported image formats: PNG, JPG, JPEG, ICO

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



