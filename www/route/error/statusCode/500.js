module.exports = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        error: true,
        message: err.message
    })
}