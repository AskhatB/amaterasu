var subsection = "������������"
var area = "������, ����������� �����"
db.getCollection('enterprises').find(
    {
        "����������": subsection,
        "�����": area
    }
)