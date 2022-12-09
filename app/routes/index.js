import express from 'express';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';


const router = express.Router();

/* Getting the path of the current file. */
const __filename = fileURLToPath(import.meta.url);

/* Getting the path of the current directory. */
const __dirname = path.dirname(__filename);

/**
 * It takes a string, splits it into an array, and returns the first element of that array
 * @param filename - The name of the file you want to remove the extension from.
 * @returns The filename without the extension.
 */
const removeExtension = (filename) => {
  return filename.split('.').shift();
};


fs.readdirSync(__dirname).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ['index'].includes(fileWithOutExt);

  if (!skip) {
    router.use(`/${fileWithOutExt}`, async (req, res, next) => {
      try {
        const fileModuleWithoutExtension = await import(`./${fileWithOutExt}.js`);
        fileModuleWithoutExtension.default(req, res, next);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error.' });
      }
    });
    console.log(`/${fileWithOutExt}`);
  }
});

/* A catch all route. If the route is not found, it will return a 404 error. */
router.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

export default router;
