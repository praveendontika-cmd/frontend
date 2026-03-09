app.get("/api/user/messages/:userId", async (req, res) => {
  const complaints = await Complaint.find({
    userId: req.params.userId,
    status: "Resolved"
  });

  res.json(complaints);
});
