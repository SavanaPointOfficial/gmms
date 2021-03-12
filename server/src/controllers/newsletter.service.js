import NewsLetter from "../models/NewsLetter.js"

export const createNewL = async (req, res) => {
    const { email }  = req.body

    const newsL = new NewsLetter({
        email
    })
const result = await newsL.save()

return res.json(result)
}