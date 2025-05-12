const { generateIcon } = require('./index.js');

async function run() {
  try {
    const output = await generateIcon('rose.png', 128);
    console.log(`Создан файл: ${output}`);
  } catch (error) {
    console.error(error.message);
  }
}

run();
