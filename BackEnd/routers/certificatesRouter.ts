import express from "express"
import {deleteCertficate, getAllCerticates, getOneCertificate, insertCertficateFile, makeAcertificate, updateCerticate} from "../controllers/certificates"
import { uploadCertificates } from "../files/multer"

const certificateRouter = express.Router()

certificateRouter.post("/create",makeAcertificate)
certificateRouter.post("/certificate",uploadCertificates.single("certificate"),insertCertficateFile)
certificateRouter.get("/all",getAllCerticates)
certificateRouter.get("/one/:id",getOneCertificate)
certificateRouter.put("/update/:id",updateCerticate)
certificateRouter.delete("/delete/:id",deleteCertficate)

export default certificateRouter;