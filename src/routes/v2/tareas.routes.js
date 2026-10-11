import { Router } from "express"
import { getTareas, createTarea, updateTarea, deleteTarea } from "../../controllers/v2/tareas.controller.js"
import { validarCreacionTarea } from "../../middlewares/validaciones.middleware.js"

const router = Router()

router.get("/", getTareas)
router.post("/", validarCreacionTarea, createTarea)
router.put("/:id", updateTarea)
router.delete("/:id", deleteTarea)

export default router