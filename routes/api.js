const express = require("express");
const fs= require("fs")
const app = express();

let notes = require("../db/db.json");

const uuid = require("uuid/v1");

app.get("/api/notes", (req, res) => {
  return res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuid();
  notes.push(newNote)
fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), function(err){
	if(err) throw err
})
  res.end();
});

app.delete("/api/notes/:id", (req, res) => {
	const id = req.params.id;

	let filterNotes = notes.filter(note => note.id != id)

	notes = filterNotes

	fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(filterNotes), function(err){
		if(err) throw err
	})
	res.end();
});
module.exports = app