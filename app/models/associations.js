import { Animal } from './animal.model.js';
import { Task } from './task.model.js';
import { User } from './user.model.js';
import { Breed } from './breed.model.js';
import { Species } from './species.model.js';
import { sequelize } from '../database.js';

Animal.belongsToMany(Task, {
  as: 'task',
  through: 'animal_has_task',
  foreignKey: 'animal_id',
});

Task.belongsToMany(Animal, {
  as: 'animal',
  through: 'animal_has_task',
  foreignKey: 'task_id',
});

User.belongsToMany(Task, {
  as: 'task',
  through: 'user_has_task',
  foreignKey: 'user_id',
});

Task.belongsToMany(User, {
  as: 'user',
  through: 'user_has_task',
  foreignKey: 'task_id',
});

Breed.hasOne(Species, {
  foreignKey: 'species_id',
  as: 'espece',
});

Species.belongsTo(Breed, {
  foreignKey: 'species_id',
  as: 'race',
});

Animal.belongsToMany(Breed, {
  as: 'breed',
  through: 'animal_has_breed',
  foreignKey: 'animal_id',
});

Breed.belongsToMany(Animal, {
  as: 'animal',
  through: 'animal_has_breed',
  foreignKey: 'breed_id',
});

export { Animal, Task, User, Breed, Species, sequelize };
