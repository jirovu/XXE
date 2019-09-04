const express = require('express');
const router = express.Router();
const libxmljs = require('libxmljs');
const fs = require('fs');

const parserOptions = {
    noblanks: true,
    noent: true,
    nocdata: true
};

// Hangle upload XML file
router.post('/', (req, res, next) => {
    // Read xml file and data is buffer (Stream)
    const xmlFile = req.files.uploadFile;
    // Convert Buffer data to String
    const xmlValue = xmlFile.data.toString();

    // Parsing XML value
    const xmlDoc = libxmljs.parseXmlString(xmlValue, parserOptions);
    // Get value in <foo> tag
    const data = xmlDoc.get('//foo').text();

    res.send(data);
});

module.exports = router;