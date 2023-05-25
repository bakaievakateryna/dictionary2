namespace sap.lcap.Dict;

entity Student
{
    key ID : UUID
        @Core.Computed;
    Name : String(100) not null;
    Surname : String(100) not null;
    Birthday : DateTime not null;
    class : Association to one Class;
}

entity Class
{
    key ID : UUID
        @Core.Computed;
    Name : String(100);
    student : Association to many Student on student.class = $self;
    card : Association to many Card on card.class = $self;
}

entity Card
{
    key ID : UUID
        @Core.Computed;
    Word : String(100) not null;
    Translate : String(100) not null;
    Example : String(100);
    class : Association to one Class;
}

entity Teacher
{
    key ID : UUID
        @Core.Computed;
    Name : String(100);
    class : Association to one Class;
}
