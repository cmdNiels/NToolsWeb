const ytdl = require("ytdl-core");
const fs = require("fs");

export default async function handler(req, res)
{
    const { id } = req.query;

    if (req.method === 'GET')
    {
        try
        {
            if (!ytdl.validateID(id))
            {
                res.status(400).json({
                    error: "Invalid ID"
                });
            }

            res.setHeader('content-type', "video/mp4");
            await ytdl(id, { quality: "highest" }).pipe(res);
        }
        catch (err)
        {
            console.log('err: ', err);
        }
    } else
    {
        res.status(400).json({ result: false })
    }
}