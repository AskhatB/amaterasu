var area = "������, ����������� �����"
db.getCollection('enterprises').find(
    {
        "�����": area
    }
)