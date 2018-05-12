module.exports = (req, res, next) => {
    res.status(404).json({
        success: false,
        error: true,
        message: 'Not Found'
    })
}