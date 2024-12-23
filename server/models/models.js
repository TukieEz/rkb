const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users',{
    user_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    middlename: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    phone_number: {
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING, 
        allowNull: true
    }
})

const IdentifiedEvent = sequelize.define('identified_events',{
    identifiedE_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    date: {
        type: DataTypes.DATE, 
        allowNull: false
    },
    status: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    level_of_risk: {
        type: DataTypes.STRING, 
        allowNull: false
    }
})

const Department = sequelize.define('departments',{
    department_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false
    },
})

const Specialization = sequelize.define('specializations',{
    specialization_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false
    },
})

const Permission = sequelize.define('permissions',{
    permission_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false
    },
})

const Event = sequelize.define('events',{
    event_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING, 
        unique: true, allowNull: false
    },
})

const Location = sequelize.define('locations',{
    location_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false
    },
})

const AssignmentEvent = sequelize.define('assignment_events',{
    assignment_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING, 
        unique: true, 
        allowNull: false
    },
    user_id_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    user_id_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id',
        },
    }
})


Specialization.hasMany(User, {foreignKey: 'specialization_id'});
User.belongsTo(Specialization, {foreignKey: 'specialization_id'});

Department.hasMany(User, {foreignKey: 'department_id'});
User.belongsTo(Department, {foreignKey: 'department_id'});

Permission.hasMany(User, {foreignKey: 'permission_id'});
User.belongsTo(Permission, {foreignKey: 'permission_id'});

Location.hasMany(IdentifiedEvent, {foreignKey: 'location_id'});
IdentifiedEvent.belongsTo(Location, {foreignKey: 'location_id'});

Event.hasMany(IdentifiedEvent, {foreignKey: 'event_id'});
IdentifiedEvent.belongsTo(Event, {foreignKey: 'event_id'});

IdentifiedEvent.hasOne(AssignmentEvent, {foreignKey: 'identifiedE_id'});
AssignmentEvent.belongsTo(IdentifiedEvent, {foreignKey: 'identifiedE_id'});

User.hasMany(IdentifiedEvent, {foreignKey: 'user_id'});
IdentifiedEvent.hasMany(User, {foreignKey: 'user_id'});

User.belongsToMany(User, {
    as: 'Manager',
    through: AssignmentEvent,
    foreignKey: 'user_id_1',
    otherKey: 'user_id_2',
});

User.belongsToMany(User, {
    as: 'Worker',
    through: AssignmentEvent,
    foreignKey: 'user_id_2',
    otherKey: 'user_id_1',
});


module.exports = {
    User, 
    Department,
    Specialization,
    Permission,
    IdentifiedEvent,
    Location,
    Event,
    AssignmentEvent
}