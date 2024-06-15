import JoiBase from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate);

const userSchemas = {
  updateData: {
    avatar: Joi.string().min(1),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "fr"] },
      })
      .required()
      .message("Le format de l'email est incorrect"),
    lastname: Joi.string().min(1).max(30).required(),
    firstname: Joi.string().min(1).max(30).required(),
    birthdate: Joi.date().utc().format(["DD-MM-YYYY"]).required(),
    password: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd][A-Za-zd@$!%*?&]{8,}$"
        )
      )
      .required()
      .message(
        "Le message doit contenir au moins 8 charactère dont 1 majuscule, 1 minuscule et 1 chiffre"
      ),
    confirmPassword: Joi.ref(password).required(),
    arrival_date: Joi.date().utc().format(["DD-MM-YYYY HH:mm"]),
    leaving_date: Joi.date().utc().format(["DD-MM-YYYY HH:mm"]),
    role: Joi.string().min(5).max(8).required(),
    is_active: Joi.boolean().min(1),
  }
};

export default userSchemas;
