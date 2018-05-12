module.exports = (err, req, res, next) => {
    res.status(400).json({
        success: false,
        error: true,
        message: err.message
    })
}