import { createSlice } from "@reduxjs/toolkit";
import { getSpeciesReduces, getPhylumReduces, deleteSpeciesReduces, getKingdomReduces, getClassReduces, getOrderReduces, getFamilyReduces, getGenusReduces, createSpeciesReducer, updateSpeciesReduces } from "./actionSpecies";

export const speciesDetail = createSlice({
	name: "species",
	initialState: {
		data: [],
		pagination: {},
		loading: false,
		error: "",
	},
	extraReducers: (builder) => {
		getSpeciesReduces(builder);
		createSpeciesReducer(builder);
		updateSpeciesReduces(builder);
		deleteSpeciesReduces(builder);
	},
});

export const kingdom = createSlice({
	name: "kingdom",
	initialState: {
		dataKingdom: [],
		loadingKingdom: false,
		error: null,
	},
	extraReducers: (builder) => {
		getKingdomReduces(builder);
	},
});

export const phylum = createSlice({
	name: "phylum",
	initialState: {
		dataPhylum: [],
		loadingPhylum: false,
		error: null,
	},
	extraReducers: (builder) => {
		getPhylumReduces(builder);
	},
});

export const classType = createSlice({
	name: "classType",
	initialState: {
		dataClass: [],
		loadingClass: false,
		error: null,
	},
	extraReducers: (builder) => {
		getClassReduces(builder);
	},
});

export const order = createSlice({
	name: "order",
	initialState: {
		dataOrder: [],
		loadingOrder: false,
		error: null,
	},
	extraReducers: (builder) => {
		getOrderReduces(builder);
	},
});

export const family = createSlice({
	name: "family",
	initialState: {
		dataFamily: [],
		loadingFamily: false,
		error: null,
	},
	extraReducers: (builder) => {
		getFamilyReduces(builder);
	},
});

export const genus = createSlice({
	name: "genus",
	initialState: {
		dataGenus: [],
		loadingGenus: false,
		error: null,
	},
	extraReducers: (builder) => {
		getGenusReduces(builder);
	},
});


export const speciesReducer = speciesDetail.reducer;
export const kingdomReducer = kingdom.reducer;
export const phylumReducer = phylum.reducer;
export const classReducer = classType.reducer;
export const orderReducer = order.reducer;
export const familyReducer = family.reducer;
export const genusReducer = genus.reducer;
