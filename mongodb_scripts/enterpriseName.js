var str1 = "��"
var str2 = '/^' + str1 + '/'
db.getCollection('enterprises').find(
    {
        "�������� �����������": { "$regex": eval(str2), "$options": "i" }
    }
)
    