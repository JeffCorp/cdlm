const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const permissionSchema = new Schema({
    permissionId : {
        type: Number,
        required: true,
        minlength: 1
    },
    permissionLevel : {
        type: String,
        required: true,
        minlength: 3
    },
},{
    timestamps: true
});

const Permission = mongoose.model('Permissions', permissionSchema);

module.exports = Permission;