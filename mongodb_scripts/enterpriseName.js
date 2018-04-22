var str1 = "ар"
var str2 = '/^' + str1 + '/'
db.getCollection('enterprises').find(
    {
        "Название организации": { "$regex": eval(str2), "$options": "i" }
    }
)
    