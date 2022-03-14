const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/**
 * 
 * @param {*} email 
 * @returns 
 */
const validateEmail = (email) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return regex.test(email);
};

const gamerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'El nombre del jugador es requerido']
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, 'El apellido del jugador es requerido']
    },
    age: {
        type: Number,
        min: [18, 'La edad mínima es de 18 años'],
        max: [90, 'La edad máxima es de 90 años']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'El correo es requerido'],
        unique: true,
        validate: {
            validator:validateEmail,
            message: 'Por favor digite un correo valido'
        }
    },
    genre: {
        type: String,
        required: false,
        enum: ['masculino', 'femenino']
    },
    friends: {
        type: [{
            type: String,
            trim: true,
            require: [true, 'El nombre del amigo es requerido']
        }],
        require: false
    }
}, { timestamps: true});

gamerSchema.plugin(mongooseSoftDelete);

module.exports = Gamer = mongoose.model('Gamer', gamerSchema);