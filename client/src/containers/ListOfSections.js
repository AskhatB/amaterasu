import React, { Component } from 'react'
import axios from 'axios'

class ListOfSections extends Component{
	constructor(props){
		super(props)
		this.state = {
			sectionArray: [
				"Электроника / Электротехника",
				"Транспорт / Грузоперевозки",
				"Торговые комплексы / Спецмагазины",
				"Товары для животных / Ветеринария",
				"Юридические / финансовые / бизнес-услуги",
				"Спорт / Отдых / Туризм",
				"Реклама / Полиграфия / СМИ",
				"Строительство / Недвижимость / Ремонт",
				"Образование / Работа / Карьера",
				"Медицина / Здоровье / Красота",
				"Компьютеры / Бытовая техника / Офисная техника",
				"Автосервис / Автотовары",
				"Мебель / Материалы / Фурнитура",
				"Культура / Искусство / Религия",
				"Коммунальные / бытовые / ритуальные услуги",
				"Интернет / Связь / Информационные технологии",
				"Продукты питания / Напитки",
				"Досуг / Развлечения / Общественное питание",
				"Город / Власть",
				"Аварийные / справочные / экстренные службы",
				"Электроника / Электротехника",
				"Транспорт / Грузоперевозки",
				"Торговые комплексы / Спецмагазины",
				"Товары для животных / Ветеринария",
				"Юридические / финансовые / бизнес-услуги",
				"Спорт / Отдых / Туризм",
				"Реклама / Полиграфия / СМИ",
				"Строительство / Недвижимость / Ремонт",
				"Образование / Работа / Карьера",
				"Медицина / Здоровье / Красота",
				"Компьютеры / Бытовая техника / Офисная техника",
				"Автосервис / Автотовары",
				"Мебель / Материалы / Фурнитура",
				"Культура / Искусство / Религия",
				"Коммунальные / бытовые / ритуальные услуги",
				"Интернет / Связь / Информационные технологии",
				"Продукты питания / Напитки",
				"Досуг / Развлечения / Общественное питание",
				"Город / Власть",
				"Аварийные / справочные / экстренные службы"
			],
			data: []
		}
	}

	componentWillMount(){
		axios.post('/api/section', {sec: this.state.sectionArray[this.props.match.params.section]}).then(res => {
			this.setState({data: res.data.docs})
		})
	}

	render(){
		return(
			<div className="container">
				{
				this.state.data ?
				<div className="row">
				{
					this.state.data.map((value, index)=>{
						return(
							<div className="col-12" key={index} >
								<div className="sep-30"></div>
								<ul className="list-group">
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Название организации</span> {value['Название организации']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Город</span> {value['Населенные пункты']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Адрес</span> {value['Адреса']}
									</li>
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Почтовые индекс</span> {value['Почтовые индексы']}
									</li>
									{
										value['Телефоны'] ? 
										<li className="list-group-item">
											<span className="badge badge-primary badge-pill">Телефон</span> {value['Телефоны']}
										</li>
										:null
									}
									
									<li className="list-group-item">
										<span className="badge badge-primary badge-pill">Раздел</span> {value['Разделы']}
									</li>
									{
										value['Сайты'] ?
										<li className="list-group-item">
											<span className="badge badge-primary badge-pill">Сайт</span> {value['Сайты']}
										</li>
										:null
									}
									{
										value['E-mail'] ?
										<li className="list-group-item">
											<span className="badge badge-primary badge-pill">E-mail</span> {value['E-mail']}
										</li>
										: null
									}
								</ul>
							</div>
						)
					})
				}
				</div>
				: <div className="loader"></div>
			}
			</div>
		)
	}
}

export default ListOfSections