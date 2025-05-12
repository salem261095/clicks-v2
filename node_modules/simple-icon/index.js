#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const { program } = require('commander');

async function generateIcon(inputFile, size = 64) {
  try {
    const outputFile = path.join(process.cwd(), `icon-${size}x${size}.png`);
    await sharp(inputFile)
      .resize(size, size)
      .toFile(outputFile);
    return outputFile;
  } catch (error) {
    throw new Error(`generation error: ${error.message}`);
  }
}

module.exports = { generateIcon };

// CLI
if (require.main === module) {
  program
    .argument('<file>', 'dir to image (png, jpg)')
    .option('-s, --size <number>', 'icon size', '64')
    .description('the simple utility for create icon')
    .action(async (file, options) => {
      const size = parseInt(options.size);
      try {
        const output = await generateIcon(file, size);
        console.log(`icon created success: ${output}`);
      } catch (error) {
        console.error(error.message);
      }
    });

  program.parse();
}
