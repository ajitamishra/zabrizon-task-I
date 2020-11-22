import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import Data from "./ListingData";
function App() {
	let initialState = {
		ListingData: Data,
		city: "All",
		HomeType: "All",
		rooms: 0,
		minprice: "",
		maxprice: "",
		minfloorspace: "",
		maxfloorspace: "",
		elevators: false,
		swimmingpool: false,
		finishedbasement: false,
		gym: false,
		filteredData: Data,
		sorting: "All",
		view: "box",
		search: "",
		populateFormsData: {},
		menu: true,
	};
	const [state, setState] = useState(initialState);
	const [isSet, setIsSet] = useState(false);
	const change = (event) => {
		const name = event.target.name;
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;
		setState({
			...state,
			[name]: value,
		});

		setIsSet((prevState) => !prevState);
		if (isSet) {
			filteredData();
		}
	};
	const filteredData = () => {
		let newData = state.ListingData;
		if (state.minprice !== "" || state.maxprice !== "") {
			newData = newData.filter((item) => {
				return item.price <= state.maxprice && item.price >= state.minprice;
			});
		}
		if (state.city !== "All") {
			newData = newData.filter((item) => {
				return item.city === state.city;
			});
		}
		if (state.HomeType !== "All") {
			newData = newData.filter((item) => {
				return item.homeType === state.HomeType;
			});
		}
		if (state.sorting !== "All") {
			if (state.sorting === "price-desc") {
				newData = newData.sort((a, b) => {
					return b.price - a.price;
				});
			}
			if (state.sorting === "price-asc") {
				newData = newData.sort((a, b) => {
					return a.price - b.price;
				});
			}
		}
		if (state.search !== "") {
			let city, search;
			newData = newData.filter((item) => {
				city = item.city.toLowerCase();
				search = state.search.toLowerCase();
				return city.includes(search);
			});
		}
		if (state.elevators) {
			newData = newData.filter((item) => {
				return item.extras.includes("elevators");
			});
		}
		if (state.swimmingpool) {
			newData = newData.filter((item) => {
				return item.extras.includes("swimmingpool");
			});
		}
		if (state.gym) {
			newData = newData.filter((item) => {
				return item.extras.includes("gym");
			});
		}
		if (state.finishedbasement) {
			newData = newData.filter((item) => {
				return item.extras.includes("finishedbasement");
			});
		}
		setState({
			...state,
			filteredData: newData,
		});
		setIsSet((prevState) => !prevState);
	};
	const populateForms = () => {
		let city = state.ListingData.map((item) => {
			return item.city;
		});
		city = new Set(city);
		city = [...city];
		city = city.sort();

		let homeType = state.ListingData.map((item) => {
			//returns the array of hometypes and then embeding them in the sets to
			//remove the duplicate data and then adding them in the array
			return item.homeType;
		});
		homeType = new Set(homeType);
		homeType = [...homeType];
		homeType = homeType.sort();
		setState({
			...state,
			populateFormsData: {
				homeType,
				city,
			},
		});
	};
	const changeView = (viewName) => {
		setState({
			...state,
			view: viewName,
		});
	};

	useEffect(() => {
		if (isSet) {
			filteredData();
		}
		// eslint-disable-next-line
	}, [state, isSet]);
	return (
		<>
			<Header />
			<section className="contentarea">
				<Filter
					change={change}
					globalState={state}
					Data={state.ListingData}
					populateForms={populateForms}
				/>
				<Listings
					Data={state.filteredData}
					change={change}
					globalState={state}
					changeView={changeView}
				/>
			</section>
		</>
	);
}
export default App;