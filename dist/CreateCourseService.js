"use strict";
/*
    name - string (nome do curso)
    duration - number (semanas)
    ducator- string (nome do professor(a))
*/
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
