var city = "������"
var index = 50342
var area = "������� 2"
var address = ""
var name = "�����"
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
        "���������� ������": city,
        "�������� �������": index,
        "������": area,
        "������": address,
        "��������": name,
        "�������": section,
        "����������": subsection,
        "E-mail": email,
        "��������": tel,
        "�����": fax,
        "�����": site,
        "ICQ": icq,
        "Jabber": jabber,
        "Skype": skype,
        "Vkontakte": vk,
        "Facebook": facebook,
        "�������������": odnoklassniki,
        "Twitter": twitter,
        "Instagram": insta
    }
)
    