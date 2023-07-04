import express from "express"
import {deleteCertficate, getAllCerticates, getOneCertificate, makeAcertificate, updateCerticate} from "../controllers/certificates"

const certificateRouter = express.Router()

certificateRouter.post("/create",makeAcertificate)
certificateRouter.get("/all",getAllCerticates)
certificateRouter.get("/one/:id",getOneCertificate)
certificateRouter.put("/update/:id",updateCerticate)
certificateRouter.delete("/delete/:id",deleteCertficate)

export default certificateRouter;