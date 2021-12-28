import {Request, Response} from 'express'
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
	CreateCourseService.execute({
		name: 'Typescript',
		duration: 4,
		educator: 'Eduardo Rodrigues'	
	});
	
	return response.status(100).json({
    message: "Course created"
  })
	
}