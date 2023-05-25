using sap.lcap.Dict from '../db/schema';

service DictService
{
    entity StudentService as
        projection on Dict.Student;

    entity ClassService as
        projection on Dict.Class;

    entity CardsService as
        projection on Dict.Card;

    entity TeacherService as
        projection on Dict.Teacher;
}
