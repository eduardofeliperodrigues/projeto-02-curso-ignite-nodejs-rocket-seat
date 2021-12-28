/*
	name - string (nome do curso)
	duration - number (semanas)
	ducator- string (nome do professor(a))
*/

interface Course {
	name: string,
	duration: number,
	educator: string
}

class CreateCourseService {
	execute({name, duration, educator}: Course ){
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService();