var city = "Алматы"
var index = 50342
var area = "Шанырак 2"
var address = ""
var name = "Лялял"
var section = ""
var subsection = ""
var email = ""
var tel = ""
var fax = ""
var site = ""
var icq = ""
var jabber = ""
var skype = ""
var vk = ""
var facebook = ""
var odnoklassniki = ""
var twitter = ""
var insta = ""
db.getCollection('enterprises').insert(
    {
        "Населенные Пункты": city,
        "Почтовые Индексы": index,
        "Районы": area,
        "Адреса": address,
        "Название": name,
        "Разделы": section,
        "Подразделы": subsection,
        "E-mail": email,
        "Телефоны": tel,
        "Факсы": fax,
        "Сайты": site,
        "ICQ": icq,
        "Jabber": jabber,
        "Skype": skype,
        "Vkontakte": vk,
        "Facebook": facebook,
        "Одноклассники": odnoklassniki,
        "Twitter": twitter,
        "Instagram": insta
    }
)
    