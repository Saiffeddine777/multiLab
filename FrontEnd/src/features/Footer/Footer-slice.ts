import {createSlice} from "@reduxjs/toolkit"

interface Coordinates {
   phone :string,
   email :string,
   fax:string,
   address :string,
   qualityContact:string,
   commercialContact:string
}

const coordinates:Coordinates ={
    phone :"00216 71 693 260",
    email :"multilab@planet.tn",
    fax:"00216 71 693 217",
    address :"Route de Bizerte au 02 Rue Amdoun- Borj Louzir 2073 ARIANA TUNISIE",
    qualityContact:"qualite@multilab.com.tn",
    commercialContact:"commercial@multilab.com.tn"
}


const coordinatesSlice = createSlice({
    name:"coordinates",
    initialState:coordinates,
    reducers: {}
})


export default coordinatesSlice.reducer;
