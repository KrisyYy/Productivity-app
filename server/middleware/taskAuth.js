const express = require("express");
const db = require("../models");

const Task = db.tasks;

exports.isTaskCreator = async (req, res, next) => {
	// TODO implement
	next();
};
