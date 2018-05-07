var area = "Алматы, Алмалинский район"
db.getCollection('enterprises').find(
    {
        "Район": area
    }
)