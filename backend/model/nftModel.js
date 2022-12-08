var pool = require('./db');
var md5 = require('md5');

async function getNft() {
    try {
        var query = "SELECT * FROM nft";
        var rows = await pool.query(query);
        return rows;

    } catch (error) {
        throw error;
    }
}

async function addNft(obj) {
    try {
        var query = "INSERT into nft set ?";
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        throw error;
    }
}

async function deleteNft(id) {
    var query = "delete from nft where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNftById(id) {
    try {
        var query = "SELECT * FROM nft where id = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];

    } catch (error) {
        throw error;
    }
}

async function updateNft(obj, id) {
    try {
        var query = "UPDATE nft SET ? WHERE id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNft, addNft, deleteNft, getNftById, updateNft }