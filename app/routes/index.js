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


/* Reading the directory of the current file, filtering out the files that are not needed, and then
using the router to use the files that are needed. */
fs.readdirSync(__dirname).filter((file) => {
   const fileWithoutExtension = removeExtension(file);
   const skip = ['index'].includes(fileWithoutExtension);

   if (!skip) {
     router.use(`${fileWithoutExtension}`, () => {
        `./${fileWithoutExtension}`;//TODO:localhost:3000/api/v1/fileName
     });
     console.log(`Route: ${fileWithoutExtension}`);
   }


});

/* A catch all route. If the route is not found, it will return a 404 error. */
router.get('*', (req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

export default router;
