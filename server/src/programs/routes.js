const { Router} = require("express")
const controller = require('./controller')

const router = Router();

router.get("/", controller.getPrograms);
router.get("/:id", controller.getProgramById)
router.post("/", controller.addProgram);
router.put("/:id", controller.updateProgram)
router.delete("/:id", controller.deleteProgram)
router.delete("/", controller.deleteAll)


module.exports = router