import Contact from '../models/Contact.js'



export const createContact = async (req, res) => {
         const { email, phone, firstName, lastName, subject, message} = req.body

         const contact = new Contact({
             email, phone, firstName, lastName, subject, message
         })

         const response = await contact.save()

         return res.json(response)
}
