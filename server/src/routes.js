import { Router } from 'express';
import { createContact } from './controllers/contact.service.js';
import { createNewL } from "./controllers/newsletter.service.js"



export const router = Router()

router.post('/new-contact', createContact)
router.post('/news-letter', createNewL)