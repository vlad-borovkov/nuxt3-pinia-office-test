export default (req, res) => {
    const { name, email, message } = req.body;
    const ticketNumber = Math.floor(Math.random() * 1000);

    res.status(200).json({ ticketNumber });
};
