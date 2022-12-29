"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHomePage = void 0;
const path_1 = require("path");
const handleHomePage = (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, "index.html"));
};
exports.handleHomePage = handleHomePage;
