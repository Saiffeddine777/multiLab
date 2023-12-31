import {configureStore} from "@reduxjs/toolkit"
import servicesReducer from "../features/services/Services-api-slice"
import  messageReducer  from "../features/Contact/Contact.-api-slice"
import coordinatesReducer from "../features/Footer/Footer-slice.ts"
import certificateReducer from "../features/Qualifications/Certficates/Certicates-api-slice.ts"
import teamMemberReducer from "../features/Qualifications/Team/Team-slice"
import clientReducer from "../features/Portfolio/Portfolio-slice"
import oneteamMemberReducer from "../features/Qualifications/Team/TeamMember/TeamMember-api-slice.ts"
import oneCertificateReducer from "../features/Qualifications/Certficates/OneCertificate/OneCertificate-api-slice"
import reviewsReducer from "../features/reviews/Reviews-api-slice.ts"
import visibleReducer  from "../features/Qualifications/Image-slice.ts"
import  visible1Reducer  from "../features/Qualifications/image1-slice.ts"



const store = configureStore({
    reducer:{
        services:servicesReducer,
        message:messageReducer,
        coordinates:coordinatesReducer,
        certificates:certificateReducer,
        teamMembers : teamMemberReducer,
        clients: clientReducer,
        oneTeamMember:oneteamMemberReducer,
        oneCertificate :oneCertificateReducer,
        reviews: reviewsReducer,
        visible:visibleReducer,
        visible1:visible1Reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export default store;