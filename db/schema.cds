namespace sap.lcap.Dict;

entity Student
{
    key ID : UUID
        @Core.Computed;
    Name : String(100) not null;
    Surname : String(100) not null;
    Birthday : DateTime not null;
}
