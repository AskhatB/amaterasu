var subsection = "Университеты"
db.getCollection('enterprises').find(
    {
        "Подразделы": subsection
    }
)
    