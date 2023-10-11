const connection = require("../config/database");

//import express validator
// const { validationResult } = require("express-validator");

const index = (req, res) => {
	connection.query(
		"SELECT * FROM posts ORDER BY id desc",
		function (err, rows) {
			if (err) {
				return res.status(500).json({
					status: false,
					message: "Internal Server Error",
				});
			} else {
				return res.status(200).json({
					status: true,
					message: "List Data Posts",
					data: rows,
				});
			}
		}
	);
};

/**
 * STORE POST
 */
function tambahPostingan(req, res) {
	const validationReq = validationResult(req);

	if (!validationReq.isEmpty()) {
		return res.status(422).json({
			errors: validationReq.array(),
		});
	}

	//define formData
	let formData = {
		tittle: req.body.tittle,
		content: req.body.content,
	};

	// insert query
	connection.query(
		"INSERT INTO postingan SET ?",
		formData,
		function (err, rows) {
			//if(err) throw err
			if (err) {
				return res.status(500).json({
					status: false,
					message: "Internal Server Error",
				});
			} else {
				return res.status(201).json({
					status: true,
					message: "Insert Data Successfully",
					data: rows[0],
				});
			}
		}
	);
}

module.exports = { index, tambahPostingan };
