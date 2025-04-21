// this is the middle ware, sits between a req and a res
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    //mybe handle some functionalities here.
    next()
}

module.exports = logger;