import { Component } from "@angular/core";
import { CourseService } from "./course.service";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
})

export class CourseComponent {
    title: string = 'List of courses';
    navcourse: string[] =[];
    constructor(NavCourse:CourseService) {
        this.navcourse = NavCourse.getCourse();
    }
}