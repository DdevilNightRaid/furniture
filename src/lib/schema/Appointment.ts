import { z } from "zod"
export const AppointmentSchema = z.object({
    firstName: z.string({
      required_error: "Please enter your first name.",
    }).min(2).max(50),
    lastName: z.string({
      required_error: "Please enter your last name.",
    }).min(2).max(50),
    email: z.string().min(2).max(20).optional(),
    phonenumber: z.string({
      required_error: "Please enter your contact number.",
    }).min(2).max(10),
    message: z.string().min(2).max(200).optional(),
    appointmentDate: z.date({
      required_error: "A date of appointment is required.",
    }),
})
  