var subsection = "Университеты"
var area = "Алматы, Алмалинский район"
db.getCollection('enterprises').find(
    {
        "Подразделы": subsection,
        "Район": area
    }
)