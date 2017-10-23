'use strict';

const EventEmitter = require('eventemitter3');

class GalleryEmitter extends EventEmitter{

}
const SingleGalleryEmitter = new GalleryEmitter();
export default SingleGalleryEmitter;