const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms at Travlr Getaways'
    });
};

module.exports = {
    rooms
};