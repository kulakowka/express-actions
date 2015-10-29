import {static}   from 'express';
import {resolve} from 'path';

export default static(resolve(__dirname, '../../', 'public'));
