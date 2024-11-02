import { Router } from "express";
const router = Router();

import {
  changePassword,
  forgetPassword,
  login,
  logout,
  register,
  verifyEmail,
} from "../controllers/authController.js";
import {
  validateChangePasswordInput,
  validateForgetPasswordInput,
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
import {
  getUserRole,
} from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);
router.get("/userRole", getUserRole);
router.post("/verify-email", verifyEmail);
router.post("/change-password",authenticateUser,validateChangePasswordInput, changePassword);
router.post(
  "/forget-password",
  validateForgetPasswordInput,
  forgetPassword
);




// not in use yet

// router.post("/verify-email", verifyEmail);
// router.get("/admin-data", getAdminData);
// router.patch(
//   "/update-user-details/:id",
//   authenticateUser,
//   upload.fields([
//     { name: "avatar", maxCount: 1 },
//     { name: "avatar1", maxCount: 1 },
//   ]),
//   updateAdminData
// );

export default router;
