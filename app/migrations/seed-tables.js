import bcrypt from "bcrypt";
import "dotenv/config";
import { Animal, Task, User } from "../models/associations.js";

console.log("Création des données...");

/* await Animal.create({
  avatar: "/animals/1000001520.jpg",
  name: "Nala",
  birthdate: new Date("2022-04-08"),
  gender: "female",
  health: "good",
  leaving_date: null,
  is_active: true,
});

await Animal.create({
  avatar: "/animals/1000005706.jpg",
  name: "kayou",
  birthdate: new Date("2020-02-01"),
  gender: "male",
  health: "good",
  leaving_date: null,
  is_active: true,
});

await Animal.create({
  avatar: "/animals/IMG_2794.jpg",
  name: "Kiki",
  birthdate: new Date("2021-04-02"),
  gender: "Male",
  health: "good",
  leaving_date: null,
  is_active: true,
});

await Animal.create({
  avatar: "/animals/IMG_8141.jpg",
  name: "Robert",
  birthdate: new Date("2018-06-08"),
  gender: "Male",
  health: "good",
  leaving_date: null,
  is_active: true,
});

await Task.create({
  title: "Lui donner des croquettes",
  label: "C'est important pour la santé",
  start_date: new Date("2024-05-21"),
  end_date: new Date("2024-05-22"),
  is_done: false,
});

await Task.create({
  title: "Faire sa toilette",
  label: "Pour pas sentir mauvais",
  start_date: new Date("2024-05-21"),
  end_date: new Date("2024-05-22"),
  is_done: false,
});

await Task.create({
  title: "Nettoyer",
  label: "Faut que ça brille",
  start_date: new Date("2024-05-21"),
  end_date: new Date("2024-05-22"),
  is_done: false,
});

const password = "Az123456";
const nbOfSaltRounds = parseInt(process.env.NB_OF_SALT_ROUNDS) || 10;
const hashedPassword = await bcrypt.hash(password, nbOfSaltRounds);

await User.create({
  avatar: "users/lucas.jpeg",
  email: "lucasbertrand.oc@gmail.com",
  lastname: "BERTRAND",
  firstname: "Lucas",
  birthdate: new Date("1999-02-08"),
  password: hashedPassword,
  role: "Admin",
  leaving_date: null,
  is_active: true,
});

await User.create({
  avatar: "",
  email: "mickapadel@gmail.com",
  lastname: "PADEL",
  firstname: "Mickael",
  birthdate: new Date("1983-02-07"),
  password: hashedPassword,
  role: "Admin",
  leaving_date: null,
  is_active: true,
});

await User.create({
  avatar: "",
  email: "cecilemarot1234@gmail.com",
  lastname: "MAROT",
  firstname: "Cécile",
  birthdate: new Date("1995-09-28"),
  password: hashedPassword,
  role: "Admin",
  leaving_date: null,
  is_active: true,
});

await User.create({
  avatar: "",
  email: "nadia06@gmail.com",
  lastname: "BAKRIM",
  firstname: "Nadia",
  birthdate: new Date("1984-06-09"),
  password: hashedPassword,
  role: "Admin",
  leaving_date: null,
  is_active: true,
});

await User.create({
  avatar: "",
  email: "luffykosuki@gmail.com",
  lastname: "MEHADI",
  firstname: "Khireddine",
  birthdate: new Date("1987-09-22"),
  password: hashedPassword,
  role: "Admin",
  leaving_date: null,
  is_active: true,
});
 */
