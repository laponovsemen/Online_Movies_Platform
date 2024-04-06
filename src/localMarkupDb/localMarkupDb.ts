import JohnWick from "./../assets/images/John_Wick.png"
import Shazam from "./../assets/images/Shazam.png"
import TheWhale from "./../assets/images/TheWhale.png"
import Tetris from "./../assets/images/Tetris.png"
import Interstellar from "./../assets/images/Interstellar.png"
import Batman from "./../assets/images/Batman.png"
import The from "./../assets/images/The.png"
import Bladerunner from "./../assets/images/Bladerunner.png"
import pavelAvatar from "./../assets/images/creatorsImages/nkkkkkkk_k_1712348453154.jpeg"
import semenAvatar from "./../assets/images/creatorsImages/myPhoto.jpg"
export const headerCategories = [
	"movies",
	"series",
	"animations"
]
export type SideBarMenuSubListsItem = {
	iconId: string,
	title : string,
	navigationId:string
}
export type SideBarMenuSubList = {
	name : string,
	items: Array<SideBarMenuSubListsItem>
}
export type Film = {
	name: string,
	genre: string,
	duration: string,
	image: string,
	mark: number,
}
export type Technology = {
	iconId: string
	naming: string
}
export type Creator = {
	firstName: string
	familyName: string
	avatar: string
	listOfTechnologies: Technology[]
	description: string

}
export const sideBarMenuList : SideBarMenuSubList[] = [
	{name : "menu", items : [
		{title:"home", iconId : "home", navigationId: ""},
		{title:"categories", iconId : "categories", navigationId: "categories"},
		{title:"awards", iconId : "awards", navigationId: "awards"},
		{title:"discover", iconId : "discover", navigationId: "discover"},
		]},
	{name : "user", items : [
			{title:"account", iconId : "account", navigationId: "account"},
			{title:"watch list", iconId : "watchList", navigationId: "watchList"},

		]},
	{name : "general", items : [
			{title:"settings", iconId : "settings", navigationId: "settings"},
			{title:"log out", iconId : "logout", navigationId: "logout"},

		]},
]
export const NewMoviesFilmsList : Film[] = [
	{name: "John Wick : Chapter 4", genre: "Action",image: JohnWick, duration: "2h 12m", mark: 7.1},
	{name: "Shazam", genre: "Action",image: Shazam,  duration: "2h 10m", mark: 6.1},
	{name: "The Whale", genre: "Drama",image: TheWhale,  duration: "1h 57m", mark: 7.1},
	{name: "John Wick : Chapter 4", genre: "Action",image: Tetris,  duration: "2h 12m", mark: 7.1},
]
export const RecommendedFilmsList : Film[] = [
	{name: "John Wick : Chapter 4", genre: "Action",image: Batman, duration: "2h 12m", mark: 7.1},
	{name: "Shazam", genre: "Action",image: Interstellar,  duration: "2h 10m", mark: 6.1},
	{name: "The Whale", genre: "Drama",image: The,  duration: "1h 57m", mark: 7.1},
	{name: "John Wick : Chapter 4", genre: "Action",image: Bladerunner,  duration: "2h 12m", mark: 7.1},
]
const semenListOfTechnologies : Technology[] = [
	{naming: "aws", iconId: "aws"},
	{naming: "css", iconId: "css"},
	{naming: "express", iconId: "express"},
	{naming: "html", iconId: "html"},
	{naming: "javascript", iconId: "javascript"},
	{naming: "jest", iconId: "jest"},
	{naming: "mongoDB", iconId: "mongoDB"},
	{naming: "mongoose", iconId: "mongoose"},
	{naming: "node", iconId: "node"},
	{naming: "postgres", iconId: "postgres"},
	{naming: "react", iconId: "react"},
	{naming: "redux", iconId: "redux"},
	{naming: "styled", iconId: "styled"},
	{naming: "typescript", iconId: "typescript"},
]
const pavelListOfTechnologies : Technology[] = [
	{naming: "aws", iconId: "aws"},
	{naming: "css", iconId: "css"},
	{naming: "express", iconId: "express"},
	{naming: "html", iconId: "html"},
	{naming: "javascript", iconId: "javascript"},
	{naming: "jest", iconId: "jest"},
	{naming: "mongoDB", iconId: "mongoDB"},
	{naming: "mongoose", iconId: "mongoose"},
	{naming: "node", iconId: "node"},
	{naming: "postgres", iconId: "postgres"},
	{naming: "react", iconId: "react"},
	{naming: "redux", iconId: "redux"},
	{naming: "styled", iconId: "styled"},
	{naming: "typescript", iconId: "typescript"},
]
export const creators : Creator[] = [
	{
		firstName: "Павел",
		familyName: "Мурашкин",
		description: "Паша тут надо описание добавить",
		avatar: pavelAvatar,
		listOfTechnologies: pavelListOfTechnologies
	},
	{
		firstName: "Семён",
		familyName: "Лапонов",
		description: "Пока тут нихуя нет но по фотке видно  шо блять я в море ходил  контейнера крепил ебать их в рот",
		avatar: semenAvatar,
		listOfTechnologies: semenListOfTechnologies
	}
]

