const router = require('express').Router();
let permission = require('../models/permission.model');

router.route('/').get((req, res) => {
    permission.find()
    .then(permission => res.json(permission))
    .catch(err => res.status(404).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const permissionId = req.body.permissionId;
    const permissionLevel = req.body.permissionLevel;

    const newPermission = new permission({
        permissionId: permissionId,
        permissionLevel: permissionLevel});

    newPermission.save()
    .then(() => res.json('Permission added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
